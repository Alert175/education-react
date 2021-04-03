import { INCREMENT } from '../types';

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.counter + 1;
    default:
      return state;
  }
};
