import { setMode } from '@stencil/core';
import { setupConfig } from '@ionic/core';

export default () => {
  setupConfig({
    mode: 'ios',
    statusTap: true,
    rippleEffect: true,
  });
};

setMode((elm) => {
  // NOTE: you can write whatever you want here - it's up to you. This
  // function must return one of the style "modes" defined in step 1.
  return (elm as any).mode || elm.getAttribute('mode') || 'default';
});

(async () => {
  customElements.whenDefined('example-scene').then((res) => {
    console.log('app.ts', res);
  });
  const todoListElement = document.querySelector('example-scene');
  console.log('TODOLIST', todoListElement);
  // await todoListElement.hydrateSomething('-1 0.5 -3').then((res) => {
  //   console.log('componentDidRender after setIcon', res);
  // });
})();
