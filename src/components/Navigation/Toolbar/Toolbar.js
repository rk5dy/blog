import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <nav className="navbar navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="/">Rock's Blog</a>
    <NavigationItems token={props.token} setToken={props.setToken}/>
  </nav>
)

export default toolbar;
