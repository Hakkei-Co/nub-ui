// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'My Component',
  notes: readme,
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `
  <hakion-button>test</my-component>
`;