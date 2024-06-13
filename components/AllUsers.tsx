import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
}

const AllUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ListGroup>
      {users.map(user => (
        <ListGroup.Item key={user.id}>
          <strong>{user.username}</strong> ({user.email}) <br />
          <small>{user.full_name}</small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AllUsers;
