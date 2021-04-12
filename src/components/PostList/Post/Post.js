import React from 'react';

// props = {title string, content string}
const post = (props) => {
  return (
    <div className="container mt-3 border">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}

export default post;
