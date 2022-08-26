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
const fetchAsyncMiddleware = (store) => (next) => async (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState) // action = fetchTodos function
    // return;
  }
  return next(action);
}

module.exports = {
  delayActionMiddleware,
  fetchAsyncMiddleware,
}