import { html, TemplateResult } from 'lit';
// import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './nub-menu'
import '../nub-menu-item/nub-menu-item'
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import '../nub-icon/nub-icon';

export default {
    title: 'Nubs/Menu/Menu',
    component: 'nub-menu',
    args: {
        ItemsSlotContent: `
            <nub-menu-item>
                <div slot="header">
                    Menu Item 1
                    <nub-icon
                        name="fas-chevron-right"
                        library="fa"
                        size="18px">
                    </nub-icon>
                </div>
            
            </nub-menu-item>
            <nub-menu-item>
                <div slot="header">
                    Menu Item 2
                    <nub-icon
                        name="fas-chevron-right"
                        library="fa"
                        size="18px">
                    </nub-icon>
                </div>
            
            </nub-menu-item>
            <nub-menu-item>
                <div slot="header">
                    Menu Item 3
                    <nub-icon
                        name="fas-chevron-right"
                        library="fa"
                        size="18px">
                    </nub-icon>
                </div>
            
            </nub-menu-item>
            <nub-menu-item>
                <div slot="header">
                    Menu Item 4
                    <nub-icon
                        name="fas-chevron-right"
                        library="fa"
                        size="18px">
                    </nub-icon>
                </div>
            
            </nub-menu-item>

`,

    }
}

const Template = ({ItemsSlotContent}): TemplateResult =>
    html`
    <nub-menu>
        <div slot="panels">
            ${unsafeHTML(`${ItemsSlotContent}`)}
        </div>
    </nub-menu>
  `;

export const Menu = Template.bind({});
// Accordion.args = {
//     singlePanel: true,
//     clean: false,
//     allOpen: false,
// };
