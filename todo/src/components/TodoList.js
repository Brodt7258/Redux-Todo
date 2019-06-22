import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ todos }) => {
  const todoItems = Object.values(todos);
  return (
    <ul>
      {todoItems.length
      ? todoItems.map(e => <Todo key={e.id} id={e.id} />)
      : <p>No Todos Yet</p>}
    </ul>
  )
};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(mapStateToProps)(TodoList);