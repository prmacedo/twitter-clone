export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  user: string;
  bio: string;
  location: string;
  createdAt: Date;
  following: number;
  followers: number;
  profilePic?: string;
  banner?: string;
}

export const emptyUser = {} as IUser;