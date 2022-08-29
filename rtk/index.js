const store = require("./app/store");
const {counterActions} = require("./features/counter/counterSlice");
const {dynamicCounterActions} = require("./features/dynamicCounter/dynamicCounterSlice");

//initial state
console.log(`Initial state: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch actions
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());


// dispatch dynamic actions
store.dispatch(dynamicCounterActions.increment(4));
store.dispatch(dynamicCounterActions.increment(7));
store.dispatch(dynamicCounterActions.decrement(3));
