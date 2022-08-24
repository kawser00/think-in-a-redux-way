
import { ADD_TODO as ADDED, TOGGLED, DELETE_TODO as DELETED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED } from "./actionTypes"
import initialState from "./initialState";

const nextTodoId = (todos) => {
  console.log(todos);
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
          //  color: action.color
        }
      ]
    case TOGGLED:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;

        // if(todo.id !== action.payload) {
        //   return todo;
        // }
        // return {
        //   ...todo,
        //   completed: !todo.completed
        // }
      })

    case COLOR_SELECTED:
      const { todoId, color } = action.payload;
      return state.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            color
          }
        }
        return todo;
      })
    case DELETED:
      return state.filter(todo => todo.id !== action.payload)
    case ALL_COMPLETED:
      return state.map(todo => {
        return {
          ...todo,
          completed: true
        }
      })
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed)
    default:
      return state;
  }
}

export default todoReducers;
