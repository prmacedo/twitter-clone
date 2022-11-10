import { ITweets, orderTweetsDesc } from "../types/ITweets";

export const tweetsMock = [
  {
    id: '87062933-443e-49e3-bf57-69734ee4e2c4',
    userId: '05ffc61f-9849-447b-baa7-30529705ffa5',
    time: new Date('Nov 08 2022 15:57 GMT-0300').getTime(),
    description: 'Great game.',
    img: 'src/imgs/feed-1.png',
    likes: [
      { userId: '1fa7882c-957d-43e0-b8f0-1ea2cd6bb79f' }
    ],
    comments:[
      {
        id: 'ba9992e9-499b-4a09-96bc-485517185e0c',
        userId: 'a46f68fd-716a-443d-a806-50329999282b',
        time: new Date('Nov 09 2022 20:57 GMT-0300').getTime(),
        description: 'GG',
        likes: [],
        comments:[],
        retweets: 0,
        share: 0,
      },
    ],
    retweets: 0,
    share: 0,
  },
  {
    id: '5b80e20b-9895-4535-a8d3-db2ff7b6d138',
    userId: '05ffc61f-9849-447b-baa7-30529705ffa5',
    time: new Date('Nov 09 2022 15:57 GMT-0300').getTime(),
    description: 'Tom is a big hurry.',
    img: 'src/imgs/feed-1.png',
    likes: [
      { userId: '1fa7882c-957d-43e0-b8f0-1ea2cd6bb79f' },
      { userId: 'a46f68fd-716a-443d-a806-50329999282b' },
    ],
    comments:[
      {
        id: '834fcb1f-02ae-4c2d-8675-52f530ed185e',
        userId: 'a46f68fd-716a-443d-a806-50329999282b',
        time: new Date('Nov 09 2022 20:57 GMT-0300').getTime(),
        description: 'Woow',
        likes: [],
        comments:[],
        retweets: 0,
        share: 0,
      }
    ],
    retweets: 0,
    share: 0,
  },
  {
    id: 'c0329bb1-9acd-470c-90e2-2592eea696e6',
    userId: '1fa7882c-957d-43e0-b8f0-1ea2cd6bb79f',
    time: new Date('Nov 09 2022 15:57 GMT-0300').getTime(),
    description: 'Tom is a big hurry.',
    img: 'src/imgs/feed-2.png',
    likes: [],
    comments:[],
    retweets: 0,
    share: 0,
  },
  {
    id: '596aa6ab-fb78-4cfd-b0bc-d56c0dcdff32',
    userId: 'a46f68fd-716a-443d-a806-50329999282b',
    time: new Date('Nov 09 2022 20:57 GMT-0300').getTime(),
    description: 'Tom is a big hurry.',
    img: 'src/imgs/feed-3.jpg',
    likes: [],
    comments:[],
    retweets: 0,
    share: 0,
  },
].sort(orderTweetsDesc) as ITweets[];