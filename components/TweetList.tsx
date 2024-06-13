import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Tweet {
  id: number;
  user_id: number;
  username: string;
  content: string;
  date: string;
  like_count: number;
  dislike_count: number;
}

interface TweetListProps {
  tweets: Tweet[];
  updateTweet: (updatedTweet: Tweet) => void;
}

const TweetList: React.FC<TweetListProps> = ({ tweets, updateTweet }) => {
  const handleLike = async (tweetId: number) => {
    try {
      await axios.post(`http://localhost:3000/tweets/${tweetId}/like`);
      const updatedTweet = tweets.find((tweet) => tweet.id === tweetId);
      if (updatedTweet) {
        updateTweet({ ...updatedTweet, like_count: updatedTweet.like_count + 1 });
      }
    } catch (error) {
      alert('Failed to like tweet');
    }
  };

  const handleDislike = async (tweetId: number) => {
    try {
      await axios.post(`http://localhost:3000/tweets/${tweetId}/dislike`);
      const updatedTweet = tweets.find((tweet) => tweet.id === tweetId);
      if (updatedTweet) {
        updateTweet({ ...updatedTweet, dislike_count: updatedTweet.dislike_count + 1 });
      }
    } catch (error) {
      alert('Failed to dislike tweet');
    }
  };

  return (
    <ListGroup>
      {tweets.map((tweet) => (
        <ListGroup.Item key={tweet.id}>
          <div>
            <Link to={`/user/${tweet.user_id}`}><strong>{tweet.username}</strong></Link>
            <p>{tweet.content}</p>
            <small>{new Date(tweet.date).toLocaleString()}</small>
            <div>
              <Button variant="outline-primary" size="sm" onClick={() => handleLike(tweet.id)}>
                Like ({tweet.like_count})
              </Button>
              <Button variant="outline-secondary" size="sm" onClick={() => handleDislike(tweet.id)}>
                Dislike ({tweet.dislike_count})
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TweetList;
