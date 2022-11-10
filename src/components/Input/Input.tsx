import { useState } from "react";

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export function Input({ type = 'text', placeholder, value, onChange, className }: InputProps){
  return (
    <input
      type={ type }
      placeholder={ placeholder }
      className={[className, "font-sans text-lg w-full px-5 py-6 rounded-md border-2 bg-white dark:bg-dark-1 border-dark-7 dark:border-dark-4 text-dark-5 dark:text-dark-6"].join(' ')}
      value={ value }
      onChange={ onChange }
    />
  )
}