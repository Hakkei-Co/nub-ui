import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
// import { AllIcons } from '../outline-icon/config';
import { argTypeTarget } from '../outline-link/config';
import { argTypeSlotContent } from '../../base/outline-element/utils/utils';
import { ButtonVariant, ButtonSize } from './outline-button';
import './outline-button';
import { TooltipPosition } from '../outline-tooltip/outline-tooltip';
const buttonOptions: ButtonVariant[] = [
  'none',
  'primary',
  'secondary',
  'tertiary',
];

const sizeOptions: ButtonSize[] = ['small', 'medium', 'large'];

const tooltipPositionOptions: TooltipPosition[] = [
  'bottom',
  'top',
  'left',
  'right',
];

export default {
  title: 'Atoms/Button',
  component: 'outline-button',
  argTypes: {
    ...argTypeSlotContent,
    target: argTypeTarget,
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    url: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: buttonOptions,
      },
    },
    size: {
      control: {
        type: 'select',
        options: sizeOptions,
      },
    },
    disabledInfo: {
      control: {
        type: 'text',
      },
    },
    tooltipInfo: {
      control: {
        type: 'text',
      },
    },
    position: {
      control: {
        type: 'select',
        options: tooltipPositionOptions,
      },
    },
    // icon: {
    //   control: {
    //     type: 'select',
    //     options: AllIcons,
    //   },
    // },
  },
  args: {
    variant: 'primary',
  },
};

const Template = ({
  defaultSlot,
  isDisabled,
  icon,
  url,
  target,
  variant,
  size,
  onClick,
  onKeyUp,
  disabledInfo,
  tooltipInfo,
  position,
}): TemplateResult =>
  html`
    <outline-button
      url="${ifDefined(url)}"
      target="${ifDefined(target)}"
      variant="${variant}"
      size="${size}"
      ?isDisabled="${isDisabled}"
      icon="${ifDefined(icon)}"
      onClick="${onClick}"
      onKeyUp="${onKeyUp}"
      disabledInfo="${disabledInfo}"
      tooltipInfo="${tooltipInfo}"
      position="${position}"
    >
      ${defaultSlot}
    </outline-button>
  `;

export const Link = Template.bind({});
Link.args = {
  defaultSlot: 'Link button',
  url: '#',
  size: 'medium',
  position: 'bottom',
};

export const IconLink = Template.bind({});
IconLink.args = {
  defaultSlot: 'Link button w/icon',
  size: 'medium',
  url: '#',
  variant: 'primary',
  icon: 'arrowNarrowRightOutline',
  position: 'bottom',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  defaultSlot: 'Primary button',
  size: 'medium',
  variant: 'primary',
  onClick: (e: Event) => {
    e.preventDefault();
    console.log('onClick called!!');
  },
  onKeyUp: (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === ' ') {
      console.log(e);
    }
  },
  position: 'bottom',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  defaultSlot: 'Secondary button',
  variant: 'secondary',
  size: 'medium',
  position: 'bottom',
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  defaultSlot: 'Tertiary button',
  variant: 'tertiary',
  size: 'medium',
  position: 'bottom',
};
