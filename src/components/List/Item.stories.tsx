import { Meta, StoryObj } from '@storybook/react'
import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { NewsItem } from './NewsItem/NewsItem';
import { FollowItem } from './FollowItem/FollowItem';

export default {
  title: 'Components/List/Items',
  component: React.Fragment,
  decorators: [withRouter],
  args: {
    subject: 'COVID 19',
    time: 'Last night',
    hashtag: '#covid19',
    children: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic',
    img: 'src/imgs/news-item-1.png'
  },
  argTypes: {}
} as Meta

export const News: StoryObj = {
  args: {
    children: [
      <NewsItem
        subject='COVID 19'
        time='Last night'
        hashtag='#covid19'
        img='src/imgs/news-item-1.png'
      >
        England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic
      </NewsItem>
    ]
  }
}

export const Follow: StoryObj = {
  args: {
    children: [
      <FollowItem name='Bessie Cooper' user='@alessandroveronezi' img='src/imgs/profile-pic-2.png' />
    ]
  }
}