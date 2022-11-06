import { Follow } from '../../components/Follow/Follow';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Heading } from '../../components/Heading/Heading';
import { List } from '../../components/List/List';
import { NewsItem } from '../../components/NewsItem/NewsItem';
import { Profile as ProfileComponent } from '../../components/Profile/Profile';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Sidemenu } from '../../components/Sidemenu/Sidemenu';
import { TabBar } from '../../components/TabBar/TabBar';
import { Text } from '../../components/Text/Text';
import { Tweet } from '../../components/Tweet/Tweet';

export function Profile() {
  return (
    <div className="grid grid-rows-[1fr_auto] h-screen overflow-y-auto">
      <main className="profile-page__container flex justify-center bg-white dark:bg-dark-1">
        <div className="w-[275px]">
          <Sidemenu currentPage="profile" />
        </div>

        <div className="profile-page__content flex">
          <div className="w-[600px] border-x-2 border-x-dark-7 dark:border-x-dark-4">
            <Header.Root>
              <Header.LeftIcon />
              <Header.Text>
                <Heading>
                  Davide Biscuso
                </Heading>
              </Header.Text>
            </Header.Root>

            <ProfileComponent
              banner='src/imgs/banner.png'
              bio='Product Designer'
              followers={72}
              following={569}
              joined='September 2011'
              location='London'
              name='Davide Biscuso'
              profilePic='src/imgs/profile-pic-1.png'
              user='@biscutto'
            />

            <TabBar activeTab='tweets' />

            <Tweet
              description="Tom is a big hurry."
              img="src/imgs/feed-1.png"
              name="Davide Biscuso"
              profilePic="src/imgs/profile-pic-1.png"
              time={new Date(new Date().setSeconds(-3))}
              user="@biscutto"
            />

            <Tweet
              description="Tom is a big hurry."
              img="src/imgs/feed-2.png"
              name="Davide Biscuso"
              profilePic="src/imgs/profile-pic-1.png"
              time={new Date(new Date().setSeconds(-3))}
              user="@biscutto"
            />
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
                  England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic
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
                <Follow
                  img="src/imgs/profile-pic-2.png"
                  name="Bessie Cooper"
                  user="@alessandroveronezi"
                />
                <Follow
                  img="src/imgs/profile-pic-3.png"
                  name="Jenny Wilson"
                  user="@gabrielcantarin"
                />
              </List>

              <Text color="gray">Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Twitter, Inc.</Text>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}