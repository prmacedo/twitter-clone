import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext/DataContext";
import { ITweets } from "../../types/ITweets";
import { IUser } from "../../types/IUser";
import { useUser } from "../../context/UserContext/UserContext";
import { useFeed } from "../../context/FeedContext/FeedContext";

import defaultPic from "../../imgs/default-profile-pic.svg";

export function Tweet({ id, userId, time, description, img, likes, comments, retweets, share }: ITweets) {
  const [ likeStatus, setLikeStatus ] = useState<'wasLiked' | 'notLiked' | 'justLiked' | 'unliked'>();
  const [ liked, setLiked ] = useState<boolean>();

  const { getUserById } = useData();
  const { user: loggedUser, isLoggedIn } = useUser();
  const { tweets, setTweets } = useFeed();

  const [user, setUser] = useState<IUser>();

  function timeDiff(postTime: number) {
    const now = new Date();
    const seconds = (now.getTime() - postTime) / 1000;

    let timeDiffString = '';

    if (seconds < 1)
      timeDiffString = 'now';
    else if (seconds < 60)
      timeDiffString = `${seconds.toFixed(0)}s`
    else if (seconds < 3600)
      timeDiffString = `${(seconds / 60).toFixed(0)}m`
    else if (seconds < 3600 * 24)
      timeDiffString = `${(seconds / (3600)).toFixed(0)}h`
    else
      timeDiffString = `${(seconds / (3600 * 24)).toFixed(0)}d`

    return timeDiffString;
  }

  function handleLike() {
    if (isLoggedIn && (likeStatus === 'notLiked' || likeStatus === 'unliked')) {
      setLikeStatus('justLiked');
    } else {
      setLikeStatus('unliked');
    }
  }

  useLayoutEffect(() => {
    setUser(getUserById(userId));

    if(isLoggedIn && likes.find(like => like.userId === loggedUser.id)) {
      setLikeStatus('wasLiked');
      setLiked(true);
    } else {
      setLikeStatus('notLiked');
      setLiked(false);
    }

    console.log(tweets);

  }, []);

  useEffect(() => {
    if(likeStatus === 'justLiked') {
      setLiked(true);

      const updatedTweets = tweets.map(tweet => {
        if (tweet.id === id) {
          tweet.likes.push({ userId: loggedUser.id });
        }
        return { ...tweet }
      });
      setTweets(updatedTweets);
    } else if(likeStatus === 'unliked') {
      setLiked(false);

      const updatedTweets = tweets.map(tweet => {
        if (tweet.id === id) {
          const likes = tweet.likes.filter(like => like.userId !== loggedUser.id);
          return { ...tweet, likes }
        }
        return { ...tweet }
      });
      setTweets(updatedTweets);

    }
  }, [likeStatus]);

  return (
    <div className="tweet flex items-start gap-2.5 pl-4 py-2.5 border-t-2 border-dark-7 dark:border-dark-4">
      <img src={ user?.profilePic || defaultPic } alt={ user?.name || 'Name' } className="w-12 rounded-full" />

      <div className="feed__content pr-3 w-full">
        <div className="feed__header flex gap-1 items-center mb-1">
          <Heading size="xs">{ user?.name || 'Name' }</Heading>
          <Text color="gray">@{ user?.user || 'username' }</Text>
          <Text color="gray">·</Text>
          <Text color="gray">{ timeDiff(time) } </Text>
        </div>

        <Text className="mb-2.5" asChild>
          <p>{ description }</p>
        </Text>

        {
          img && <img src={ img } alt={ description } className="w-full border-2 border-dark-7 dark:border-dark-4 rounded-2xl aspect-video object-cover" />
        }

        <div className="feed__actions flex my-4">
          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5">
              <Icon size="1.125rem" icon="comment" color="gray" />
              <Text size="xs" color="gray">{ comments.length }</Text>
            </div>
          </div>

          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5">
              <Icon size="1.125rem" icon="retweet" color="gray" />
              <Text size="xs" color="gray">{ retweets }</Text>
            </div>
          </div>

          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5"  onClick={() => handleLike()}>
              <Icon size="1.125rem" icon='like' fill={ liked } color={ liked ? 'red' : 'gray' } />
              <Text size="xs" color={ liked ? 'red' : 'gray' }>{ likes.length }</Text>
            </div>
          </div>

          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5">
              <Icon size="1.125rem" icon="share" color="gray" />
              <Text size="xs" color="gray">{ share }</Text>
            </div>
          </div>
        </div>

        <Text color="blue" className="hover:underline cursor-pointer">
          <Link to={"not-found"}>Show this thread</Link>
        </Text>
      </div>
    </div>

  )
}