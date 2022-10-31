import { Meta, StoryObj } from '@storybook/react'
import { Follow, FollowProps } from "./Follow";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Follow',
  component: Follow,
  decorators: [withRouter],
  args: {
    name: 'Bessie Cooper',
    user: '@alessandroveronezi',
    img: 'src/imgs/profile-pic-2.png'
  }
} as Meta<FollowProps>

export const Default: StoryObj = {}