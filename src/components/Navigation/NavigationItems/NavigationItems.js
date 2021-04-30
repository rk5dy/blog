import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import LoginButton from '../Button/LoginButton';

// props = {token string, setToken func}
const NavigationItems = props => {

  return (
    <div className="collapse navbar-collapse" id="topNavbarCollapse">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <NavigationItem link="/">Blog</NavigationItem>
        <NavigationItem link="/AboutMe">About Me</NavigationItem>
        <LoginButton token={props.token} setToken={props.setToken}/>
      </ul>
    </div>
  );
}

export default NavigationItems;
