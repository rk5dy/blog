import React, { useState } from 'react';
import { createBlogPost } from '../../graphql/mutations';
import { Link } from 'react-router-dom';

const NewPostForm = props => {
  const [enteredTitle, setEnteredTitle] = props.enteredTitleState;
  const [enteredContent, setEnteredContent] = props.enteredContentState;
  const submitHandler = event => {
    event.preventDefault();
    props.onSubmitNewPost(enteredTitle, enteredContent);
  };

  return (
      <form onSubmit={submitHandler}>
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
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Create Post</button>
          </div>
        </div>
      </form>
  );
}

export default NewPostForm;
