import theme from './CustomTheme';
import { addParameters } from '@storybook/web-components';
import { addons } from '@storybook/addons';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import './storybook-styles.css';
import '@ionic/core/css/core.css';

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
        'Nubs',
        'Outline',
        'Layout',
        'Pages',
        'Code Examples',
        'Utility Components',
      ],
    },
  },
  docs: {
    stylePreview: false,
    theme: docTheme(),
  },
});

function docTheme() {
  let isDarkMode =
    document.documentElement.getAttribute('data-theme') === 'dark';
  let bodyTheme = document.body.getAttribute('class') === 'dark';
  return isDarkMode || bodyTheme ? theme.dark : theme.light;
}

export const globalTypes = {
  darkMode: document.body.getAttribute('class') == 'dark',
};
export const parameters = {
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: false,
    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
};
const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
colorScheme.addEventListener('change', function (e) {
  console.log('Updated color-scheme');
});

// This will get invoked on import
function callback(mutationsList, observer) {
  let html = document.documentElement;
  mutationsList.forEach(mutation => {
    // watch changes to classList on root html tag
    if (mutation.attributeName === 'class') {
      if (document.documentElement.getAttribute('class') == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
      console.log('changed!', mutation);
    }
  });
}

const mutationObserver = new MutationObserver(callback);

// This set our MutationObserver to look for any changes to the main’s attributes.
mutationObserver.observe(document.documentElement, { attributes: true });

// get an instance to the communication channel for the manager and preview
const channel = addons.getChannel();

// switch body class for story along with interface theme
channel.on('DARK_MODE', isDark => {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});
