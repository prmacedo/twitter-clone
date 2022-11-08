import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { TweetProps } from '../Tweet/Tweet';
import { Modal } from '../Modal/Modal';
import { useFeed } from '../../context/FeedContext/FeedContext';
import { useUser } from '../../context/UserContext/UserContext';

import styles from './Post.module.scss';

import defaultPofilePic from '../../imgs/default-profile-pic.svg';
import { Heading } from '../Heading/Heading';
import { Link } from 'react-router-dom';

export function Post() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Blob | null>();
  const [isOpen, setIsOpen] = useState(false);

  const { setTweets } = useFeed();
  const { user, isLoggedIn } = useUser();

  const characterLimit = 380;
  const allowedKeys = ['Backspace', 'Delete', 'Up', 'ArrowUp', 'Down', 'ArrowDown', 'Left', 'ArrowLeft', 'Right', 'ArrowRight', 'Home', 'End']

  function limitCharacterNumber(evt: React.KeyboardEvent<HTMLDivElement>) {
    const target = evt.currentTarget;
    const text = target.textContent || '';

    // When the limit is reached only allow a list of specific keys and combinations with the ctrl key
    if ((Number(text?.length) > characterLimit) && (allowedKeys.indexOf(evt.key) < 0) && !evt.ctrlKey) {
      evt.preventDefault();
    }

    setIsEmpty( text.length === 0 );
  }

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

    const dataList = JSON.parse(String(localStorage.getItem('tweets'))) || [];
    const text = document.querySelector(`.${styles.post__text}`) as Element;

    console.log(text);


    const data = {
      name: 'Davide Biscuso',
      user: '@biscuttu',
      time: new Date(),
      description: text?.textContent,
      profilePic: user.profilePic,
    } as TweetProps;

    if (selectedImage) {
      getBase64(selectedImage)
      .then(base64 => {
        data.img = base64 as string;
        console.log(data.img);

        dataList.unshift(data);
        setTweets(dataList);
      })
    } else {
      dataList.unshift(data);
      setTweets(dataList);
    }

    setSelectedImage(null);
    setIsEmpty(true)
    text.textContent = '';
  }

  return (
    <>
      <div className="post flex gap-x-3 px-4 py-2.5">
        <img src={ user.profilePic || defaultPofilePic } alt="User profile picture" className="w-12 rounded-full self-start" />

        <div className={[styles.post__content, "max-w-full"].join(' ')}>
          <div
            className={[styles.post__text ,"flex text-dark-5 dark:text-dark-6 text-2xl bg-transparent outline-none w-full mb-4"].join(' ')}
            onKeyDown = { (evt) => limitCharacterNumber(evt) }
            onKeyUp = { (evt) => setIsEmpty( evt.currentTarget.textContent?.length === 0 ) }
            contentEditable
            suppressContentEditableWarning
            data-placeholder="What's happening"
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
            <Button style="outline" color="blue" size='medium' className='text-center' asChild>
              <Link to={"../login"}>
                Log in
              </Link>
            </Button>

            <Button color="blue" size='medium' className='text-center' asChild>
              <Link to={"../signup"}>
                Sign Up
              </Link>
            </Button>
            </div>

            <Modal.CloseButton setIsOpen={setIsOpen} />
          </Modal.Content>
        </Modal.Container>
      }
    </>
  )
}