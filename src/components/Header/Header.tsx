import { Children, ReactNode } from "react";
import { Icon } from "../Icon/Icon";

export interface HeaderRootProps {
  children: ReactNode;
}

function HeaderRoot({ children }: HeaderTextProps) {
  return (
    <div className="w-full h-14 flex gap-x-5 items-center border-b-2 border-b-dark-7 dark:border-b-dark-4">
      { children }
    </div>
  )
}

function HeaderLeftIcon() {
  return (
    <div className="hover:bg-blue-1/10 active:bg-blue-1/20  box-border p-2 rounded-full cursor-pointer">
      <Icon icon='back' color="blue" />
    </div>
  )
}

function HeaderRightIcon() {
  return (
    <div className="hover:bg-blue-1/10 active:bg-blue-1/20 box-border p-2 rounded-full cursor-pointer ml-auto">
      <Icon icon='top-tweet' color="blue" />
    </div>
  )
}

export interface HeaderTextProps {
  children: ReactNode;
}

function HeaderText({ children }: HeaderTextProps) {
  return (
    <div className="flex flex-col">{ children }</div>
  )
}

export const Header = {
  Root: HeaderRoot,
  LeftIcon: HeaderLeftIcon,
  RightIcon: HeaderRightIcon,
  Text: HeaderText
}