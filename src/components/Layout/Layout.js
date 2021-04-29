import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';
const layout = (props) => (
  <Aux>
    <Toolbar token={props.token} setToken={props.setToken}/>
    {props.children}
  </Aux>
)

export default layout;
