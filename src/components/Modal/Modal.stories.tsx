import { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalContainerProps } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal.Container,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ModalContainerProps>

export const Default: StoryObj<ModalContainerProps> = {
  args: {
    children: [
      <Modal.Content>
        <p>Este é um Modal</p>
        <Modal.CloseButton setIsOpen={() => {}} />
      </Modal.Content>
    ]
  }
}
