import React, { useState } from 'react';
import { API } from 'aws-amplify';
import { createBlogPost } from '../../graphql/mutations';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
const NewPost = props => {
  const enteredTitleState = useState('');
  const enteredContentState = useState('');
  const submitHandler = async (title, content) => {
      await API.graphql({query: createBlogPost, variables:  { input: { title: title, content: content } } });
  };

  return (
    <div className="container-fluid main-container">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">New Post</h1>
      </div>
      <NewPostForm
        onSubmitNewPost={submitHandler}
        enteredContentState={enteredContentState}
        enteredTitleState={enteredTitleState}
        />
    </div>
  );
}

export default NewPost;
