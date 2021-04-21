import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const navigationItem = (props) => (
  <Nav.Link href={props.link}>{props.children}</Nav.Link>
);
export default navigationItem;
