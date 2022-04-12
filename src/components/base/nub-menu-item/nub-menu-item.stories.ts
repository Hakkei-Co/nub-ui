import { html, TemplateResult } from 'lit';
// import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './nub-menu-item'
import '../nub-icon/nub-icon';

export default {
    title: 'Nubs/Menu/Menu Item',
    component: 'nub-menu-item',

}

const Template = (): TemplateResult =>
    html`
    <nub-menu-item>
       <div slot="header">
           Test Slot

           <nub-icon
                   name="fas-chevron-right"
                   library="fa"
                   size="18px"
           ></nub-icon>
       </div>
    </nub-menu-item>
  `;

export const MenuItem = Template.bind({});
// Accordion.args = {
//     singlePanel: true,
//     clean: false,
//     allOpen: false,
// };
