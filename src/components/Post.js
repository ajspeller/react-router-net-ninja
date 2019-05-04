import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  render() {
    const post = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className='center'>
          <button className='btn grey' onClick={this.clickHandler}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className='center'>Loading post ...</div>
    );

    return (
      <div className='Post container'>
        <h4>{post}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((p) => id === p.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
