import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext/UserContext";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import defaultPic from "../../imgs/default-profile-pic.svg";

export function ShortProfile(){
  const { user } = useUser();

  return (
   <div className="grid grid-cols-[auto_auto_1fr] items-center gap-2.5">
    <img src={ user.profilePic || defaultPic } alt={ user.name || 'Name' } className="w-[2.5rem] rounded-full" />

    <div className="shortProfile__text">
      <Heading color="black" size="sm" className="leading-4">{ user.name || 'Name' }</Heading>
      <Text color="gray" size="lg" className="leading-4">@{ user.user || 'username' }</Text>
    </div>

    <Link to={"not-found"} className="justify-self-end hover:bg-dark-7 dark:hover:bg-dark-4 rounded-full p-2 box-content cursor-pointer">
      <Icon icon="ellipses" />
    </Link>
   </div>
  )
}
