import React, { useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import axios from 'axios';

interface AuthProps {
  setAuth: (user: any) => void;
}

const Auth: React.FC<AuthProps> = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'register';
    try {
      const response = await axios.post(`http://localhost:3000/${endpoint}`, {
        username,
        password,
      });
      setAuth(response.data);
    } catch (error) {
      console.error(`Error during ${endpoint}:`, error.response?.data || error.message);
    }
  };

  return (
    <div className="auth-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </Form>
      <Nav className="justify-content-center mt-4">
        <Nav.Item>
          <Nav.Link onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Need to register?' : 'Already have an account?'}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Auth;
