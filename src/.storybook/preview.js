import customTheme from './CustomTheme';
import { addParameters } from '@storybook/web-components';
import './storybook-styles.css';

addParameters({
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    expanded: true,
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Documentation',
        'Design Tokens',
        'Media',
        'Navigation',
        'Content',
        'Templates',
        'Pages',
        'Code Examples',
        'Utility Components',
      ],
    },
  },
  themes: {
    default: 'light',
    list: [
      {
        name: 'Light',
        class: [],
        color: '#FFFFFE',
        default: true,
      },
      {
        name: 'Dark',
        // The class dark will be added to the body tag
        class: 'dark',
        color: '#27292E',
      },
    ],
  },
  docs: {
    theme: customTheme,
  },
});

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
colorScheme.addEventListener('change', function (e) {
  console.log('Updated color-scheme');
});
export const globalTypes = {
  // theme: {
  //   name: 'Theme',
  //   description: 'Global theme for components',
  //   defaultValue: 'light',
  //   toolbar: {
  //     icon: 'circlehollow',
  //     // Array of plain string values or MenuItem shape (see below)
  //     items: ['light', 'dark'],
  //     // Property that specifies if the name of the item will be displayed
  //     showName: true,
  //   },
  // },
  darkMode: true,
};
