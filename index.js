const { createStore } = require('redux');

const Increment = 'Increment';
const Decrement = 'Decrement';

const initialCounterState = {
  count: 0,
};

const incrementCounter = () => {
  return {
    type: Increment,
  };
};
const decrementCounter = () => {
  return {
    type: Decrement,
  };
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case Increment:
      return {
        count: state.count + 1,
      };

    case Decrement:
      return {
        count: state.count - 1,
      };

    default:
      break;
  }
};
