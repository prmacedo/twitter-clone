import { Meta, StoryObj } from '@storybook/react';
import { Post, PostProps } from './Post';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ITweets } from '../../types/ITweets';

export default {
  title: 'Components/Post',
  component: Post,
  decorators: [withRouter],
  args: {
    placeholder: "What's happening"
  },
  argType: {},
} as Meta<PostProps>

export const Default: StoryObj<PostProps> = {}