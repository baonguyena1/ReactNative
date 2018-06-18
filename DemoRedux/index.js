const { createStore } = require('redux');
const defaultState = { value: 0 };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UP':
            return { value: state.value + 1};
        case 'DOWN':
            return { value: state.value - 1 };
        default:
            return state;
    }
};

const store = createStore(reducer);

const myState = store.getState();
// console.log(myState);

store.dispatch({ type: 'UP' });
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'DOWN' });
console.log(store.getState());
/**
 * UP
 * DOWN
 */