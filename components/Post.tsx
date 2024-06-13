import { Card } from 'react-bootstrap';


// Interface for the Post component
interface PostProps {
  username: string;
  content: string;
  date: string;
}
const Post = ({ username, content, date }: PostProps) => {
  return (
   <Card className="mb-3">
     <Card.Body>
       <Card.Title>{username}</Card.Title>
       <Card.Text>{content}</Card.Text>
       <Card.Subtitle className="text-muted">{date}</Card.Subtitle>
     </Card.Body>
   </Card>
  );
};

export default Post;