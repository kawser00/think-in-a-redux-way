import rootReducer from "../rootReducer";

//create our first middleware
export const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());

  console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

  // pass action
  return next(action);
};


// middleware is a curring function
// middleware is a function that takes a store and returns a function that takes a next function and returns a function that takes an action and returns the next function


//example of a curring function
function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    }
  }
}

//by arrow function
// const curriedMultiply = (a) => (b) => (c) => a * b * c;

//calling curriedMultiply
curriedMultiply(2)(3)(4); //24