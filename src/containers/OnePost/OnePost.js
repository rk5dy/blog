import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { createBlogPost, updateBlogPost } from '../../graphql/mutations';
import { getBlogPost } from '../../graphql/queries';
import OnePostForm from '../../components/OnePostForm/OnePostForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Aux from '../../hoc/Aux';
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
  }, [postId])

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
    <Aux>
      <Jumbotron fluid>
        <Container>
          <h1>{headerText}</h1>
        </Container>
      </Jumbotron>
      <OnePostForm
        onSubmitNewPost={submitHandler}
        enteredContentState={enteredContentState}
        enteredTitleState={enteredTitleState}
        enteredTagsState={enteredTagsState}
        editMode={editMode}
        authorizedToEdit={{"token": "test123"}}
        />
    </Aux>
  );
}

export default OnePost;
