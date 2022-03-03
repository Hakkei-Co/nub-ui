import { FunctionalComponent } from '@stencil/core';

interface FormatPropsToConsole {
  propReceived?: string;
  propName?: string;
  componentName?: string | any;
}

export function updateStyle(elem: HTMLElement): void {
  const shadow = elem.shadowRoot;
  const childNodes = Array.from(shadow.childNodes);

  childNodes.forEach((childNode) => {
    if (childNode.nodeName === 'STYLE') {
      childNode.textContent = `
        div {
          width: ${elem.getAttribute('l')}px;
          height: ${elem.getAttribute('l')}px;
          background-color: ${elem.getAttribute('c')};
        }
      `;
    }
  });
}

export function appendChildrenToNode(node, ...children) {
  const documentFragment = document.createDocumentFragment();
  children.forEach((child) => {
    if (Array.isArray(child)) {
      child.forEach((child) => documentFragment.appendChild(child));
    } else {
      documentFragment.appendChild(child);
    }
  });
  node.appendChild(documentFragment);
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
