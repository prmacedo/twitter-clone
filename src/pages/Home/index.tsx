import { FollowItem } from "../../components/List/FollowItem/FollowItem";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/Heading/Heading";
import { List } from "../../components/List/List";
import { NewsItem } from "../../components/List/NewsItem/NewsItem";
import { Post } from "../../components/Post/Post";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Sidemenu } from "../../components/Sidemenu/Sidemenu";
import { Spacer } from "../../components/Spacer/Spacer";
import { Text } from "../../components/Text/Text";
import { Tweet } from "../../components/Tweet/Tweet";
import { useFeed } from "../../context/FeedContext/FeedContext";
import { useUser } from "../../context/UserContext/UserContext";

export function Home() {
  const { tweets } = useFeed();
  const { isLoggedIn } = useUser();

  return (
    <div className="grid gird-rows-[1fr_auto]">
      <main className="page__container flex justify-center bg-white dark:bg-dark-1">
        <div className="w-[275px]">
          <Sidemenu currentPage={isLoggedIn ? "home" : "explore"} />
        </div>

        <div className="page__content flex">
          <div className="w-[600px] border-x-2 border-x-dark-7 dark:border-x-dark-4">
            <Header.Root>
              <Header.Text>
                <Heading>
                  {
                    isLoggedIn ? "Home" : "Explore"
                  }
                </Heading>
              </Header.Text>
              <Header.RightIcon />
            </Header.Root>

            <Post
              id="postTweet"
              placeholder="What's happening"
            />

            <Spacer />

            {
              tweets.length > 0 ?
              tweets?.map(tweet => <Tweet key={tweet.id} {...tweet} />) :
              <Text className='text-center mt-5 block'>No tweets yet :(</Text>
            }
          </div>

          <div className="w-[400px]">
            <div className="flex flex-col gap-4 justify-start items-start py-2.5 px-7">
              <SearchBar />

              <List title="What's happening">
                <NewsItem
                  hashtag="#covid19"
                  img="src/imgs/news-item-1.png"
                  subject="COVID 19"
                  time="Last night"
                >
                  England???s Chief Medical Officer says the UK is at the most dangerous time of the pandemic
                </NewsItem>
                <NewsItem
                  hashtag="#trump"
                  img="src/imgs/news-item-2.png"
                  subject="US news"
                  time="4h ago"
                >
                  Parler may go offline following suspensions by Amazon, Apple and Google
                </NewsItem>
                <NewsItem
                  hashtag="#sport"
                  img="src/imgs/news-item-3.png"
                  subject="India"
                  time="1h ago"
                >
                  India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
                </NewsItem>
              </List>

              <List title="Who to follow">
                <FollowItem
                  img="src/imgs/profile-pic-2.png"
                  name="Bessie Cooper"
                  user="@alessandroveronezi"
                />
                <FollowItem
                  img="src/imgs/profile-pic-3.png"
                  name="Jenny Wilson"
                  user="@gabrielcantarin"
                />
              </List>

              <Text color="gray">Terms of Service Privacy Policy Cookie Policy Ads info More ?? 2021 Twitter, Inc.</Text>
            </div>
          </div>
        </div>
      </main>

      {
        !isLoggedIn &&
        <Footer />
      }
    </div>
  )
}