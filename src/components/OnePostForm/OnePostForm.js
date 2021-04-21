import React, { useState } from 'react';
import { createBlogPost } from '../../graphql/mutations';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from '../Navigation/Button/Button';

// props = {enteredTitleState useState, enteredContentState useState, enteredTagsState useState, editMode boolean, authorizedToEdit boolean}
const OnePostForm = props => {
  const [enteredTitle, setEnteredTitle] = props.enteredTitleState;
  const [enteredContent, setEnteredContent] = props.enteredContentState;
  const [enteredTags, setEnteredTags] = props.enteredTagsState;
  const submitHandler = event => {
    event.preventDefault();
    props.onSubmitNewPost(enteredTitle, enteredContent, enteredTags);
  };
  const submitText = props.editMode ? "Submit Changes" : "Create Post";

  return (
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id="strTitle"
            value={enteredTitle}
            onChange={event => {
              setEnteredTitle(event.target.value);
            }
          }/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            id="strContent"
            rows={3}
            value={enteredContent}
            onChange={event => {
              setEnteredContent(event.target.value);
            }
          }/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Tags (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            id="strTags"
            value={enteredTags}
            onChange={event => {
              setEnteredTags(event.target.value);
            }
          }/>
        </Form.Group>
        <Form.Group>
          <div className="col-sm-10">
            <Button variant="primary" type="submit">{submitText}</Button>
            <Button linkTo="/" variant="danger" authorizedToEdit={props.authorizedToEdit}>Cancel</Button>
          </div>
        </Form.Group>
      </Form>
  );
}

export default OnePostForm;
