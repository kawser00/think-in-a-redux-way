const {createStore, applyMiddleware} = require('redux');
const {delayActionMiddleware, fetchTodosMiddleware} = require('./middlewares');

//initial state
const initialState = {
  todos: []
}

//reducers
const todoReducer = (state = initialState, action) => {
  switch (action.payload) {
    case 'todo/addTodo':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload
          }
        ]
      }
    case 'todo/loadedTodos':
      return {
        ...state,
        todos: [
          ...state.todos,
          ...action.payload
        ]
      }

    default:
      return action;
  }
}

//create store
const store = createStore(todoReducer, applyMiddleware(delayActionMiddleware,fetchTodosMiddleware));

//subscribe to state changes
store.subscribe(()=> {
  console.log(store.getState());
})

//dispatch actions

// store.dispatch({
//   type:'todo/addTodo',
//   payload:{title:'Learn Redux with fun'}
// })

//action for fetch api from the server
store.dispatch({
  type:'todo/fetchTodos',
})