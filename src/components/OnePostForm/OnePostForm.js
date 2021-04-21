import React, { useState } from 'react';
import { createBlogPost } from '../../graphql/mutations';
import { Link } from 'react-router-dom';
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
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="strTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="strTitle"
            value={enteredTitle}
            onChange={event => {
              setEnteredTitle(event.target.value);
            }
          }/>
        </div>
        <div className="form-group">
          <label htmlFor="strContent">Content</label>
          <textarea
            className="form-control"
            id="strContent"
            rows="3"
            value={enteredContent}
            onChange={event => {
              setEnteredContent(event.target.value);
            }
          }/>
        </div>
        <div className="form-group">
          <label htmlFor="strTags">Tags (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            id="strTags"
            value={enteredTags}
            onChange={event => {
              setEnteredTags(event.target.value);
            }
          }/>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <Button type="submit" className="btn btn-primary">{submitText}</Button>
            <Button link="/" className="btn btn-danger" authorizedToEdit={props.authorizedToEdit}>Cancel</Button>
          </div>
        </div>
      </form>
  );
}

export default OnePostForm;
