// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - 1,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);


const render = () => {
  const getState = store.getState();
  counterEl.innerHTML = getState.value.toString();
};

//update UI initially
render();

// subscribe to store changes
store.subscribe(render);

// add event listeners
incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "increment",
    });
});

decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "decrement",
    });
} );