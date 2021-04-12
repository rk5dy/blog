import React, {Component} from 'react';

class NewPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid main-container">
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">Blog</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="strTitle">Title</label>
            <input type="text" className="form-control" id="strTitle" />
          </div>
          <div className="form-group">
            <label htmlFor="strContent">Content</label>
            <textarea className="form-control" id="strContent" rows="3"></textarea>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">Create Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
