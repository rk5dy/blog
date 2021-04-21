import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Navigation/Button/Button';
import Card from 'react-bootstrap/Card';

// props = {id string, title string, content string, postedDate AWSDateTime, tags string, authorizedToEdit boolean}
const post = (props) => {
  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{"Posted on " + props.postDate.toString("MM/dd/YYYY")}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>{props.tags}</Card.Text>
        <Button variant="warning" linkTo={'/OnePost/' + props.id} authorizedToEdit={props.authorizedToEdit}>Edit Post</Button>
        <Button variant="danger" onClick={props.onDeletePost.bind(this, props.id)} authorizedToEdit={props.authorizedToEdit}>Delete</Button>
      </Card.Body>
    </Card>

  );
}

export default post;
