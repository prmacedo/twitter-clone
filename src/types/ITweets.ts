import { IComments } from "./IComments";
import { ILikes } from "./ILikes";

export interface ITweets {
  id: string;
  userId: string;
  time: number;
  description: string;
  img?: string;
  likes: ILikes[];
  comments: IComments[];
  retweets: number;
  share: number;
}

export function orderTweetsDesc(a:ITweets, b:ITweets) {
  return b.time - a.time
}