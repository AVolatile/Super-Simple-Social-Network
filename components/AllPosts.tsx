import { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';


// interface for the AllPosts component
interface Post {
  id: number;
  user_id: number;
  username: string;
  content: string;
  date: string;
}

const AllPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]); // State of the POSTS
//   const [authenticated, setAuthenticated] = useState<boolean>(false); // State of the AUTHENTICATED
useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);


  return (
    <ListGroup>
      {posts.map((post) => (
        <ListGroup.Item key={post.id}>
          <strong> User {post.user_id}: </strong> {post.content} <br />
          
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default AllPosts;