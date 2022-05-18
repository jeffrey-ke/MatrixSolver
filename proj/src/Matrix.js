// import React, { useState } from "react"

export default function Matrix(props){

    const generateMatrix = () =>{
        const m = []
        for (let i = 0; i < props.rows; i++) {
            for (let j = 0; j < props.cols; j++){
                m.push(<input type="number" required name="cell"/>)
            }
            m.push(<br/>)
        }
        return m
    }

    const compute = () =>{
        let inputs = document.getElementsByName('cell') //this hands back an array of all my input cells
        const str_cells = []
        inputs.forEach(cell => {
            str_cells.push((cell.value == null)? 0 : cell.value)
        })
        document.getElementById('values').value = str_cells.join(' ')
        fetch('/result', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                'values': str_cells,
                'rows': rows,
                'cols': cols
            }
        }).then(response => response.json()).then(data => {
            // json format of the fetch format can be pretty simple:
            // {
                // 'matrix' : 'matrix cell data strung together in a string'
            // }
        })
    }

    return (
        <div>
            { generateMatrix() }
            <button onClick={() => compute()}>submit</button>
            
        </div>
    )

    
}
