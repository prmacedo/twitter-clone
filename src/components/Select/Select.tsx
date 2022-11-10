import { useState } from "react";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

export interface SelectProps {
  options: IOption[];
  value: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function Select({ options, placeholder, value, setValue }: SelectProps) {
  const [showOptions, setShowOptions] = useState(false);

  function changeValue(option: IOption) {
    setShowOptions(false);
    setValue(option.value);
  }

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between font-sans text-lg w-full px-5 py-6 cursor-pointer rounded-md border-2 border-dark-7 dark:border-dark-4 text-dark-5 dark:text-dark-6 bg-white dark:bg-dark-1"
        onClick={() => setShowOptions(!showOptions)}
      >
        <Text>{ options.find(option => option.value === value)?.label || placeholder }</Text>
        <Icon icon="arrow-down" color="gray" />
      </div>

      {
        showOptions &&
        <div className="absolute w-full bg-white dark:bg-dark-1 rounded-md mt-1 max-h-32 overflow-scroll scrollbar-none">
          {
            options.map(option => (
              <Option key={`${option.value}-${option.label}`} value={ option.value } label={ option.label } onClick={() => changeValue(option)} />
            ))
          }
        </div>
      }
    </div>
  )
}

export interface IOption {
  value: string;
  label: string;
}

interface OptionProps extends IOption {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Option({ value, label, onClick }: OptionProps) {
  return (
    <div className="font-sans block text-md w-full p-2 first-of-type:rounded-t-md last-of-type:rounded-b-md only-of-type:rounded-md bg-white dark:bg-dark-1 border-2 border-b-0 last-of-type:border-b-2 border-dark-7 dark:border-dark-4 text-dark-5 dark:text-dark-6 hover:bg-dark-8 dark:hover:bg-dark-2 cursor-pointer"
      onClick={onClick}
    >
      <Text>{ label }</Text>
    </div>
  )
}