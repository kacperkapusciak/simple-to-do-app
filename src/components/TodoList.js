import React from 'react';
const TodoStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px',
  padding: '10px',
  border: '1px solid gray'
}
const TodoList = props => {
  const listOfTodos = props.todos.length ? (
    props.todos.map(todo => {
      return (
        <div key={todo.id} >
          <span style={TodoStyle}>{todo.content}</span>
        </div>
      );
  })
  ) : (
    <p>You've made all things that you had to do!</p>
  );

  return (
    <div>
      {listOfTodos}
    </div>
  );
};

export default TodoList;