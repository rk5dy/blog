import React from 'react';
import Post from './Post/Post';
const postListComponent = (props) => {
  let lstPost = props.posts.map(post => {
    return (
      <Post id={post.id} title={post.title} content={post.content}/>
    );
  });

  return (
    <div>
      {lstPost}
    </div>
  );
}

export default postListComponent;
