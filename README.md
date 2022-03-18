[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

For quick browser-based development, open this project in Gitpod. It will automatically build an environment and run Storybook.

![alt text](https://i.imgur.com/4t7Svqk.png "Title")


# Nub design system

Nub UI is a [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) built on top of [Outline](https://github.com/phase2/outline) design system starter kit.

Outline is built with the following tools:

- [Lit](https://lit.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Custom Properties (CSS Vars)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS](https://tailwindcss.com/) (Optional)
- [Tailwind JIT Compiler](https://tailwindcss.com/docs/just-in-time-mode)
- [Storybook](https://storybook.js.org/)
- [Rollup](https://rollupjs.org/guide/en/)

## Contributing to Outline

Information regarding how to contribute to Outline development, can be found in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Local Setup

Run the following steps to ensure your environment is installed and up to date. This assumes you are using [NVM](https://github.com/nvm-sh/nvm) locally to manage your NPM version(s).

### Typescript

**IMPORTANT**: Supported Typescript versions are v4.4.4 to v4.5.0.

### Checkout the repository

```bash
git clone git@github.com:hakkei-co/nub-ui.git && cd nub-ui
```

---

### Ensure you are using the correct version of `npm`

```bash
nvm use
```

If you need to update your node version, see the [usage documentation](https://github.com/nvm-sh/nvm#usage) for nvm.

---

### Install project dependencies

```bash
yarn install
```

### To with another project

Create environment variables `NPM_TOKEN_PRIVATE` and `NPM_TOKEN_DEFAULT` and export them to your shell environment.  Place them in your `.bashrc` file for convenience.

```bash
export NPM_TOKEN_PRIVATE=xxxxxxxxxxxxxxxx
export NPM_TOKEN_DEFAULT=yyyyyyyyyyyyyyyy
```

Create an `.npmrc` file using the following details.

```bash
@hakkei-co:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN_PRIVATE}
//registry.npmjs.org/:_authToken=${NPM_TOKEN_DEFAULT}
```

Install in an external project like so:

```bash
$ yarn add @hakkei-co/nub-ui@latest
```

## Managing Registries

You need to update your registry to access this private organization node package.

```bash
$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com
```

Login using the access tokens provided for you. You can verify which registry you are using by running
```
$ yarn config list

# or for npm
$ npm config list

# you will need to manually specify which registry you are installing packages from if you override the default npm registry
$ npm i <some-package> --registry=https://npm.pkg.github.com
```




---

## Storybook Development

Primary component development is done and demonstrated via [Storybook](https://storybook.js.org/).

### Start storybook instance.

```bash
yarn start
```

---

## Production builds

Runs both `tsc` and `yarn rollup` to handle the following:

- Packaging individual components to `dist` directory.
- Packaging modern and legacy builds of all components to `dist` directory.

```bash
yarn build
```

---
> To only run the rollup build, which handles the component bundling into modern and legacy builds:

### One time build

```bash
yarn rollup
```

---

### Enable in watch mode

```bash
yarn rollup.watch
```

---

## Resetting local environment

The following commands help clean a local environment.

- Cleanup generated assets: `yarn clean`
- Cleanup node packages: `yarn reset`
- Full cleanup & restart: `yarn reboot`
