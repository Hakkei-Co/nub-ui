/**
 * This file is auto generated via npm run generate.resolved-outline
 */
export default {
  destBasePath: 'dist',
  components: { bundle: ['outline', 'utility'] },
  assets: { dir: ['src/assets'], sync: ['dist', 'src/.storybook/static/dist'] },
  css: {
    global: [
      { src: 'src/shared.css', dest: 'dist/shared.css' },
      { src: 'src/tailwind.css', dest: 'dist/tailwind.css' },
      { src: 'src/.storybook/storybook.css', dest: 'dist/storybook.css' },
    ],
    fouc: { enabled: true, dest: 'dist/fouc.css' },
  },
  js: { output: { lazy: true, full: true, data: false } },
  color: { sets: ['primary', 'secondary', 'tertiary', 'neutral', 'demo'] },
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
    defaults: { library: 'bootstrap', size: '16px', icon: 'chevron-right' },
  },
  youtube: { defaultVideo: 'xiqgG8HUZXE' },
  vimeo: { defaultVideo: '432639001' },
  excludedStories: ['nub-video-youtube', 'nub-video-vimeo'],
  splide: { keyboard: false, arrows: true },
};
