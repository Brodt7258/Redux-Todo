import React from 'react';
import { connect } from 'react-redux';

const TodoList = () => {

};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(mapStateToProps)(TodoList);