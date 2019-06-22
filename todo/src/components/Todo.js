import React from 'react';
import { connect } from 'react-redux';

const Todo = ({ value }) => {
  //console.log(props);
  return (
    <div>
      {value}
    </div>
  );
};

const mapStateToProps = ({ todos }, { id }) => ({
  ...todos[id]
});

export default connect(mapStateToProps)(Todo);