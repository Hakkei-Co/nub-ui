import * as utils from '../../utils/utils';
import "./hakion-button";
// Setup
export default {
  title: 'hakion-button',
  tag: 'hakion-button',
  parameters: {
    actions: {
      handles: ['tapped'],
    },
  },
  decorators: [],
};

// Define properties, events, etc. for component
const PROPS = ['color',];
const EVENTS = ['tapped'];
const SLOTS = ['one', 'two'];

// Template
const Template = args => {
  const el = document.createElement('hakion-button');

  utils.bindProps(el, PROPS, args);
  utils.bindEvents(el, EVENTS, args);
  utils.bindSlots(el, SLOTS, args);

  return el;
};

// Stories
export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};