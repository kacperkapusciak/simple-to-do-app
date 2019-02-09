import React, { Component } from "react";
import TodoItem from "../styles/TodoItem";
import Success from "../styles/Success";
import PropTypes from "prop-types";

class TodoList extends Component {
  static defaultProps = {
    todos: []
  };
  
  render() {
    const listOfTodos = this.props.todos.length ? (
      this.props.todos.map(todo => {
        return (
          <div key={todo.id}>
            <TodoItem onClick={() => this.props.delete(todo.id)}>
              {todo.content}
            </TodoItem>
          </div>
        );
      })
    ) : (
      <Success>You've made all things that you had to do!</Success>
    );

    return <div>{listOfTodos}</div>;
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
