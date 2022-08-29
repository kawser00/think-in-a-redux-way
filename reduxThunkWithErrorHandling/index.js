const { createStore, applyMiddleware } = require('redux');
const fetch = require('node-fetch');
const thunk = require('redux-thunk');

//initial state
const initialState = {
  loading: false,
  error: null,
  posts: [],
}

const fetchPostsRequested = () => {
  return {
    type: 'FETCH_POSTS_REQUESTED',
  }
}
const fetchPostsSucceeded = (posts) => {
  return {
    type: 'FETCH_POSTS_SUCCEEDED',
    payload: posts,
  }
}

const fetchPostsFailed = (error) => {
  return {
    type: 'FETCH_POSTS_FAILED',
    payload: error,
  }
}

//reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUESTED':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_POSTS_SUCCEEDED':
      return {
        ...state,
        loading: false,
        posts: action.payload,
      }
    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      break;
  }
}

//thunk function
const fetchPosts = () => {
  return async (dispatch, getState) => {
    dispatch(fetchPostsRequested());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const posts = await response.json();
      dispatch(fetchPostsSucceeded(posts));
    } catch (error) {
      dispatch(fetchPostsFailed(error));
    }
  }
}

//create store for redux
const store = createStore(reducer, applyMiddleware(thunk.default));

//subscribe to store changes
store.subscribe(() => {
  console.log(store.getState());
})

//dispatch actions
store.dispatch(fetchPosts());