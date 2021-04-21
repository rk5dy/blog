import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Aux from '../../hoc/Aux';
const layout = (props) => (
  <Aux>
    <Toolbar/>
    {props.children}
  </Aux>
)

export default layout;
