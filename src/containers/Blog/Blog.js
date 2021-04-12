import React, { useState, useEffect } from 'react';
import PostList from '../../components/PostList/PostList';
import {listBlogPosts} from '../../graphql/queries';
import {deleteBlogPost} from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { Link } from 'react-router-dom';

const Blog = props => {  // posts = {id: string, title: string, content: string}
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
    <div className="container-fluid main-container">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Blog</h1>
      </div>
      <Link to='/newPost'><button className="btn btn-success">New Post</button> </Link>
      <PostList posts={posts} onDeletePost={deleteBlogPostHandler} />
    </div>
  );
};

export default Blog;
