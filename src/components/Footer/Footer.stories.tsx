import { Meta, StoryObj } from '@storybook/react'
import { Footer } from "./Footer";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [withRouter],
  args: {
    children: 'Footer',
    size: 'default',
    style: 'fill',
    color: 'blue'
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'big', 'default'],
      control: {
        type: 'inline-radio'
      }
    },
    style: {
      options: ['fill', 'outline'],
      control: 'inline-radio'
    },
    color: {
      options: ['blue', 'white'],
      control: 'inline-radio'
    }
  }
} as Meta

export const Default: StoryObj = {}