const { createStore, applyMiddleware } = require('redux');
const { fetchTodos } = require('./functions');
const thunk = require('redux-thunk');

//redux thunk package, fetchAsyncMiddleware এর সেম কাজটাই করে দিবে, thunk একইভাবে প্রথম param এ store.dispatch() এবং দ্বিতীয় param a store.getState(), async function এর মধ্যে ভরে দিবে, আমাদেরকে আর fetchAsyncMiddleware এর কাজটা নিজে করতে হবে না ।।

//initial state
const initialState = {
  todos: []
}

//reducers
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/loadedTodos':
      return {
        ...state,
        todos: [
          ...state.todos,
          ...action.payload
        ]
      }

    default:
      break;
  }
}

//create store
const store = createStore(todoReducer, applyMiddleware(thunk.default));

//subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
})

//dispatch actions
store.dispatch(fetchTodos) //fetchTodos is a function body that will call from fetchAsyncMiddleware