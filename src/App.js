import React, { Component } from 'react';
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
      <div>
        <h1>Simple To-do app</h1>
      </div>
    );
  }
}

export default App;
