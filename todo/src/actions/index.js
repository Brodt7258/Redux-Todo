import uuid from 'uuid/v4';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (value) => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    value,
    completed: false
  }
});