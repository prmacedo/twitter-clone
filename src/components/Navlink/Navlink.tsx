import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Heading } from "../Heading/Heading";
import { Icon, IconOptions } from "../Icon/Icon";

export interface NavlinkProps extends IconOptions {
  children: ReactNode;
  active: boolean;
  path: '/' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'lists' | 'profile' | 'more' ;
}

export function Navlink({ icon, children, active, path }: NavlinkProps) {
  return (
    <span>
      <Link to={path} className="inline-flex gap-x-5 hover:bg-dark-7 hover:dark:bg-dark-4 active:dark:bg-dark-3 active:bg-dark-6/30 rounded-full p-2.5 pr-7">
        <Icon icon={ icon } fill={ active } color={ active ? 'blue' : 'black' } />
        <Heading color={ active ? 'blue' : 'black' }>{ children }</Heading>
      </Link>
    </span>
  )
}