
import clsx from "clsx";
import { Back } from "../../icons/Back";
import { Bookmark, BookmarkFill } from "../../icons/Bookmark";
import { Calendar } from "../../icons/Calendar";
import { Comment } from "../../icons/Comment";
import { Ellipses } from "../../icons/Ellipses";
import { Emoji } from "../../icons/Emoji";
import { Explore, ExploreFill } from "../../icons/Explore";
import { Gif } from "../../icons/Gif";
import { Home, HomeFill } from "../../icons/Home";
import { Like, LikeFill } from "../../icons/Like";
import { Lists, ListsFill } from "../../icons/Lists";
import { Location } from "../../icons/Location";
import { Logo } from "../../icons/Logo";
import { Media } from "../../icons/Media";
import { Message, MessageFill } from "../../icons/Message";
import { More } from "../../icons/More";
import { Notification, NotificationFill } from "../../icons/Notification";
import { Poll } from "../../icons/Poll";
import { Profile, ProfileFill } from "../../icons/Profile";
import { Retweet } from "../../icons/Retweet";
import { Schedule } from "../../icons/Schedule";
import { Search } from "../../icons/Search";
import { Share } from "../../icons/Share";
import { TopTweet } from "../../icons/TopTweet";

export interface IconOptions {
  icon: 'back' | 'bookmark' | 'calendar' | 'comment' | 'ellipses' | 'emoji' | 'explore' | 'gif' | 'home' | 'like' | 'lists' | 'location' | 'logo' | 'media' | 'message' | 'more' | 'notification' | 'poll' | 'profile' | 'retweet' | 'schedule' | 'search' | 'share' | 'top-tweet';
}

export interface IconSettings extends IconOptions {
  color?: 'black' | 'blue' | 'red' | 'gray';
  size?: string;
  fill?: boolean;
  className?: string;
}

export function Icon({ icon, className, color='black', size='1.5rem', fill=false }: IconSettings){
  let selectedIcon: JSX.Element;

  const classes = clsx(
    className,
    {
      'fill-black dark:fill-white': (color === 'black'),
      'fill-blue-1': (color === 'blue'),
      'fill-red': (color === 'red'),
      'fill-dark-5 dark:fill-dark-6': (color === 'gray'),
    }
  )

  switch (icon) {
    case 'back':
      selectedIcon = <Back className={classes} size={size}/>
      break;

    case 'bookmark':
      selectedIcon = fill ? <BookmarkFill className={classes} size={size}/> : <Bookmark className={classes} size={size}/>
      break;

    case 'calendar':
      selectedIcon = <Calendar className={classes} size={size}/>
      break;

    case 'comment':
      selectedIcon = <Comment className={classes} size={size}/>
      break;

    case 'ellipses':
      selectedIcon = <Ellipses className={classes} size={size}/>
      break;

    case 'emoji':
      selectedIcon = <Emoji className={classes} size={size}/>
      break;

    case 'explore':
      selectedIcon = fill ? <ExploreFill className={classes} size={size}/> : <Explore className={classes} size={size}/>
      break;

    case 'gif':
      selectedIcon = <Gif className={classes} size={size}/>
      break;

    case 'home':
      selectedIcon = fill ? <HomeFill className={classes} size={size}/> : <Home className={classes} size={size}/>
      break;

    case 'like':
      selectedIcon = fill ? <LikeFill className={classes} size={size}/> : <Like className={classes} size={size}/>
      break;

    case 'lists':
      selectedIcon = fill ? <ListsFill className={classes} size={size}/> : <Lists className={classes} size={size}/>
      break;

    case 'location':
      selectedIcon = <Location className={classes} size={size}/>
      break;

    case 'logo':
      selectedIcon = <Logo className={classes} size={size}/>
      break;

    case 'media':
      selectedIcon = <Media className={classes} size={size}/>
      break;

    case 'message':
      selectedIcon = fill ? <MessageFill className={classes} size={size}/> : <Message className={classes} size={size}/>
      break;

    case 'more':
      selectedIcon = <More className={classes} size={size}/>
      break;

    case 'notification':
      selectedIcon = fill ? <NotificationFill className={classes} size={size}/> : <Notification className={classes} size={size}/>
      break;

    case 'poll':
      selectedIcon = <Poll className={classes} size={size}/>
      break;

    case 'profile':
      selectedIcon = fill ? <ProfileFill className={classes} size={size}/> : <Profile className={classes} size={size}/>
      break;

    case 'retweet':
      selectedIcon = <Retweet className={classes} size={size}/>
      break;

    case 'schedule':
      selectedIcon = <Schedule className={classes} size={size}/>
      break;

    case 'search':
      selectedIcon = <Search className={classes} size={size}/>
      break;

    case 'share':
      selectedIcon = <Share className={classes} size={size}/>
      break;

    case 'top-tweet':
      selectedIcon = <TopTweet className={classes} size={size}/>
      break;

    default:
      selectedIcon = <span>Ícone indisponível</span>
      break;
  }

  return (
    selectedIcon
  )
}
