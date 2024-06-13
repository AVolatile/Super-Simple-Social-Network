import Post from "./Post"
// Interface for the Posts
interface Post {
  id: number;
  username: string;
  content: string;
  date: string;
}

// Interface for the PostList component
interface PostListProps {
  posts: Post[]; // Import the posts
}

// The PostList component
const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default PostList;