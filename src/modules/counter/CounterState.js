import {Map} from 'immutable';


// Initial state
const defaultCounterState = Map({
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export function increment() {
  return {
    type: INCREMENT
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function random() {
  return {
    type: RANDOM_REQUEST
  };
}

export async function requestRandomNumber() {
  return {
    type: RANDOM_RESPONSE,
    payload: null
  };
}

// Reducer
export default function CounterStateReducer(state = defaultCounterState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    case RESET:
      return defaultCounterState;

    case RANDOM_REQUEST:

      return state.set('loading', true);

    case RANDOM_RESPONSE:
      return state
                .set('loading', false)
                .set('value', action.payload);

    default:
      return state;
  }
}
