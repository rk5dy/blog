import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavigationItem from './NavigationItem/NavigationItem';
import LoginButton from '../Button/LoginButton';

// props = {token string, setToken func}
const NavigationItems = props => {

  return (
    <NavBar.Collapse>
      <Nav className="mr-auto">
        <NavigationItem link="/">Blog</NavigationItem>
        <NavigationItem link="/AboutMe">About Me</NavigationItem>
        <LoginButton token={props.token} setToken={props.setToken}/>
      </Nav>
    </NavBar.Collapse>
  );
}

export default NavigationItems;
