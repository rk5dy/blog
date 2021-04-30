import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import NavigationItems from '../NavigationItems/NavigationItems';

//props = {token string, setToken func}
const toolbar = (props) => (
  <NavBar bg="dark" expand="lg" variant="dark" fixed="top">
    <NavBar.Brand href="#">Rock's Blog</NavBar.Brand>
    <NavigationItems token={props.token} setToken={props.setToken}/>
  </NavBar>
)

export default toolbar;
