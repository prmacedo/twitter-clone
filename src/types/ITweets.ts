import { IComments } from "./IComments";
import { ILikes } from "./ILikes";

export interface ITweets {
  id: string;
  userId: string;
  time: Date;
  description: string;
  img?: string;
  likes: ILikes[];
  comments: IComments[];
  retweets: number;
  share: number;
}