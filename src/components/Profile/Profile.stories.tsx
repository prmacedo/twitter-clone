import { Meta, StoryObj } from '@storybook/react';
import { Profile } from './Profile';
import { withRouter } from 'storybook-addon-react-router-v6';
import { IUser } from '../../types/IUser';

export default {
  title: 'Components/Profile',
  component: Profile,
  decorators: [withRouter],
  args:{},
  argType: {},
} as Meta<IUser>

export const Default: StoryObj<IUser> = {}