import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createBlogPost } from '../../graphql/mutations';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
const NewPost = props => {
  const enteredTitleState = useState('');
  const enteredContentState = useState('');
  const enteredTagsState = useState('');
  const submitHandler = async (title, content, tags) => {
      try {
        const data = {title: title, content: content, postDate: new Date(), tags: tags};
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
        enteredTagsState={enteredTagsState}
        />
    </div>
  );
}

export default NewPost;
