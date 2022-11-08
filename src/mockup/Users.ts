import { IUser } from "../types/IUser";

export const usersMock = [
  {
    email: 'davidebiscuso@gmail.com',
    password: 'twitter123',
    name: 'Davide Biscuso',
    user: 'biscutto',
    bio: 'Product Designer',
    location: 'London',
    createdAt: new Date('11-01-2011'),
    following: 569,
    followers: 72,
    profilePic: 'src/imgs/profile-pic-1.png',
    banner: 'src/imgs/banner.png'
  }
] as IUser[]