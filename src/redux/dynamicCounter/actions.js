import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: DYNAMIC_INCREMENT,
    payload: value,
  };
}

export const decrement = (value) => {
  return {
    type: DYNAMIC_DECREMENT,
    payload: value,
  };
}