import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
  <ul className="nav navbar-nav">
    <NavigationItem link="/">About Me</NavigationItem>
    <NavigationItem link="/Blog">Blog</NavigationItem>
  </ul>
)

export default navigationItems;
