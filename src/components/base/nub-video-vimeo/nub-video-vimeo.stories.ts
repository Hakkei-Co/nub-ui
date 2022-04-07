import { html, TemplateResult } from 'lit';
import './nub-video-vimeo';
import { ifDefined } from 'lit/directives/if-defined.js';
import outline from '../../../../nub.config';

const configuration = {
  title: 'Base Components/Vimeo Video',
  component: 'nub-video-vimeo',
  argTypes: {
    videoID: {
      name: 'video-id',
      description: 'Vimeo video id',
      control: { type: 'text' },
    },
  },
  args: {
    videoID: outline.vimeo.defaultVideo
      ? outline.vimeo.defaultVideo
      : '432639001',
  },
  parameters: {
    docs: {
      description: {
        component: `
Vimeo video. Allows the embedded video to fit the space.
`,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<nub-video-vimeo
  video-id="{{ videoID }}"
>
</nub-video-vimeo>
        `,
      },
    },
  },
};

export default configuration;

const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };

  return html`
    <nub-video-vimeo video-id="${ifDefined(args.videoID)}">
    </nub-video-vimeo>
  `;
};

export const VimeoVideo = Template.bind({});
