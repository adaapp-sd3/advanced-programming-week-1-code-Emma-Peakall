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

  function getTasks(task) {
    return (
      <div>
        <h1></h1>
      </div>
    )
  }

class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <section>
            {* dummyTaskData.map(item => <Task title={item.title} description={item.description />)}

            {dummyTaskData.map(function (item) {
              return (
                <Task title={
            )
            }}

          </section>
        </div>
      );
    }
  }

export default App;
