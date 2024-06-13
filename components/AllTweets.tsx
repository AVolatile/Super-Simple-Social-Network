import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

interface Tweet {
  id: number;
  user_id: number;
  content: string;
  date: string;
}

const AllTweets: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tweets');
        setTweets(response.data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <ListGroup>
      {tweets.map(tweet => (
        <ListGroup.Item key={tweet.id}>
          <strong>User {tweet.user_id}:</strong> {tweet.content} <br />
          <small>{tweet.date}</small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AllTweets;
