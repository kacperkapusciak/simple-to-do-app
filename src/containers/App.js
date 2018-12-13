import React, { Component } from 'react';

import Center from '../styles/Center';
import H1 from '../styles/H1';

import TodoList from '../components/TodoList';
import InputForm from './InputForm';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Do laundry"},
      {id: 2, content: "Clean up my flat"},
      {id: 3, content: "Learn maths for exam"}
    ]
  }

  deleteHandler = id => {
    const todos = this.state.todos.filter(todo => {
      return (
        id !== todo.id
      );
    });
    this.setState({todos: todos});
  }

  addHandler = newTodo => {
    newTodo.id = Math.random();
    const todos = [...this.state.todos, newTodo];
    this.setState({todos: todos});
  }

  

  render() {
    return (
      <Center>
        <H1>Simple To-do app</H1>
        <InputForm submitValue={this.addHandler}/>
        <TodoList todos={this.state.todos} delete={this.deleteHandler}/>
      </Center>
    );
  }
}

export default App;
