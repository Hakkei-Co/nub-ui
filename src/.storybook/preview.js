import theme from './CustomTheme';
import { addParameters } from '@storybook/web-components';
import './storybook-styles.css';
import { addons } from '@storybook/addons';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

// import { detectColorScheme } from './detectColorScheme';
// import { FORCE_RE_RENDER} from "@storybook/core-events";

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
        class: 'light',
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
    container: DocsContainer,
    page: DocsPage,
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...theme.dark },
    // Override the default light theme
    light: { ...theme.light },
  },
});

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
colorScheme.addEventListener('change', function (e) {
  console.log('Updated color-scheme');
});

export const globalTypes = {
  darkMode: {
    dark: { ...theme.dark },
    light: { ...theme.light },
    darkClass: {
      get theme() {
        let isDarkMode = parent.document.body.classList.contains('dark');
        return isDarkMode ? theme.dark : theme.light;
      },
    },
  },
};
// // // get an instance to the communication channel for the manager and preview
const channel = addons.getChannel();

// // switch body class for story along with interface theme
channel.on('DARK_MODE', isDark => {
  if (isDark) {
    console.log(document.querySelector('html:not(.style-scope)'));
    // addons.getChannel().emit(FORCE_RE_RENDER);
  } else {
    // document.body.classList.remove('dark');
    console.log(document.querySelector('html:not(.style-scope)'));
  }
  // detectColorScheme();
  // addons.getChannel().emit(FORCE_RE_RENDER);
});
