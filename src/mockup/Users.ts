import { IUser } from "../types/IUser";

export const usersMock = [
  {
    id: '1fa7882c-957d-43e0-b8f0-1ea2cd6bb79f',
    email: 'davidebiscuso@gmail.com',
    password: 'twitter123',
    name: 'Davide Biscuso',
    user: 'biscutto',
    bio: 'Product Designer',
    location: 'London',
    createdAt: '11-01-2011',
    following: 569,
    followers: 72,
    profilePic: 'src/imgs/profile-pic-1.png',
    banner: 'src/imgs/banner.png'
  },
  {
    id: '05ffc61f-9849-447b-baa7-30529705ffa5',
    email: 'davidebiscuso@gmail.com',
    password: 'twitter123',
    name: 'Devon Lane',
    user: 'devon',
    bio: 'Just another person',
    location: 'Paris',
    createdAt: '06-01-2015',
    following: 341,
    followers: 56,
    profilePic: 'src/imgs/profile-pic-2.png',
    banner: 'src/imgs/banner.png'
  },
  {
    id: 'a46f68fd-716a-443d-a806-50329999282b',
    email: 'davidebiscuso@gmail.com',
    password: 'twitter123',
    name: 'Darlene Robertson',
    user: 'darlene',
    bio: 'Carpe diem',
    location: 'Barcelona',
    createdAt: '02-19-2011',
    following: 918,
    followers: 156,
    profilePic: 'src/imgs/profile-pic-3.png',
    banner: 'src/imgs/banner.png'
  },
] as IUser[]


