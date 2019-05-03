import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res);
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }
  render() {
    const { posts } = this.state;
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

export default Home;
