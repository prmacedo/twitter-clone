import { Link } from "react-router-dom";

import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Navlink } from "../Navlink/Navlink";
import { ShortProfile } from "../ShortProfile/ShortProfile";

import profilePic from "../../imgs/profile-pic-1.png";

export interface SidemenuProps {
  currentPage: 'home' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'lists' | 'profile' | 'more' | "";
}

export function Sidemenu({ currentPage }: SidemenuProps) {
  return (
    <nav className="navbar h-screen top-0 sticky">
      <div className="grid grid-rows-[auto_1fr_auto] w-[275px] h-full p-2.5">
        <div className="flex flex-col gap-1 mb-2.5">
          <Icon icon="logo" color="blue" className="ml-2.5"/>

          <Navlink
            icon="home"
            active={ currentPage === 'home' }
            path="/"
          >
            Home
          </Navlink>

          <Navlink
            icon="explore"
            active={ currentPage === 'explore' }
            path="explore"
          >
            Explore
          </Navlink>

          <Navlink
            icon="notification"
            active={ currentPage === 'notifications' }
            path="notifications"
          >
            Notifications
          </Navlink>

          <Navlink
            icon="message"
            active={ currentPage === 'messages' }
            path="messages"
          >
            Messages
          </Navlink>

          <Navlink
            icon="bookmark"
            active={ currentPage === 'bookmarks' }
            path="bookmarks"
          >
            Bookmarks
          </Navlink>

          <Navlink
            icon="lists"
            active={ currentPage === 'lists' }
            path="lists"
          >
            Lists
          </Navlink>

          <Navlink
            icon="profile"
            active={ currentPage === 'profile' }
            path="profile"
          >
            Profile
          </Navlink>

          <Navlink
            icon="more"
            active={ currentPage === 'more' }
            path="more"
          >
            More
          </Navlink>
        </div>

        <Link to={"not-found"} className="w-auto self-start mr-5 box-border">
          <Button size="big">Tweet</Button>
        </Link>

        <ShortProfile profilePic={profilePic} />
      </div>
    </nav>
  )
}