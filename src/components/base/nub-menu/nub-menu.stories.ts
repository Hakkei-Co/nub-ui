import { html, TemplateResult } from 'lit';
// import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './nub-menu'
import '../nub-menu-item/nub-menu-item'
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import '../nub-icon/nub-icon';

interface MenuData {
    title: string;
    content: string;
}

const MENU_ITEMS: MenuData[] = [
    {
        title: 'React',
        content: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.'
    },
    {
        title: 'Vue',
        content: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.'
    },
    {
        title: 'Angular',
        content: 'Angular is a platform for building mobile and desktop web applications. '
    },
    {
        title: 'Web Components',
        content: 'Web Components are a set of features that provide a standard component model for the Web allowing for encapsulation and interoperability of individual HTML elements.'
    }
]

const itemsHTML = MENU_ITEMS.map(item => {
    return `
                 <nub-menu-item>
                    <div slot="header">
                        ${item.title}
                    </div>
                     <div slot="content">
                        ${item.content}
                    </div>
                </nub-menu-item>
                `
}).join(' ')

export default {
    title: 'Nubs/Menu/Menu',
    component: 'nub-menu',
    args: {
        ItemsSlotContent: `
            ${itemsHTML}
`
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
