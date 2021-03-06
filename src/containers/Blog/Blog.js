import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PostList from '../../components/PostList/PostList';
import Button from '../../components/Navigation/Button/Button';
import {listBlogPosts} from '../../graphql/queries';
import {deleteBlogPost} from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Aux from '../../hoc/Aux';

const Blog = props => {  // posts = {id: string, title: string, content: string, tags: string}
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, [])

  async function fetchBlogPosts() {
    try {
      const blogPostData = await API.graphql(graphqlOperation(listBlogPosts));
      const blogPosts = blogPostData.data.listBlogPosts.items;
      setPosts(blogPosts);
    } catch (err) {
      console.log('error fetching blog posts');
    }
  }

  async function deleteBlogPostHandler(postId) {
    try {
      //console.log(postId);
      const newBlogPostArray = posts.filter(post => post.id !== postId);
      setPosts(newBlogPostArray);
      await API.graphql({ query: deleteBlogPost, variables: {input: { id: postId } } });
    } catch (err) {
      console.log('error deleting blog post');
    }
  }

  return (
      <Aux>
        <Jumbotron>
          <Container>
            <h1>Blog</h1>
            <Button linkTo='/OnePost/' variant="success" authorizedToEdit={props.token}>New Post</Button>
          </Container>
        </Jumbotron>
        <Container>
          <PostList posts={posts} onDeletePost={deleteBlogPostHandler} authorizedToEdit={props.token}/>
        </Container>
      </Aux>
  );
};

export default Blog;
