import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// props = {type string, variant string, linkTo string, authorizedToEdit boolean, onClick function}
const button = (props) => {
  const btn = <Button type={props.type} variant={props.variant} href={props.linkTo} onClick={props.onClick}>{props.children}</Button>;

  if (props.authorizedToEdit === false) btn = <div></div>;

  return btn;
}

export default button;
