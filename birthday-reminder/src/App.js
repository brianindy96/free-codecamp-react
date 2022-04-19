import './App.css';
import React, { useState } from 'react'


function App() {
  const lists = [
    {
      id: 1,
      name: "John Wick",
      age: "29 years",
      image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Clark Kent",
      age: "34 years",
      image: "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      name: "Billy Zabka",
      age: "25 years",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "Emily Blunt",
      age: "21 years",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
      id: 5,
      name: "Kim Kardashian",
      age: "27 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      name: "Nuna",
      age: "24 years",
      image: "https://images.unsplash.com/photo-1498090890888-3df9298e7b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },

  ]
    

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>{lists.length} Birthday todays</h1>
        </header>
 
        <ul className="list-con">
              {lists.map((list) => (
                <li key={list.id} className="list-item">
                  <div className="left-con">
                    <div className="img-container">
                      <img src={list.image} alt="profile image"></img>
                    </div>
                  </div>
                  <div className="profile-info">
                    <h3>{list.name}</h3>
                    <p>{list.age}</p>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
