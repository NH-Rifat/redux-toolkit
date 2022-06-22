const { createStore } = require('redux');

// constant........
const Increment = 'Increment';
const Decrement = 'Decrement';
const Increment_By_Value = 'Increment_By_Value'
const Add_User = 'Add_user'

const initialCounterState = {
  count: 0,
  users : ['Anis','Kanis'],
};

// action---Object- type, payload........
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

const incrementByValue = (value) => {
  return {
    type:Increment_By_Value,
    payload:value
  };
};

const addUser = (user)=>{
  return{
    type:Add_User,
    payload:user,
  }
}


// create reducer for counter.......
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

    case Increment_By_Value:
      return {
        count: state.count + action.payload,
      };

    case Add_User:
      return {
        users:[...state.users,action.payload],
        // count: state.count + action.payload,
      };

    default:
      break;
  }
};

// create store...
const store = createStore(counterReducer);

store.subscribe(()=>{
  console.log(store.getState());
})

// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());

// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());

// store.dispatch(incrementByValue(5))

store.dispatch(addUser('Rahim'))
