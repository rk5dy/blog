import React, { useState } from 'react';
import PostList from '../../components/PostList/PostList';
import {listBlogPosts} from '../../graphql/queries';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom';

const Blog = props => {  // posts = {id: string, title: string, content: string}
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const apiData = await API.graphql({ query: listBlogPosts });
    setPosts(apiData.data.listBlogPosts.items);
  }

  return (
    <div className="container-fluid main-container">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Blog</h1>
      </div>
      <Link to='/newPost'><button className="btn btn-success">New Post</button> </Link>
      <PostList posts={posts}/>
    </div>
  );
};

export default Blog;
