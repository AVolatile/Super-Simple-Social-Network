import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

// interface TweetFormProps {
//   addTweet: (
//     userId: number,
//     username: string,
//     content: string,
//     date: string
//   ) => void;
//   userId: number;
//   username: string;
// }

const TweetForm: React.FC = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (formRef.current) {
      const data = new FormData(formRef.current);
      const post = {
        userId: userDetails.userId,
        content: data.get("content"),
      };
      axios
        .post("http://localhost:3000/submitPost", post)

        .then((response) => {
          console.log(response.data);
          window.location.reload;
        })
        .catch((error) => {
          console.log("error submitting post", error);
        });
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Form.Group controlId="content">
        <Form.Label>Make a post</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="What's happening?"
          // value={content}
          // onChange={(e) => setContent(e.target.value)}
          name="content"
        />
      </Form.Group>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
};

export default TweetForm;
