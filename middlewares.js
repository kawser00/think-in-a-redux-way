const fetch = require('node-fetch')

const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todo/addTodo') {
    console.log('I am delaying you');
    setTimeout(() => {
      next(action);
    }, 200)

    return;
  }
  return next(action);
}
const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'todo/fetchTodos') {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    const todos = await response.json();

    store.dispatch({
      type: 'todo/loadedTodos',
      payload: todos,
    })

    return;
  }
  return next(action);
}

module.exports = {
  delayActionMiddleware,
  fetchTodosMiddleware,
}