import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectProps } from './Select'

const options = [
  { label: 'Opção 01', value: '1' },
  { label: 'Opção 02', value: '2' },
  { label: 'Opção 03', value: '3' }
]

export default {
  title: 'Form Components/Select',
  component: Select,
  args: {
    placeholder: "Placeholder",
    options,
    value: '',
    setValue: () => {}
  },
  argTypes: {
    options: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    setValue: {
      table: {
        disable: true
      }
    }
  }
} as Meta<SelectProps>

export const Text: StoryObj<SelectProps> = {}