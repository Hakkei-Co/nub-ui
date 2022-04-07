/* Set a different path for compiled assets
 * if you change this value you must also change
 * "outDir" in your tsconfig.json
 */
const destBasePath = 'dist';
module.exports = {
  destBasePath,
  components: {
    // This should include an array of directories under
    // src/components/ that contain component files.
    // Currently used only in `js.output.lazy` mode.
    bundle: ['outline', 'base', 'utility'],
  },
  assets: {
    dir: ['src/assets'],
    sync: ['dist', 'src/.storybook/static/dist'],
  },
  css: {
    global: [
      {
        src: 'src/shared.css',
        dest: `${destBasePath}/shared.css`,
      },
      {
        src: 'src/tailwind.css',
        dest: `${destBasePath}/tailwind.css`,
      },
      {
        src: 'src/.storybook/storybook.css',
        dest: `${destBasePath}/storybook.css`,
      },
    ],
    fouc: {
      enabled: true,
      dest: `${destBasePath}/fouc.css`,
    },
  },
  js: {
    output: {
      // @see src/outline-lazy.ts
      // @status experimental
      lazy: false,
      // Export full library to `nubs.js`.
      // @status stable
      full: true,
      // @see src/data.ts
      // @status optional
      data: false,
    },
  },
  color: {
    sets: ['primary', 'secondary', 'tertiary', 'neutral', 'demo'],
  },
  icons: {
    libraries: {
      bootstrap: true,
      boxicons: true,
      fontawesome: true,
      heroicons: true,
      iconoir: true,
      ionicons: true,
      jam: true,
      lucide: true,
      material: true,
      remix: true,
      unicons: true,
    },
    defaults: {
      library: 'bootstrap',
      size: '16px',
      icon: 'chevron-right',
    },
  },
  youtube: {
    // Replace with the YouTube id of any video to replace the
    // default video in any storybook component.
    defaultVideo: 'xiqgG8HUZXE',
  },
  vimeo: {
    // Replace with the Vimeo id of any video to replace the
    // default video in any storybook component.
    defaultVideo: '432639001',
  },
  // Exclude stories by adding the directory they can be found in
  // ex ['nub-button'] this excludes any story in this directory
  excludedStories: ['nub-video-vimeo', 'nub-video-youtube'],
  // @see https://splidejs.com/guides/options
  // @todo: Ensure this config is utilized.
  splide: {
    keyboard: false,
    arrows: true,
  },
  entryPoints: {
    components: [
      './src/components/base/nub-alert/nub-alert.js',
      './src/components/base/nub-breadcrumbs/nub-breadcrumbs.js',
      './src/components/base/nub-button/nub-button.js',
      './src/components/base/nub-card/nub-card.js',
      './src/components/base/nub-container/nub-container.js',
      './src/components/base/nub-header/nub-header.js',
      './src/components/base/nub-icon/nub-icon.js',
      './src/components/base/nub-tabs/nub-tabs.js',
    ],
    explicitSideEffects: [
      './src/polyfills/index.js',
      './src/polyfills/aria-reflect.js',
    ],
  },
};
