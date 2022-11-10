import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Modal, resetScroll } from '../Modal/Modal';
import { useFeed } from '../../context/FeedContext/FeedContext';
import { useUser } from '../../context/UserContext/UserContext';
import { v4 as uuidv4 } from 'uuid';

import styles from './Post.module.scss';

import defaultPofilePic from '../../imgs/default-profile-pic.svg';
import { Heading } from '../Heading/Heading';
import { Link, useNavigate } from 'react-router-dom';
import { ITweets } from '../../types/ITweets';
import { Textarea } from '../Textarea/Textarea';
import clsx from 'clsx';

export interface PostProps {
  id: string;
  placeholder: string;
  tweet?: ITweets;
}

export function Post({ id, placeholder, tweet = undefined }: PostProps) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Blob | null>();
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');

  const { updateTweets } = useFeed();
  const { user, isLoggedIn } = useUser();

  const navigate = useNavigate();

  function handleUploadImage(evt: React.ChangeEvent<HTMLInputElement>) {
    if (evt.target.files) {
      setSelectedImage(evt.target.files[0]);
    }
  }

  const getBase64 = (file: Blob) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }

  function handleSubmit() {
    if (isEmpty) return;

    if (!isLoggedIn) {
      setIsOpen(true);
      return;
    }

    const dataList = JSON.parse(String(localStorage.getItem('tweets'))) || [] as ITweets[];

    const data = {
      id: uuidv4(),
      userId: user.id,
      description: text,
      time: new Date().getTime(),
      likes: [],
      comments: [],
      retweets: 0,
      share: 0
    } as ITweets;


    if (selectedImage) {
      getBase64(selectedImage)
      .then(base64 => {
        data.img = base64 as string;

        if (tweet) {
          dataList.map((dataItem: ITweets) => (dataItem.id === tweet?.id) ? dataItem.comments.unshift(data) : dataItem )
        } else {
          dataList.unshift(data);
        }

        updateTweets(dataList);
      })
    } else {
      if (tweet) {
        dataList.map((dataItem: ITweets) => (dataItem.id === tweet?.id) ? dataItem.comments.unshift(data) : dataItem )
      } else {
        dataList.unshift(data);
      }
      updateTweets(dataList);
    }

    setSelectedImage(null);
    setIsEmpty(true);
    setText('');
  }

  function redirectTo(path: string) {
    resetScroll();
    setIsOpen(false);
    navigate(path);
  }

  return (
    <>
      <div
        className={
          clsx("post flex gap-x-3", {
            "px-4 py-2.5": !tweet,
            "mt-3": tweet
          })
        }
      >
        <img src={ user.profilePic || defaultPofilePic } alt="User profile picture" className="w-12 rounded-full self-start" />

        <div className={[styles.post__content, "max-w-full"].join(' ')}>
          <Textarea
            id={id}
            isEmpty
            setIsEmpty={setIsEmpty}
            value={text}
            setValue={setText}
            placeholder={placeholder}
          />

          { selectedImage &&
          <div className="post__preview flex justify-between items-center">
            <img src={URL.createObjectURL(selectedImage)} className="h-12" />

            <Text color='gray' className='hover:underline cursor-pointer' asChild>
              <span onClick={() => { setSelectedImage(null)}}>Remove</span>
            </Text>
          </div>
          }

          <div className="post__actions flex justify-between">
            <div className={[styles.post__icons, "flex items-center gap-x-4"].join(' ')}>
              <label className='cursor-pointer rounded-full box-border p-2 duration-150 hover:bg-blue-1/10 active:bg-blue-1/20'>
                <input type="file" accept='image/png, image/jpeg' className='hidden' onChange={(evt) => handleUploadImage(evt)} />
                <Icon icon='media' color='blue' size='1.5rem' />
              </label>

              <div className='cursor-pointer rounded-full box-border p-2 duration-150 hover:bg-blue-1/10 active:bg-blue-1/20'>
                <Icon icon='gif' color='blue' size='1.5rem' />
              </div>

              <div className='cursor-pointer rounded-full box-border p-2 duration-150 hover:bg-blue-1/10 active:bg-blue-1/20'>
                <Icon icon='poll' color='blue' size='1.5rem' />
              </div>

              <div className='cursor-pointer rounded-full box-border p-2 duration-150 hover:bg-blue-1/10 active:bg-blue-1/20'>
                <Icon icon='emoji' color='blue' size='1.5rem' />
              </div>

              <div className='cursor-pointer rounded-full box-border p-2 duration-150 hover:bg-blue-1/10 active:bg-blue-1/20'>
                <Icon icon='calendar' color='blue' size='1.5rem' />
              </div>

            </div>

            <Button className={ `${isEmpty ? 'opacity-50' : 'opacity-100'}` } onClick={() => handleSubmit()}>Tweet</Button>
          </div>
        </div>
      </div>

      {
        isOpen &&
        <Modal.Container>
          <Modal.Content>
            <Heading size='lg'>You need to Log In</Heading>
            <Text className='mt-4' size='lg'>To tweet you need to be logged into an account.</Text>
            <Text size='lg'>Log in or create a new account.</Text>

            <div className='flex gap-x-4 mt-4'>
            <Button style="outline" color="blue" size='medium' className='text-center cursor-pointer' asChild>
              <span onClick={() => redirectTo("../login")}>Login</span>
            </Button>

            <Button color="blue" size='medium' className='text-center cursor-pointer' asChild>
              <span onClick={() => redirectTo("../signup")}>Sign Up</span>
            </Button>
            </div>

            <Modal.CloseButton setIsOpen={setIsOpen} />
          </Modal.Content>
        </Modal.Container>
      }
    </>
  )
}