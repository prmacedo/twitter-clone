import { Meta, StoryObj } from '@storybook/react'
import { Tweet, TweetProps } from "./Tweet";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Tweet',
  component: Tweet,
  decorators: [withRouter],
  args: {
    name: 'Devon Lane',
    user: '@johndoe',
    time: new Date(new Date().setSeconds(-3)),
    description: 'Tom is a big hurry.',
    img: 'src/imgs/feed-1.png',
    profilePic: 'src/imgs/profile-pic-4.png'
  }
} as Meta<TweetProps>

export const Default: StoryObj<TweetProps> = {}