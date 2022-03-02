import { FunctionalComponent } from '@stencil/core';

interface FormatPropsToConsole {
  propReceived?: string;
  propName?: string;
  componentName?: string | any;
}

export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function formatPropsToConsole(value: any, name: string): FormatPropsToConsole {
  return {
    propReceived: value,
    propName: name,
  };
}

export const AddClass: FunctionalComponent = (_, children, utils) =>
  utils.map(children, (child) => ({
    ...child,
    vattrs: {
      ...child.vattrs,
      class: `${child.vattrs.class} add-class`,
    },
  }));

export const isCustomElement = (el: HTMLElement): boolean => {
  return customElements.get(el.localName) && el.localName.includes('-');
};

export const findAllCustomElements = (nodes): Array<Element> => {
  let allCustomElements = [];
  for (let i = 0, el; (el = nodes[i]); ++i) {
    if (isCustomElement(el) && el.localName !== 'style' && !allCustomElements.find((ce) => ce === el.localName)) {
      allCustomElements.push(el.localName);
    }

    if (el.shadowRoot) {
      findAllCustomElements(el.shadowRoot.querySelectorAll('*'));
    }
  }
  return allCustomElements;
};
