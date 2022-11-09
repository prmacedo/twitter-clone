import { Meta, StoryObj } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ITweets } from '../../types/ITweets';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: [withRouter],
  args: {
    placeholder: "What's happening",
  },
  argType: {},
} as Meta<TextareaProps>

export const Default: StoryObj<TextareaProps> = {}