import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Navigation/Button/Button';
// props = {id string, title string, content string, postedDate AWSDateTime, tags string, authorizedToEdit boolean}
const post = (props) => {
  return (
    <div className="card mb-3">
      <h3 className="card-header">
        {props.title}
      </h3>
      <div className="card-body">
        <h4 className="card-title">{props.postDate}</h4>
        <p className="card-text">{props.content}</p>
        <p>{props.tags}</p>
        <Button className="btn btn-warning" linkTo={'/OnePost/' + props.id} authorizedToEdit={props.authorizedToEdit}>Edit Post</Button>
        <Button className="btn btn-danger" onClick={props.onDeletePost.bind(this, props.id)} authorizedToEdit={props.authorizedToEdit}>Delete</Button>
      </div>
    </div>

  );
}

export default post;
