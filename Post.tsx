import styled from "@emotion/styled";
import React from "react";
// Post Conatiner
const PostContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  background: #fff;
`;

const PostContent = styled.div`
  // Post Content
  font-size: 18px;
`;

interface PostsProps {
  id: string;
  username: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  likeCount: number;
  dislikeCount: number;
}

const Post = ({ username, content, timestamp, likeCount }: PostsProps) => {
  return (
    <PostContainer>
      <PostContent>
        <h2>Post Content</h2>
        <p>{username}</p>
        <p>{content}</p>

        <p>{timestamp}</p>
        <p>{likeCount}</p>
      </PostContent>
    </PostContainer>
  );
};

export default Post;
