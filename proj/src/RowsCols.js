import Matrix from "./Matrix"
import React, { useState } from 'react'
function RowsCols(){
    const [row,setRow] = useState(2)
    const [col,setCol] = useState(2)
    return(
        <div>
            <div>
                <h3>Row</h3><br/>
                <button onClick={()=>{setRow(row+1)}}>+</button><button onClick={()=>{setRow(row-1)}}>-</button>
                <input id='row-in' onChange={()=>{setRow(Number(document.getElementById('row-in').value))}}></input>
                <h3>Col</h3><br/>
                <button onClick={()=>{setCol(col+1)}}>+</button><button onClick={()=>{setCol(col-1)}}>-</button>
                <input id='col-in' onChange={()=>{setCol(Number(document.getElementById('col-in').value))}}></input>

            </div>
            <Matrix rows={row} cols={col}/>
        </div>
    )
}
export default RowsCols