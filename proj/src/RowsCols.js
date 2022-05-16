import Matrix from "./Matrix"
import React, { useState } from 'react'
function RowsCols(){
    const [row,setRow] = useState(2)
    const [col,setCol] = useState(2)
    console.log("RowsCols reloaded")
    return(
        <div>
            <div>
                <h3>Row</h3><br/>
                <button onClick={()=>{setRow(row+1)}}>+</button><button onClick={()=>{setRow(row-1)}}>-</button>
                <h3>Col</h3><br/>
                <button onClick={()=>{setCol(col+1)}}>+</button><button onClick={()=>{setCol(col-1)}}>-</button>
            </div>
            <Matrix rows={row} cols={col}/>
        </div>
    )
}
export default RowsCols