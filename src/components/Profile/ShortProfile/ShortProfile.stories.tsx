import { Meta, StoryObj } from '@storybook/react'
import { ShortProfile } from "./ShortProfile";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Profile/Short',
  component: ShortProfile,
  decorators: [withRouter],
  args: {}
} as Meta

export const Short: StoryObj = {}