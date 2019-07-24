import { ADD_TODO, TOGGLE_COMPLETION } from '../actions';

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
    case TOGGLE_COMPLETION:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload]: {
            ...state.todos[action.payload],
            completed: !state.todos[action.payload].completed
          }
        }
      }
    default:
      return state;
  }
};