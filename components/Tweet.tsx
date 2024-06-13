
import { Card } from "react-bootstrap";

interface TweetProps {
  username: string;
  content: string;
  date: string;
}

const Tweet: React.FC<TweetProps> = ({ username, content, date }) => {
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

export default Tweet;
