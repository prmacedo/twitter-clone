import { Heading } from "../Heading/Heading";
import { Follow } from "../Follow/Follow";
import { Text } from "../Text/Text";

export function FollowList() {
  return (
    <div className="news bg-dark-8 rounded-lg dark:bg-dark-2 dark:border-dark-4">
      <Heading size="lg" className="border-b-2 border-dark-7 py-2.5 px-4">Who to follow</Heading>

      <Follow name='Bessie Cooper' user='@alessandroveronezi' img='src/imgs/profile-pic-2.png'></Follow>
      <Follow name='Jenny Wilson' user='@gabrielcantarin' img='src/imgs/profile-pic-3.png'></Follow>

      <Text color="blue" className="rounded-b-lg block p-4 hover:underline hover:bg-dark-7 dark:hover:bg-dark-3 cursor-pointer">Show more</Text>
    </div>
  )
}