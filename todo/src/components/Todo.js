import React from 'react';
import { connect } from 'react-redux';

import { toggleCompletion } from '../actions';

const Todo = ({ value, id, toggleCompletion }) => {
  //console.log(props);
  return (
    <div onClick={() => toggleCompletion(id)}>
      {value}
    </div>
  );
};

const mapStateToProps = ({ todos }, { id }) => ({
  ...todos[id]
});

export default connect(mapStateToProps, { toggleCompletion })(Todo);