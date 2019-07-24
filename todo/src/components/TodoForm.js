import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const TodoForm = ({ addTodo }) => {

  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(item);
    setItem('');
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default connect(null, { addTodo })(TodoForm);