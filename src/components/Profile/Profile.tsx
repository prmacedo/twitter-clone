import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext/UserContext";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import defaultPic from "../../imgs/default-profile-pic.svg";

export function Profile() {
  const { user } = useUser();

  function convertCreatedAtToJoined(createdAt: string) {
    const date = new Date(createdAt);
    return date.toLocaleString('en', { month: 'long', year: 'numeric'});
  }

  return (
    <div className="profile">
      <header className="relative">
        <img src={ user.banner } alt={ user.name } className="h-52 w-full aspect-video object-cover" />
        <img src={ user.profilePic || defaultPic } alt={ user.name } className="rounded-full border-4 border-dark-1 absolute left-3 bottom-[-4.5rem] w-36" />
      </header>

      <div className="px-3 pb-3">
        <Link to={"not-found"}>
          <Button style="outline" className="block ml-auto mt-2.5 mb-5">Edit profile</Button>
        </Link>

        <Heading size="xl">{ user.name }</Heading>
        <Text size="lg" className="mb-2.5" color="gray" asChild>
          <p>{ user.user }</p>
        </Text>

        <Text size="lg" className="mb-2.5" asChild>
          <p>{ user.bio }</p>
        </Text>

        <div className="profile__info flex items-center gap-x-2 mb-2.5">
          <div className="profile__location flex items-center gap-x-1">
            <Icon size="1.125rem" icon='location' color="gray"/>
            <Text size="lg" color="gray">{ user.location }</Text>
          </div>

          <div className="profile__join flex items-center gap-x-1">
            <Icon size="1.125rem" icon='calendar' color="gray"/>
            <Text size="lg" color="gray">Joined { convertCreatedAtToJoined(user.createdAt) }</Text>
          </div>
        </div>

        <div className="profile__numbers flex items-center gap-x-2">
          <div className="profile__following flex items-center gap-x-1">
            <Heading size="sm">{ user.followers }</Heading>
            <Text size="lg" color="gray">Following</Text>
          </div>

          <div className="profile__followers flex items-center gap-x-1">
            <Heading size="sm">{ user.following }</Heading>
            <Text size="lg" color="gray">Followers</Text>
          </div>
        </div>
      </div>

    </div>
  )
}