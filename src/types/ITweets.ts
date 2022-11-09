import { ILikes } from "./ILikes";

export interface ITweets {
  id: string;
  userId: string;
  time: number;
  description: string;
  img?: string;
  likes: ILikes[];
  comments: ITweets[];
  retweets: number;
  share: number;
}

export function orderTweetsDesc(a:ITweets, b:ITweets) {
  return b.time - a.time
}