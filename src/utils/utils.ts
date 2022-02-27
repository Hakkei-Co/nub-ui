import { FunctionalComponent } from '@stencil/core';

interface FormatPropsToConsole {
  value: string;
  name: string;
}

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function formatPropsToConsole(value: any, name: string): FormatPropsToConsole {
  return {
    value: value,
    name: name,
  }
}

export const AddClass: FunctionalComponent = (_, children, utils) =>
  utils.map(children, (child) => ({
    ...child,
    vattrs: {
      ...child.vattrs,
      class: `${child.vattrs.class} add-class`,
    },
  }));
