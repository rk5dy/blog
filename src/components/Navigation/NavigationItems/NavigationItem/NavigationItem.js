import React from 'react';
import Nav from 'react-bootstrap/Nav';

// props = {link string}
const navigationItem = (props) => (
  <Nav.Link href={props.link}>{props.children}</Nav.Link>
);
export default navigationItem;
