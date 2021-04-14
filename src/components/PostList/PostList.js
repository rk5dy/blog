import React from 'react';
import Post from './Post/Post';

// props = { posts {id string, title string, content string, postDate AWSDateTime, tags string}, onDelete}
const postListComponent = (props) => {
  let lstPost = props.posts.map(post => {
    return (
      <Post key={post.id} title={post.title} postDate={post.postDate} content={post.content} id={post.id} tags={post.tags} onDeletePost={props.onDeletePost}/>
    );
  });

  return (
    <div>
      {lstPost}
    </div>
  );
}

export default postListComponent;
