import React from 'react';
import TodoItem from '../styles/TodoItem';
import Success from '../styles/Success';
const TodoList = props => {
  const listOfTodos = props.todos.length ? (
    props.todos.map(todo => {
      return (
        <div key={todo.id} >
          <TodoItem onClick={() => props.delete(todo.id)}>
                {todo.content}
          </TodoItem>
        </div>
      );
  })
  ) : (
    <Success>You've made all things that you had to do!</Success>
  );

  return (
    <div>
      {listOfTodos}
    </div>
  );
};

export default TodoList;