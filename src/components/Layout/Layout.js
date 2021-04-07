import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <Toolbar />
      </div>
      <div className="row">
        {props.children}
      </div>
    </div>
  </div>
)

export default layout;
