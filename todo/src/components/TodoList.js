import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.length
      ? todos.map(e => <Todo key={e.id} id={e.id} />)
      : <p>No Todos Yet</p>}
    </ul>
  )
};

const mapStateToProps = ({ todos }) => ({
  todos: Object.values(todos)
});

export default connect(mapStateToProps)(TodoList);