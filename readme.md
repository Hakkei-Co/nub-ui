![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/hakkei-co/hakion-ui.git
cd hakion-ui
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out the documentation [here](https://stackoverflow.com/questions/59970043/custom-element-setup-constructor-vs-connectedcallback).

## Naming Components

> Create new components as a last resort. You should review what components are available and decide whether adding properties to an existing one will work first.

New components satisfy these properties:

1. Hyphen-case
1. Prefixed with `hakion-*`.

For example, a suitable name for a button web component is `hakion-button`.

### Code Generator

Use Stencil to generate components.

```
npm run generate
```

Input a name when prompted. Stencil is configured to create a folder with your component name with three files: `file.tsx`, `file.css`, and `readme.md`.
It will also add a folder `test` with two files: `test/file.e2e.ts` and `test/file.spec.tsx` inside.

You can update the generated `readme.md` by running the build command:

```
npm run build
```

## Quickstart

The `Host` element is a virtual component which means that it will never be rendered in the DOM but it can be used to set attributes and event listeners on the Host element itself (I.e. the component tag that is displayed).

```jsx
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() focus = false;

  render() {
    return (
      <Host
        aria-hidden={this.focus ? 'false' : 'true'}
        class={{
          'app-data': true,
          'is-active': this.focus,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
```

A `slot` element allows for child elements to be supplied for rendering within specific locations in the component tree.

```jsx
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
```

We can also provide named slots to specify where the child content will be output in the rendered component tree:

```jsx
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <h1>Heading</h1>
        <slot name="first" />
        <slot name="second" />
      </Host>
    );
  }
}

// Usage
<my-component>
  <div>
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>
</my-component>;
```

## Style Guide

### Icons

#### Usage

V5 documentation: [Link](https://ionic.io/ionicons/usage)
Properties: [Link](https://github.com/ionic-team/ionicons/tree/main/src/components/icon)

- [Style Guide](https://stenciljs.com/docs/style-guide)
- [State Management](https://stenciljs.com/docs/stencil-store)


### Node Modules

How to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

- Run `npm install my-component --save`
- Put a script tag similar to this `<script type='module' src='node_modules/my-component/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc


### Testing

- [Unit Testing in Stenciljs](https://eliteionic.com/tutorials/the-basics-of-unit-testing-in-stencil-js/)

### Import from App

- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc

### Additional Guides

- [Ionic Components](https://ionicframework.com/docs/components)
- [Three-elements](https://three-elements.hmans.co/guide/getting-started.html#prerequisites)
- [Example Projects](https://github.com/djabif/Awesome-Ionic)
- [Style Guide](https://stenciljs.com/docs/style-guide)
- [Web Workers](https://stenciljs.com/docs/web-workers)
- [Hydrate App](https://stenciljs.com/docs/hydrate-app)
- [Local Assets](https://stenciljs.com/docs/local-assets)
- [Service Workers](https://stenciljs.com/docs/service-workers)
- [Stencil Store](https://stenciljs.com/docs/stencil-store)
