import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
  <div className="collapse navbar-collapse">
    <NavigationItem link="/">Blog</NavigationItem>
    <NavigationItem link="/AboutMe">About Me</NavigationItem>
  </div>
)

export default navigationItems;
