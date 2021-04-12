import React, {useState} from 'react';
import { API } from 'aws-amplify';
import { createBlogPost } from '../../graphql/mutations';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
const NewPost = props => {
  const enteredTitleState = useState('');
  const enteredContentState = useState('');
  const submitHandler = async () => {
    const sup = API.graphql({query: createBlogPost, variables:  { input: { title: enteredTitleState[0], content: enteredContentState[0] } } });
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
