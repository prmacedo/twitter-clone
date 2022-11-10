import { Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";
import { useEffect, useLayoutEffect, useState } from "react";
import { useData } from "../../context/DataContext/DataContext";
import { ITweets } from "../../types/ITweets";
import { IUser } from "../../types/IUser";
import { useUser } from "../../context/UserContext/UserContext";
import { useFeed } from "../../context/FeedContext/FeedContext";

import { Post } from "../Post/Post";
import { Modal } from "../Modal/Modal";
import { Link } from "react-router-dom";
import { TweetBase } from "./TweetBase/TweetBase";

export function Tweet(tweet: ITweets) {
  const { id, userId, time, description, img, likes, comments, retweets, share } = tweet;
  const [ likeStatus, setLikeStatus ] = useState<'wasLiked' | 'notLiked' | 'justLiked' | 'unliked'>();
  const [ liked, setLiked ] = useState<boolean>();
  const [ showComments, setShowComments ] = useState(false);

  const { getUserById } = useData();
  const { user: loggedUser, isLoggedIn } = useUser();
  const { tweets, updateTweets } = useFeed();

  const [user, setUser] = useState<IUser>();

  function handleLike() {
    if (isLoggedIn && (likeStatus === 'notLiked' || likeStatus === 'unliked')) {
      setLikeStatus('justLiked');
    } else {
      setLikeStatus('unliked');
    }
  }

  function handleComment() {
    if (isLoggedIn) {
      setShowComments(true);
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
  }, []);

  useEffect(() => {
    if(!isLoggedIn) return;

    if(likeStatus === 'justLiked') {
      setLiked(true);

      const updatedTweets = tweets.map(tweet => {
        if (tweet.id === id) {
          tweet.likes.push({ userId: loggedUser.id });
        }
        return { ...tweet }
      });
      updateTweets(updatedTweets);
    } else if(likeStatus === 'unliked') {
      setLiked(false);

      const updatedTweets = tweets.map(tweet => {
        if (tweet.id === id) {
          const likes = tweet.likes.filter(like => like.userId !== loggedUser.id);
          return { ...tweet, likes }
        }
        return { ...tweet }
      });
      updateTweets(updatedTweets);

    }
  }, [likeStatus]);

  return (
    <>
      <div className="pl-4 py-2.5 border-t-2 border-dark-7 dark:border-dark-4">
        <TweetBase {...tweet} />

        <div className="feed__actions flex my-4">
          <div className="feed__iconGroup w-1/4">
            <div className="cursor-pointer inline-flex gap-2.5"  onClick={() => handleComment()}>
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
            <div className="cursor-pointer inline-flex gap-2.5" onClick={() => handleLike()}>
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

      {
        showComments &&
        <Modal.Container>
          <Modal.Content className="w-6/12 max-h-[90vh] overflow-y-auto scrollbar-none">
            <Modal.CloseButton setIsOpen={setShowComments} />
            <div id="comments">
              <TweetBase {...tweet} isMainTweet />
              {
                tweets.map(tweet => {
                  if(tweet.id === id) return tweet.comments.map(comment => <TweetBase key={comment.id} {...comment} isComment />)
                })
              }
              <Post
                id="postComment"
                placeholder="Tweet your reply"
                tweet={ tweet }
              />
            </div>
          </Modal.Content>
        </Modal.Container>
      }
    </>
  )
}