declare global {
  interface Element {
    // overide ARIAMixin interface in TS lib.dom.d.ts 4.4.4+ https://github.com/microsoft/TypeScript/issues/46456
    role: unknown;
    ariaActiveDescendant: unknown;
    ariaControls: unknown;
    ariaLabelledBy: unknown;
    ariaDisabled: unknown;
    ariaExpanded: unknown;
    ariaSelected: unknown;
    ariaAtomic: unknown;
    ariaAutoComplete: unknown;
    ariaBusy: unknown;
    ariaChecked: unknown;
    ariaColCount: unknown;
    ariaColIndex: unknown;
    ariaColSpan: unknown;
    ariaCurrent: unknown;
    ariaHasPopup: unknown;
    ariaHidden: unknown;
    ariaKeyShortcuts: unknown;
    ariaLabel: unknown;
    ariaLevel: unknown;
    ariaLive: unknown;
    ariaModal: unknown;
    ariaMultiLine: unknown;
    ariaMultiSelectable: unknown;
    ariaOrientation: unknown;
    ariaPlaceholder: unknown;
    ariaPosInSet: unknown;
    ariaPressed: unknown;
    ariaReadOnly: unknown;
    ariaRequired: unknown;
    ariaRoleDescription: unknown;
    ariaRowCount: unknown;
    ariaRowIndex: unknown;
    ariaRowSpan: unknown;
    ariaSetSize: unknown;
    ariaSort: unknown;
    ariaValueMax: unknown;
    ariaValueMin: unknown;
    ariaValueNow: unknown;
    ariaValueText: unknown;
  }
}

let roleRegistered = false;
let ariaRegistered = false;

// eslint-disable-next-line
if (!roleRegistered && !Element.prototype.hasOwnProperty('role')) {
  reflect(Element.prototype, 'role', 'role');
  roleRegistered = true;
}

// https://www.w3.org/TR/wai-aria-1.0/states_and_properties
// eslint-disable-next-line
if (!ariaRegistered && !Element.prototype.hasOwnProperty('ariaLabel')) {
  ariaRegistered = true;
  [
    'ActiveDescendant',
    'Atomic',
    'AutoComplete',
    'Busy',
    'Checked',
    'ColCount',
    'ColIndex',
    'ColSpan',
    'Controls',
    'Current',
    'DescribedBy',
    'Details',
    'Disabled',
    'ErrorMessage',
    'Expanded',
    'FlowTo',
    'HasPopup',
    'Hidden',
    'Invalid',
    'KeyShortcuts',
    'Label',
    'LabelledBy',
    'Level',
    'Live',
    'Modal',
    'MultiLine',
    'MultiSelectable',
    'Orientation',
    'Owns',
    'Placeholder',
    'PosInSet',
    'Pressed',
    'ReadOnly',
    'Relevant',
    'Required',
    'RoleDescription',
    'RowCount',
    'RowIndex',
    'RowSpan',
    'Selected',
    'SetSize',
    'Sort',
    'ValueMax',
    'ValueMin',
    'ValueNow',
    'ValueText',
  ].forEach(name =>
    reflect(Element.prototype, `aria-${name.toLowerCase()}`, `aria${name}`)
  );
}

export function reflect(
  element: HTMLElement | Element,
  attributeName: string,
  propertyName: string
) {
  Object.defineProperty(element, propertyName, {
    configurable: true,
    enumerable: true,
    get: function () {
      return this.hasAttribute(attributeName)
        ? this.getAttribute(attributeName)
        : null;
    },
    set: function (value) {
      if (value !== null) {
        this.setAttribute(attributeName, value);
      } else {
        this.removeAttribute(attributeName);
      }
    },
  });
}
