import { ReactNode } from "react";
import { IconProps } from "../../icons/interface";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";

export interface NavlinkProps {
  icon: 'back' | 'bookmark' | 'bookmark-fill' | 'calendar' | 'comment' | 'ellipses' | 'emoji' | 'explore' | 'explore-fill' | 'gif' | 'home' | 'home-fill' | 'like' | 'like-fill' | 'lists' | 'lists-fill' | 'location' | 'logo' | 'media' | 'message' | 'message-fill' | 'more' | 'notification' | 'notification-fill' | 'poll' | 'profile' | 'profile-fill' | 'retweet' | 'schedule' | 'share' | 'top-tweet';
  iconFill: 'back' | 'bookmark' | 'bookmark-fill' | 'calendar' | 'comment' | 'ellipses' | 'emoji' | 'explore' | 'explore-fill' | 'gif' | 'home' | 'home-fill' | 'like' | 'like-fill' | 'lists' | 'lists-fill' | 'location' | 'logo' | 'media' | 'message' | 'message-fill' | 'more' | 'notification' | 'notification-fill' | 'poll' | 'profile' | 'profile-fill' | 'retweet' | 'schedule' | 'share' | 'top-tweet';
  children: ReactNode;
  active: Boolean;
}

export function Navlink({ icon, iconFill, children, active }: NavlinkProps) {
  return (
    <span>
      <a href="#" className="inline-flex gap-x-5 hover:bg-dark-7 focus:bg-dark-6/30 rounded-full p-3 pr-7">
        <Icon icon={ active ? iconFill : icon } color={ active ? 'blue' : 'black' } />
        <Heading color={ active ? 'blue' : 'black' }>{ children }</Heading>
      </a>
    </span>
  )
}