import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from "./Task"


const dummyTaskData = [
  {
    title: "Slow down",
    description: "when leading from the front, you cannot go too slow"
  },
  {
    title: "Provide strength exercises",
    description: "hello"
  },
  {
    title: "Emma is cool",
    description: "yeah she is"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <Task title="set new quiz" decription="hello" />
          <Task title="hello" decription="how are you" />
          <Task title="emma" decription="bye" />

        </section>
      </div>
    );
  }
}

export default App;
