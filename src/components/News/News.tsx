import { Heading } from "../Heading/Heading";
import { NewsItem } from "../NewsItem/NewsItem";
import { Text } from "../Text/Text";

export function News() {
  return (
    <div className="news bg-dark-8 rounded-lg dark:bg-dark-2 dark:border-dark-4">
      <Heading size="lg" className="border-b-2 border-dark-7 py-2.5 px-4">What's happening</Heading>
      <NewsItem
        subject='COVID 19'
        time='Last night'
        hashtag='#covid19'
        img='src/imgs/news-item-1.png'
      >
        England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic
      </NewsItem>

      <NewsItem
        subject='US news'
        time='4h ago'
        hashtag='#trump'
        img='src/imgs/news-item-2.png'
      >
        Parler may go offline following suspensions by Amazon, Apple and Google
      </NewsItem>

      <NewsItem
        subject='India'
        time='1h ago'
        hashtag='#sport'
        img='src/imgs/news-item-3.png'
      >
        India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
      </NewsItem>

      <Text color="blue" className="rounded-b-lg block p-4 hover:underline hover:bg-dark-7 dark:hover:bg-dark-3 cursor-pointer">Show more</Text>
    </div>
  )
}