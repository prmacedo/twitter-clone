import clsx from "clsx";
import { useEffect } from "react";
import styles from "./Textarea.module.scss";

export interface TextareaProps {
  id: string;
  isEmpty: boolean;
  setIsEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  size?: 'sm' | 'md'
}

export function Textarea({ id, isEmpty, setIsEmpty, value, setValue, placeholder, size = 'md'}: TextareaProps) {
  const characterLimit = 380;
  const allowedKeys = ['Backspace', 'Delete', 'Up', 'ArrowUp', 'Down', 'ArrowDown', 'Left', 'ArrowLeft', 'Right', 'ArrowRight', 'Home', 'End']

  function limitCharacterNumber(evt: React.KeyboardEvent<HTMLLabelElement>) {
    const target = evt.currentTarget;
    const text = target.textContent || '';

    // When the limit is reached only allow a list of specific keys and combinations with the ctrl key
    if ((Number(text?.length) > characterLimit) && (allowedKeys.indexOf(evt.key) < 0) && !evt.ctrlKey) {
      evt.preventDefault();
    }

    setIsEmpty( text.length === 0 );
  }

  function handleWrite(evt: React.KeyboardEvent<HTMLLabelElement>) {
    setIsEmpty( evt.currentTarget.textContent?.length === 0 )
    setValue(evt.currentTarget.textContent || '');
  }

  useEffect(() => {
    if(value === '') {
      const textarea = document.querySelector(`.${styles.textarea}`);
      if(textarea) textarea.textContent = "";
    }
  }, [value]);

  return (
    <>
      <label
        htmlFor={id}
        className={[
          styles.textarea,
          clsx({
              'text-lg': size === 'sm',
              'text-2xl': size === 'md',
            }
          ),
          "flex text-dark-5 dark:text-dark-6  bg-transparent outline-none w-full mb-4"
        ].join(' ')}
        onKeyDown = { (evt) => limitCharacterNumber(evt) }
        onKeyUp = { (evt) => handleWrite(evt) }
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder}
      />
      <input
        id={id}
        type="hidden"
        value={value}
        onChange={(evt) => {setValue(evt.target.value);}}
      />
    </>
  )
}