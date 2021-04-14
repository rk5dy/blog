import React from 'react';

// props = {id string, title string, content string, postedDate AWSDateTime, tags string}
const post = (props) => {
  return (
    <div className="container mt-3 border">
      <h2>{props.title}</h2>
      <h4>{props.postDate}</h4>
      <p>{props.content}</p>
      <p>{props.tags}</p>
      <button className="btn btn-danger" onClick={props.onDeletePost.bind(this, props.id)}>Delete</button>
    </div>
  );
}

export default post;
