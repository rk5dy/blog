import React from 'react';
import Post from './Post/Post';
import Row from 'react-bootstrap/Row';
// props = { posts {id string, title string, content string, postDate AWSDateTime, tags string}, onDelete function, authorizedToEdit boolean}
const postListComponent = (props) => {
  let lstPost = props.posts.map(post => {
    return (
      <Row key={post.id} className="justify-content-md-center">
        <Post key={post.id}
            title={post.title}
            postDate={post.postDate}
            content={post.content}
            id={post.id} tags={post.tags}
            onDeletePost={props.onDeletePost}
            authorizedToEdit={props.authorizedToEdit}/>
      </Row>
    );
  });

  return lstPost;
}

export default postListComponent;
