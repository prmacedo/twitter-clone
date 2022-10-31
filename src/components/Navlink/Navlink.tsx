import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { IconProps } from "../../icons/interface";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";

export interface NavlinkProps {
  icon: 'back' | 'bookmark' | 'bookmark-fill' | 'calendar' | 'comment' | 'ellipses' | 'emoji' | 'explore' | 'explore-fill' | 'gif' | 'home' | 'home-fill' | 'like' | 'like-fill' | 'lists' | 'lists-fill' | 'location' | 'logo' | 'media' | 'message' | 'message-fill' | 'more' | 'notification' | 'notification-fill' | 'poll' | 'profile' | 'profile-fill' | 'retweet' | 'schedule' | 'share' | 'top-tweet';
  iconFill: 'back' | 'bookmark' | 'bookmark-fill' | 'calendar' | 'comment' | 'ellipses' | 'emoji' | 'explore' | 'explore-fill' | 'gif' | 'home' | 'home-fill' | 'like' | 'like-fill' | 'lists' | 'lists-fill' | 'location' | 'logo' | 'media' | 'message' | 'message-fill' | 'more' | 'notification' | 'notification-fill' | 'poll' | 'profile' | 'profile-fill' | 'retweet' | 'schedule' | 'share' | 'top-tweet';
  children: ReactNode;
  active: Boolean;
  path: '/' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'lists' | 'profile' | 'more' ;
}

export function Navlink({ icon, iconFill, children, active, path }: NavlinkProps) {
  return (
    <span>
      <Link to={path} className="inline-flex gap-x-5 hover:bg-dark-7 hover:dark:bg-dark-4 active:dark:bg-dark-3 active:bg-dark-6/30 rounded-full p-2.5 pr-7">
        <Icon icon={ active ? iconFill : icon } color={ active ? 'blue' : 'black' } />
        <Heading color={ active ? 'blue' : 'black' }>{ children }</Heading>
      </Link>
    </span>
  )
}