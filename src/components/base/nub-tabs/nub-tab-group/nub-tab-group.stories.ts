import { html, TemplateResult } from 'lit';
import './nub-tab-group';
import '../nub-tab/nub-tab';
import '../nub-tab-panel/nub-tab-panel';
import '../../nub-header/nub-header';
import '../../nub-accordion/nub-accordion';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const tabControlPosition: string[] = ['top', 'start'];

interface TabData {
  title: string;
  content: string;
  disabled?: boolean;
}

const formatTitle = title => {
  return title.replace(/\s+/g, '-').toLowerCase();
};

const tabData: TabData[] = [
  {
    title: 'Tab Number One',
    content: `
      <nub-header>Content for Tab Number One</nub-header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="http://loripsum.net/" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `,
  },
  {
    title: 'Tab Number Two',
    content: `
      <nub-header>Content for Tab Number Two</nub-header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="#" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `,
  },
  {
    title: 'Tab Number Three',
    content: `
      <nub-header>Content for Tab Number Three</nub-header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="#" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `,
  },
  {
    title: 'Disabled',
    content: `<p>This is a disabled tab panel.</p>`,
    disabled: true,
  },
];
export default {
  title: 'Nubs/Tabs',
  component: 'nub-tab-group',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    placement: {
      name: 'Control Placement',
      options: tabControlPosition,
      control: {
        type: 'select',
      },
      description: 'The placement of the tab controls.',
    },
  },
};

const Template = ({ placement }): TemplateResult =>
  html`<nub-tab-group placement=${placement}>
    ${tabData.map(panel => {
      return html`<nub-tab
          slot="nav"
          ?disabled=${panel.disabled}
          panel="${formatTitle(panel.title)}"
          ><nub-icon slot="tab-icon" library="bootstrap" name="emoji-smile"></nub-icon><span>${panel.title}</span></nub-tab
        >
        <nub-tab-panel name="${formatTitle(panel.title)}">
          ${unsafeHTML(`${panel.content}`)}
        </nub-tab-panel> `;
    })}
    <div slot="accordion-wrapper">
      <nub-accordion ?clean=${true} ?single-panel=${true}>
        ${tabData.map(panel => {
          return html` <nub-accordion-panel
            ?disabled=${panel.disabled}
            slot="panels"
          >
            <h5 slot="heading">${panel.title}</h5>
            ${unsafeHTML(`${panel.content}`)}
          </nub-accordion-panel>`;
        })}
      </nub-accordion>
    </div>
  </nub-tab-group> `;

export const TabGroup = Template.bind({});
TabGroup.args = {
  placement: 'start',
};
