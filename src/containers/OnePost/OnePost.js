import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { createBlogPost, updateBlogPost } from '../../graphql/mutations';
import { getBlogPost } from '../../graphql/queries';
import OnePostForm from '../../components/OnePostForm/OnePostForm';

const OnePost = props => {
  const postId =  props.match.params.postId;
  const enteredTitleState = useState('');
  const enteredContentState = useState('');
  const enteredTagsState = useState('');
  const postDateState = useState(new Date());
  const [editMode, setEditMode] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (postId !== undefined) {
      fetchBlogPost();
      setEditMode(true);
    }
  }, [])

  async function fetchBlogPost() {
    try {
      const blogPostData = await API.graphql({ query: getBlogPost, variables: { id: postId } });
      const blogPost = blogPostData.data.getBlogPost;
      enteredTitleState[1](blogPost.title);
      enteredTagsState[1](blogPost.tags);
      enteredContentState[1](blogPost.content);
      postDateState[1](blogPost.postDate);
    } catch (err) {
      console.log(err);
    }
  }

  const submitHandler = async (title, content, tags) => {
    if (editMode === false) {
      try {
        const data = {title: title, content: content, postDate: new Date(), tags: tags};
        await API.graphql(graphqlOperation(createBlogPost, { input: data }));
        return history.push('/');
      } catch(err) {
        console.log("Fail to post");
      }
    } else {
      try {
        const data = {id: postId, title: title, content: content, postDate: postDateState[0], tags: tags};
        await API.graphql(graphqlOperation(updateBlogPost, { input: data }));
        return history.push('/');
      } catch(err) {
        console.log("Fail to edit");
      }
    }
  };

  const headerText = editMode ? "Edit Post" : "New Post";

  return (
    <div className="container-fluid main-container">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">{headerText}</h1>
      </div>
      <OnePostForm
        onSubmitNewPost={submitHandler}
        enteredContentState={enteredContentState}
        enteredTitleState={enteredTitleState}
        enteredTagsState={enteredTagsState}
        editMode={editMode}
        authorizedToEdit={true}
        />
    </div>
  );
}

export default OnePost;
