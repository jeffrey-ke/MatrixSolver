import React, { useState } from 'react'
import "./App.css";
import Message from "./Message";
import Input from "./Input";
import Matrix from './Matrix';

function App() {
  return (
    <div className="App">
      <Message
        title="Matrix Row Reducer"
        instruction="Enter the number of rows and columns."
      />
      <Input dst='matrix'/>
      <Matrix rows={4} cols={4}/>
    </div>
  );
}

export default App;
