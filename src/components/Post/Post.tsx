import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import './post.css';

export interface PostProps {
  img: string;
}

export function Post({ img }: PostProps) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

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

  return (
    <div className="post flex gap-x-3 px-4 py-2.5">
      <img src={ img } alt="User profile picture" className="w-12 rounded-full self-start" />

      <div className="post__content max-w-full">
        <div
          className="post__text flex text-dark-5 dark:text-dark-6 text-2xl bg-transparent outline-none w-full mb-4"
          onKeyDown = { (evt) => limitCharacterNumber(evt) }
          onKeyUp = { (evt) => setIsEmpty( evt.currentTarget.textContent?.length === 0 ) }
          contentEditable
          suppressContentEditableWarning
          data-placeholder="What's happening"
        />

        <div className="post__actions flex justify-between">
          <div className="post__icons flex items-center gap-x-4">
            <label className='cursor-pointer rounded-full box-border p-2 duration-150 hover:bg-blue-1/10 active:bg-blue-1/20'>
              <input type="file" className='hidden' onChange={(evt) => handleUploadImage(evt)} />
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

          <Button className={ `${isEmpty ? 'opacity-50' : 'opacity-100'}` }>Tweet</Button>
        </div>
      </div>
    </div>
  )
}