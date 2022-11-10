import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { tweetsMock } from '../../mockup/Tweets';
import { ITweets, orderTweetsDesc } from '../../types/ITweets';

interface FeedContextProps {
  tweets: ITweets[];
  updateTweets: Function;
}

interface FeedContextProviderProps {
  children: ReactNode;
}

const FeedContext = createContext<FeedContextProps>({
  tweets: JSON.parse(String(localStorage.getItem("tweets"))),
  updateTweets: () => {}
});

export function FeedContextProvider({ children }: FeedContextProviderProps) {
  const [tweets, setTweets] = useState<Array <ITweets>>(JSON.parse(String(localStorage.getItem("tweets"))) || tweetsMock);

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  function updateTweets(tweets: ITweets[]) {
    setTweets(tweets.sort(orderTweetsDesc));
  }

  return (
    <FeedContext.Provider
      value={{
        tweets,
        updateTweets
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}

export function useFeed() {
  const context = useContext(FeedContext);
  const { tweets, updateTweets } = context;
  return { tweets, updateTweets };
}