import uuid from 'uuid/v4';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';

export const addTodo = (value) => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    value,
    completed: false
  }
});

export const toggleCompletion = (id) => ({
  type: TOGGLE_COMPLETION,
  payload: id
});