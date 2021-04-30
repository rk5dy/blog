import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

//props = {token string, setToken func}
const toolbar = (props) => (
  <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">Rock's Blog</a>
    <NavigationItems token={props.token} setToken={props.setToken}/>
  </nav>
)

export default toolbar;
