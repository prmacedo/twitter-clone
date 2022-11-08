import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import { ReactNode } from 'react';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'big' | 'default';
  children: ReactNode;
  asChild?: boolean;
  style?: 'fill' | 'outline';
  color?: 'blue' | 'white' | 'black';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({size = 'default', children, asChild, style = 'fill', color = 'blue', className, onClick}: ButtonProps){
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      onClick={onClick}
      className={
        clsx(
          `font-sans font-bold text-base px-4 py-2.5 rounded-full duration-300 transition-colors flex items-center justify-center gap-x-2 ${className}`, {
            'w-full': size !== 'default'
          },
          {
            'bg-blue-1 text-white hover:bg-blue-2': (color === 'blue' && style === 'fill'),
            'bg-white text-black hover:bg-dark-8': (color === 'white' && style === 'fill'),
            'bg-black text-white hover:bg-black/90': (color === 'black' && style === 'fill'),
          },
          {
            'py-2 px-3.5 text-blue-1 border-2 border-blue-1 bg-transparent hover:bg-blue-1 hover:text-white': (color === 'blue' && style === 'outline'),
            'py-2 px-3.5 text-white border-2 border-white bg-transparent hover:bg-white/20': (color === 'white' && style === 'outline'),
            'py-2 px-3.5 text-dark dark:text-white border-2 border-dark-7 bg-transparent hover:bg-dark-7/50 active:bg-dark-7/80': (color === 'black' && style === 'outline'),
          },
          {
            'py-1.5': (size === 'small'),
            'py-2.5': (size === 'medium'),
            'py-4': (size === 'big'),
          }
        )
      }
    >
      { children }
    </Comp>
  )
}
