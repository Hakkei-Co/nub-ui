import { html, TemplateResult } from 'lit';
// Import the component itself.
import './nub-admin-links';

export default {
  title: 'Nubs/Administrative Links',
  component: 'nub-admin-links',
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: `
> Typically used in a Drupal consumer to display a horizontal list of administrative actions availble to any given piece of content.
`,
      },
    },
  },
};

const Template = (): TemplateResult =>
  html`
    <nub-admin-links>
      <ul>
        <li>
          <a href="#" class="is-active">
            View<span class="visually-hidden">(active tab)</span>
          </a>
        </li>
        <li>
          <a href="#">Edit</a>
        </li>
        <li>
          <a href="#">Layout</a>
        </li>
        <li>
          <a href="#">Translate</a>
        </li>
        <li>
          <a href="#">Revisions</a>
        </li>
        <li>
          <a href="#">Lasers</a>
        </li>
      </ul>
    </nub-admin-links>
  `;

export const AdministrativeLinks = Template.bind({});
AdministrativeLinks.parameters = {
  docs: {
    source: {
      code: `
<nub-admin-links>
  <ul>
    <li>
      <a href="#" class="is-active">
        View<span class="visually-hidden">(active tab)</span>
      </a>
    </li>
    <li>
      <a href="#">Edit</a>
    </li>
    <li>
      <a href="#">Layout</a>
    </li>
    <li>
      <a href="#">Translate</a>
    </li>
    <li>
      <a href="#">Revisions</a>
    </li>
    <li>
      <a href="#">Lasers</a>
    </li>
  </ul>
</nub-admin-links>
      `,
    },
  },
};
