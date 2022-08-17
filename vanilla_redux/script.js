// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
}

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
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
    store.dispatch(increment(3));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
} );