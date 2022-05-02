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
           Menu Item
       </div>

        <div slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget hendrerit enim. Cras lacus est, venenatis vestibulum auctor sit amet, interdum eu mi. Suspendisse potenti. Etiam sit amet erat arcu. Mauris bibendum auctor ante, at commodo quam lacinia in. Duis nulla augue, malesuada in arcu eu, rutrum auctor ex. Pellentesque sed tristique massa. Fusce mattis blandit aliquam. Nunc et accumsan ligula.
        </div>
    </nub-menu-item>
  `;

export const MenuItem = Template.bind({});
// Accordion.args = {
//     singlePanel: true,
//     clean: false,
//     allOpen: false,
// };
