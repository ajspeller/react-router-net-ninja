const initState = {
  posts: [
    {
      id: '1',
      title: 'Todd MacFarlane Spider-man',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam!'
    },
    {
      id: '2',
      title: 'Avengers End Game',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam!'
    },
    {
      id: '3',
      title: 'Avengers Infinity War',
      body:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam!'
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    const newPosts = state.posts.filter((p) => p.id !== action.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
