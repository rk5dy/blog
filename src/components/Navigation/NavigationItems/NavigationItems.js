import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
  <ul className="nav navbar-nav">
    <NavigationItem link="/">Blog</NavigationItem>
    <NavigationItem link="/AboutMe">About Me</NavigationItem>
  </ul>
)

export default navigationItems;
