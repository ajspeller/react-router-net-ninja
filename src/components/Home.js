import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((p) => {
        return (
          <div key={p.id} className='post card'>
            <img src={Pokeball} alt='Pokeball' />
            <div className='card-content'>
              <Link to={`/${p.id}`}>
                <span className='card-title red-text'>{p.title}</span>
              </Link>
              <p>{p.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className='center'>No posts yet!</div>
    );
    return (
      <div className='Home container'>
        <h4 className='center'>Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
