import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Do laundry"},
      {id: 2, content: "Clean up my flat"},
      {id: 3, content: "Learn maths for exam"}
    ]
  }
  render() {
    return (
      <div style={{width: '40%'}}>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Simple To-do app</h1>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
