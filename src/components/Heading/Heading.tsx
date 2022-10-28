import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: ReactNode;
  asChild?: boolean;
  color: 'black' | 'white' | 'blue';
}

export function Heading({size = 'md', children, asChild, color = 'black'}: HeadingProps){
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp className={
      clsx(
        `font-sans font-bold`, {
          'text-base': size === 'xs',
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
          'text-3xl': size === 'xl',
          'text-4xl': size === '2xl',
        },
        {
          'text-black dark:text-white': color === 'black',
          'text-white': color === 'white',
          'text-blue-1': color === 'blue'
        }
      )}
    >
      { children }
    </Comp>
  )
}
