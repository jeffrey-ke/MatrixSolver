import React, { useState } from 'react'
import "./App.css";
import Message from "./Message";
// import Input from "./Input";
import Matrix from './Matrix';

function App() {

  const [row,setRow] = useState(2)
  const [col,setCol] = useState(2)

  return (
    <div className="App">
      <Message
        title="Matrix Row Reducer"
        instruction=""
      />
      <div>
        <h3>Row</h3><br/>
        <button onClick={()=>{setRow(row + 1)}}>+</button><button onClick={()=>{setRow(row - 1)}}>-</button>

        <h3>Col</h3><br/>
        <button onClick={()=>{setCol(col + 1)}}>+</button><button onClick={()=>{setCol(col-1)}}>-</button>

      </div>
      <Matrix rows={row} cols={col}/>
    </div>
  );
}

export default App;
