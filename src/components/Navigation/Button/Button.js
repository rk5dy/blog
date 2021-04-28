import React from 'react';
import Button from 'react-bootstrap/Button';

// props = {type string, variant string, linkTo string, authorizedToEdit boolean, onClick function}
const button = (props) => {
  if (!props.authorizedToEdit) {
    return <div></div>;
  }
  else {
    return (<Button type={props.type} variant={props.variant} href={props.linkTo} onClick={props.onClick} visible={props.authorizedToEdit}>{props.children}</Button>);
  }
}

export default button;
