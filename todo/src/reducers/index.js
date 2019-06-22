import { ADD_TODO } from '../actions';

const initialState = {
  todos: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: {
            ...action.payload
          }
        }
      }
    default:
      return state;
  }
};