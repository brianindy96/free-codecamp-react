import './App.css';
import React, { useState } from 'react'


function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      name: "Bertie Yates",
      age: "29 years"
    },
    {
      id: 2,
      name: "Hester Hogan",
      age: "32 years"
    },
    {
      id: 3,
      name: "Larry Little",
      age: "36 years"
    },
    {
      id: 4,
      name: "Hester Hogan",
      age: "32 years"
    },
    {
      id: 5,
      name: "Larry Little",
      age: "36 years"
    },
  ])

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>{task.length} Birthday todays</h1>
        </header>
        <div className="list-con">
          <ul>
            <li>afsd</li>
            <li>asdfs</li>
            <li>fsdflaksd</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
