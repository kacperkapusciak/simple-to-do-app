import React from 'react';

const TodoList = props => {
  return props.todos.map(todo => {
    return (
      <div key={todo.id}>
        <span>{todo.content}</span>
      </div>
    )
  })
};

export default TodoList;