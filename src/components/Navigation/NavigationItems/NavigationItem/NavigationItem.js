import React from 'react';

// props = {link string}
const navigationItem = (props) => (
  <li className="nav-item">
    <a className="nav-link" href={props.link}>{props.children}</a>
  </li>
);
export default navigationItem;
