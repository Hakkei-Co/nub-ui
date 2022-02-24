import { FunctionalComponent } from '@stencil/core';

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const AddClass: FunctionalComponent = (_, children, utils) =>
  utils.map(children, child => ({
    ...child,
    vattrs: {
      ...child.vattrs,
      class: `${child.vattrs.class} add-class`,
    },
  }));
