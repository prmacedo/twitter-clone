import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Navlink } from "../Navlink/Navlink";

import './navbar.css';

export interface SidemenuProps {
  currentPage: 'home' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'lists' | 'profile' | 'more';
}

export function Sidemenu({ currentPage }: SidemenuProps) {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="flex flex-col gap-1 mb-2">
          <Icon icon="logo" color="blue" className="ml-3"/>

          <Navlink
            icon="home"
            iconFill="home-fill"
            active={ currentPage === 'home' }
            >
            Home
          </Navlink>

          <Navlink
            icon="explore"
            iconFill="explore-fill"
            active={ currentPage === 'explore' }
            >
            Explore
          </Navlink>

          <Navlink
            icon="notification"
            iconFill="notification-fill"
            active={ currentPage === 'notifications' }
            >
            Notifications
          </Navlink>

          <Navlink
            icon="message"
            iconFill="message-fill"
            active={ currentPage === 'messages' }
            >
            Messages
          </Navlink>

          <Navlink
            icon="bookmark"
            iconFill="bookmark-fill"
            active={ currentPage === 'bookmarks' }
            >
            Bookmarks
          </Navlink>

          <Navlink
            icon="lists"
            iconFill="lists-fill"
            active={ currentPage === 'lists' }
            >
            Lists
          </Navlink>

          <Navlink
            icon="profile"
            iconFill="profile-fill"
            active={ currentPage === 'profile' }
            >
            Profile
          </Navlink>

          <Navlink
            icon="more"
            iconFill="more"
            active={ currentPage === 'more' }
            >
            More
          </Navlink>
        </div>

        <Button size="big">Tweet</Button>
      </div>
    </nav>
  )
}