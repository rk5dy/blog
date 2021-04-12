import React from 'react';

// props = {title string, content string, id string}
const post = (props) => {
  return (
    <div className="container mt-3 border">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button className="btn btn-danger" onClick={props.onDeletePost.bind(this, props.id)}>Delete</button>
    </div>
  );
}

export default post;
