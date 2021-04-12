import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createBlogPost } from '../../graphql/mutations';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
const NewPost = props => {
  const enteredTitleState = useState('');
  const enteredContentState = useState('');
  const submitHandler = async (title, content) => {
      try {
        const data = {title: title, content: content};
        await API.graphql(graphqlOperation(createBlogPost, { input: data }));
      } catch(err) {
        console.log("Fail to post");
      }
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
