import React from 'react';
import { Link } from 'react-router-dom';

// props = {type string, className string, linkTo string, authorizedToEdit boolean, onClick function}
const button = (props) => {
  const btn = <button type={props.type} className={props.className} onClick={props.onClick}>{props.children}</button>;
  var finalRetBtn = !props.linkTo || props.linkTo.length === 0 ? btn: <Link to={props.linkTo}>{btn}</Link>;

  if (props.authorizedToEdit === false) finalRetBtn = <div></div>;

  return finalRetBtn;
}

export default button;
