import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <NavBar bg="dark" expand="lg" variant="dark" fixed="top">
    <NavBar.Brand href="#">Rock's Blog</NavBar.Brand>
    <NavigationItems isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>
  </NavBar>
)

export default toolbar;
