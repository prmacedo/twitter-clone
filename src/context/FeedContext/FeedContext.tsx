import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { tweetsMock } from '../../mockup/Tweets';
import { ITweets } from '../../types/ITweets';

interface FeedContextProps {
  tweets: ITweets[];
  setTweets: React.Dispatch<React.SetStateAction<ITweets[]>>;
}

interface FeedContextProviderProps {
  children: ReactNode;
}

const FeedContext = createContext<FeedContextProps>({
  tweets: JSON.parse(String(localStorage.getItem("tweets"))),
  setTweets: () => {}
});

export function FeedContextProvider({ children }: FeedContextProviderProps) {
  const [tweets, setTweets] = useState<Array <ITweets>>(tweetsMock);

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  return (
    <FeedContext.Provider
      value={{
        tweets,
        setTweets
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}

export function useFeed() {
  const context = useContext(FeedContext);
  const { tweets, setTweets } = context;
  return { tweets, setTweets };
}