import { html, TemplateResult } from 'lit';
import './nub-breadcrumbs';

const configuration = {
  title: 'Nubs/Breadcrumb',
  component: 'nub-breadcrumb',
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
      <a href="#">Home</a>
    </span>
    <span>
      <a href="#">About Us</a>
    </span>
    <span>
      <a href="#">Our History</a>
    </span>
    <span class="last">The current page title</span>
  </nav>
</nub-breadcrumbs>
`;
};

export const Breadcrumb = () => Template();
