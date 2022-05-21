// import React, { useState } from "react"
import React from 'react'
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

    const compute = (event) =>{
        event.preventDefault();
        let inputs = document.getElementsByName('cell') //this hands back an array of all my input cells
        const str_cells = []
        inputs.forEach(cell => {
            str_cells.push((cell.value == null)? 0 : cell.value)
        })
        fetch('/compute', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                values: str_cells,
                rows: props.rows,
                cols: props.cols
            })
        }).then(response => response.text()).then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            { generateMatrix() }
            <form onSubmit={compute}>
                <button type='submit'>submit</button>
            </form>
        </div>
    )

    
}
