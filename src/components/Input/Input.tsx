import { useState } from "react";

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input({ type = 'text', placeholder, value, onChange }: InputProps){
  return (
    <input
      type={ type }
      placeholder={ placeholder }
      className="font-sans text-lg w-full px-5 py-6 rounded-md border-2 border-dark-7 dark:border-dark-4 text-dark-5 dark:text-dark-6"
      value={ value }
      onChange={ onChange }
    />
  )
}