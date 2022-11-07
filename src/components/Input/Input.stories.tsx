import { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    type: "text",
    placeholder: "Placeholder"
  },
  argTypes: {}
} as Meta<InputProps>

export const Text: StoryObj<InputProps> = {}

export const Password: StoryObj<InputProps> = {
  args: {
    type: "password",
    placeholder: "Password"
  }
}