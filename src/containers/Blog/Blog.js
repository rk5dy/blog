import React, {Component} from 'react';
import PostList from '../../components/PostList/PostList';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [{id: "1", title: "post1", content: "content1"}, {id: "2", title: "post2", content: "content2"}]
    };
  }

  newPostHandler = () => {
    this.props.history.push({
      pathname: '/newPost',
    });
  }

  render() {
    return (
      <div className="container-fluid main-container">
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">Blog</h1>
        </div>
        <button className="btn btn-success" onClick={this.newPostHandler}>New Post</button>
        <PostList posts={this.state.posts}/>
      </div>
    );
  }
}

export default Blog;
