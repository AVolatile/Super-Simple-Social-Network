import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
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

const UserTweets: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const fetchUserTweets = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tweets/user/${userId}`);
        setTweets(response.data);
        console.log(response.data);
        
        if (response.data.length > 0) {
          setUsername(response.data[0].username);
        }
      } catch (error) {
        console.error('Error fetching user tweets:', error);
      }
    };

    fetchUserTweets();
  }, [userId]);

  const handleLike = async (tweetId: number) => {
    try {
      await axios.post(`http://localhost:3000/tweets/${tweetId}/like`);
      setTweets(tweets.map((tweet) => (tweet.id === tweetId ? { ...tweet, like_count: tweet.like_count + 1 } : tweet)));
    } catch (error) {
      alert('Failed to like tweet');
    }
  };

  const handleDislike = async (tweetId: number) => {
    try {
      await axios.post(`http://localhost:3000/tweets/${tweetId}/dislike`);
      setTweets(tweets.map((tweet) => (tweet.id === tweetId ? { ...tweet, dislike_count: tweet.dislike_count + 1 } : tweet)));
    } catch (error) {
      alert('Failed to dislike tweet');
    }
  };

  return (
    <div>
      <h2>{username}'s Tweets</h2>
      <ListGroup>
        {tweets.map((tweet) => (
          <ListGroup.Item key={tweet.id}>
            <div>
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
    </div>
  );
};

export default UserTweets;
