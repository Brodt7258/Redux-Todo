import React, { useState } from 'react';

const TodoForm = () => {

  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
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

export default TodoForm;