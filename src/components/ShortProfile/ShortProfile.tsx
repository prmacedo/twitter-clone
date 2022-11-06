import { Link } from "react-router-dom";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

export interface ShortProfileProps {
  profilePic: string;
}

export function ShortProfile({ profilePic }: ShortProfileProps){
  return (
   <div className="grid grid-cols-[auto_auto_1fr] items-center gap-2.5">
    <img src={profilePic} alt="Davide Biscuso" className="w-[2.5rem] rounded-full" />

    <div className="shortProfile__text">
      <Heading color="black" size="sm" className="leading-4">Davide Biscuso</Heading>
      <Text color="gray" size="lg" className="leading-4">@biscuttu</Text>
    </div>

    <Link to={"not-found"} className="justify-self-end hover:bg-dark-7 dark:hover:bg-dark-4 rounded-full p-2 box-content cursor-pointer">
      <Icon icon="ellipses" />
    </Link>
   </div>
  )
}
