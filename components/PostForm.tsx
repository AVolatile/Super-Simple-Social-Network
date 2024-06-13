import React, { useState } from "react"; // Import React
import axios from "axios";
import { Form, Button } from "react-bootstrap";

// Interface for the Form component
interface PostFormProps {
  addPost: (
    userId: number,
    username: string,
    content: string,
    date: string
  ) => void;
  userId: number;
  username: string;
}

const PostForm = ({ addPost, userId, username }: PostFormProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/get-posts", {
        userId,
        username,
        content,
      });
      addPost(userId, username, response.data.content, response.data.date);
    } catch (error) {
      alert("Posting failed");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
};

export default PostForm;
