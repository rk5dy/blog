import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';
const layout = (props) => (
  <Aux>
    <Toolbar isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>
    {props.children}
  </Aux>
)

export default layout;
