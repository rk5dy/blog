import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { listUsers } from '../../graphql/queries';
import Button from '../../components/Navigation/Button/Button';
import Aux from '../../hoc/Aux';
import { API } from 'aws-amplify';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// props = {isLoggedIn bool, setIsLoggedIn func}
const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchAllUsers();
  }, [])

  // will change this to a direct search via graphql later
  async function fetchAllUsers() {
    try {
      const usersData = await API.graphql({ query: listUsers });
      setUsers(usersData.data.listUsers.items);
    } catch (err) {
      console.log(err);
    }
  }

  const submitHandler = async event => {
    event.preventDefault();
    if (users.some(user => user.username === username && user.password === password)) {
      props.setToken({"token": "test123"});
      return history.push('/');
    } else {
      alert("Wrong username/password");
    };
  };

  return (
    <Aux>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-4">Login</h1>
          <p className="lead">
            Login to edit the blog site.
          </p>
        </Container>
      </Jumbotron>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            id="strTitle"
            value={username}
            onChange={event => {
              setUsername(event.target.value);
            }
          }/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="password"
            id="strPassword"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }
          }/>
        </Form.Group>
        <Form.Group>
          <div className="col-sm-10">
            <Button variant="primary" type="submit" authorizedToEdit="true">Log In</Button>
          </div>
        </Form.Group>
      </Form>
    </Aux>
  );
}

export default Login;
