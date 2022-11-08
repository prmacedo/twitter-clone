import { Meta, StoryObj } from '@storybook/react'
import { Icon, IconSettings } from "./Icon";

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    color: 'blue',
    icon: 'logo'
  },
  argTypes: {
    color: {
      options: ['black', 'blue', 'red', 'gray'],
      control: 'inline-radio'
    },
    icon: {
      options: ['back', 'bookmark', 'calendar', 'comment', 'ellipses', 'emoji', 'explore', 'gif', 'home', 'like', 'lists', 'location', 'logo', 'media', 'message', 'more', 'notification', 'poll', 'profile', 'retweet', 'schedule', 'settings', 'share', 'top-tweet'],
      control: 'select'
    }
  }
} as Meta<IconSettings>

export const Default: StoryObj<IconSettings> = {
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    fill: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
}

export const Fill: StoryObj<IconSettings> = {
  args: {
    color: 'blue',
    icon: 'bookmark',
    fill: false
  },
  argTypes: {
    icon: {
      options: ['bookmark', 'explore', 'home', 'like', 'lists', 'message', 'notification', 'profile', 'settings'],
      control: 'select'
    },
    size: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
}