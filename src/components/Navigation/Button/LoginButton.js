import React from 'react';
import Button from 'react-bootstrap/Button';

const button = (props) => {
  if (!props.isLoggedIn) {
    return <Button variant="success" href="/Login">Log In</Button>
  } else {
    return <Button variant="danger" onClick={() => props.setIsLoggedIn(false)}>Log Out</Button>
  }

}

export default button;
