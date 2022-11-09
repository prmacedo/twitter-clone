import { Meta, StoryObj } from '@storybook/react'
import { TweetBase } from "./TweetBase";
import { withRouter } from 'storybook-addon-react-router-v6';
import { ITweets } from '../../../types/ITweets';
import { tweetsMock } from '../../../mockup/Tweets';

export default {
  title: 'Components/Tweet/Base',
  component: TweetBase,
  decorators: [withRouter],
  args: {
    ...tweetsMock[0]
  }
} as Meta<ITweets>

export const Default: StoryObj<ITweets> = {}