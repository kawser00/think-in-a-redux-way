const fetch = require('node-fetch')

const fetchAsyncMiddleware = (store) => (next) => async (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState) // action = fetchTodos function
    // return;
  }
  return next(action);
}

module.exports = {
  fetchAsyncMiddleware,
}