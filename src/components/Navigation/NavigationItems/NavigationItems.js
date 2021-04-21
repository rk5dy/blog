import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <NavBar.Collapse>
    <Nav className="mr-auto">
      <NavigationItem link="/">Blog</NavigationItem>
      <NavigationItem link="/AboutMe">About Me</NavigationItem>
    </Nav>
  </NavBar.Collapse>
)

export default navigationItems;
