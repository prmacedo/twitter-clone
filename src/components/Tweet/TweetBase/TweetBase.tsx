import { Heading } from "../../Heading/Heading";
import { Text } from "../../Text/Text";
import { useLayoutEffect, useState } from "react";
import { useData } from "../../../context/DataContext/DataContext";
import { ITweets } from "../../../types/ITweets";
import { IUser } from "../../../types/IUser";

import defaultPic from "../../../imgs/default-profile-pic.svg";
import { Link } from "react-router-dom";
import clsx from "clsx";

export interface TweetBaseProps extends ITweets {
  className?: string;
  isMainTweet?: boolean;
  isComment?: boolean;
}

export function TweetBase({ id, userId, time, description, img, likes, comments, retweets, share, className, isMainTweet = false, isComment = false }: TweetBaseProps) {
  const { getUserById } = useData();

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

  useLayoutEffect(() => {
    setUser(getUserById(userId));
  }, []);

  return (
    <>
      <div className={clsx(
          "tweet grid grid-cols-[3rem_1fr] gap-x-2.5", className, {
          "mb-3": isComment
        }
      )}>
        <img src={ user?.profilePic || defaultPic } alt={ user?.name || 'Name' } className="w-full rounded-full" />

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
            (!isMainTweet && img) && <img src={ img } alt={ description } className={clsx("w-full border-2 border-dark-7 dark:border-dark-4 rounded-2xl aspect-video object-cover", {"w-60 sm:w-96": isComment})} />
          }
        </div>

        {
          isMainTweet &&
          <div className="col-span-2 ml-[1.375rem] pl-9 border-l-2 border-dark-7 dark:border-dark-4 mb-2">
            <Text color="gray">Replying to <Text color="blue"><Link to={`../${user?.user}`}>@{ user?.user }</Link></Text></Text>
          </div>
        }
      </div>
    </>
  )
}