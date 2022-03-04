module.exports = {
  stories: [
    '../src/components/hakion-button/hakion-button.stories.js', // default page
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@whitespace/storybook-addon-html',
  ],
  "framework": "@storybook/web-components"
}