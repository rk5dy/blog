import React from 'react';
import Post from './Post/Post';

// props = { posts {id string, title string, content string}, onDelete}
const postListComponent = (props) => {
  let lstPost = props.posts.map(post => {
    return (
      <Post key={post.id} title={post.title} content={post.content} id={post.id} onDeletePost={props.onDeletePost}/>
    );
  });

  return (
    <div>
      {lstPost}
    </div>
  );
}

export default postListComponent;
