import { Meta, StoryObj } from '@storybook/react'
import { Navlink, NavlinkProps } from './Navlink';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Navlink',
  component: Navlink,
  decorators: [withRouter],
  args: {
    icon: 'home',
    iconFill: 'home-fill',
    children: 'Home'
  }
} as Meta<NavlinkProps>

export const Default: StoryObj<NavlinkProps> = {
  args: {
    active: false
  },
  argTypes: {
    active: {
      table: {
        disable: true
      }
    }
  }
}

export const Active: StoryObj<NavlinkProps> = {
  args: {
    active: true
  },
  argTypes: {
    active: {
      table: {
        disable: true
      }
    }
  }
}