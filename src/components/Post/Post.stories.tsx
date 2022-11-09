import { Meta, StoryObj } from '@storybook/react';
import { Post } from './Post';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ITweets } from '../../types/ITweets';

export default {
  title: 'Components/Post',
  component: Post,
  decorators: [withRouter],
  args: {},
  argType: {},
} as Meta<ITweets>

export const Default: StoryObj<ITweets> = {}