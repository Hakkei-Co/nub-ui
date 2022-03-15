import { html, TemplateResult } from 'lit';
import './outline-video-youtube';
import { ifDefined } from 'lit/directives/if-defined.js';
import outline from '../../../../outline.config';

const configuration = {
  title: 'Base Components/Youtube Video',
  component: 'outline-video-youtube',
  argTypes: {
    videoID: {
      name: 'video-id',
      description: 'Youtube video id',
      control: { type: 'text' },
    },
  },
  args: {
    videoID: outline.youtube.defaultVideo
      ? outline.youtube.defaultVideo
      : 'xiqgG8HUZXE',
  },
  parameters: {
    docs: {
      description: {
        component: `
Responsive Youtube video.
`,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<outline-video-youtube
  video-id="{{ videoID }}"
>
</outline-video-youtube>
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
    <outline-video-youtube video-id="${ifDefined(args.videoID)}">
    </outline-video-youtube>
  `;
};

export const YoutubeVideo = Template.bind({});
