import { html, TemplateResult } from 'lit';
import './nub-breadcrumbs';

const configuration = {
  title: 'Nubs/Breadcrumb',
  component: 'nub-breadcrumbs',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {},
  args: {},
};
export default configuration;

const Template = (): TemplateResult => {
  return html`
<nub-breadcrumbs>
  <nav class="breadcrumb">
    <span>
      <p>Home</p>
    </span>
    <span>
      <p>About Us</p>
    </span>
    <span>
      <p>Our History</p>
    </span>
    <span class="last">
      <p>The current page title</p>
    </span>
    </nav>
  </nav>
</nub-breadcrumbs>
`;
};

export const Breadcrumb = () => Template();
