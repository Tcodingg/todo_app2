import React from "react"
import "./App.css"

export default function Design(){

    return(
    <div className="container">
        <div className="app-container">
            <div className="head-container">
                <h1>Todo App</h1>
                <div className="input-wrapper">
                    <input type="text"/>
                    <button>add</button>
                </div>
            </div>
            <div className="body-container">
                <div className="todo-container">
                    <p className='todo-items'>Shopping</p>
                    <div className="btn">
                        <button>E</button>
                        <button>D</button>
                    </div>
                    
                </div>
               
            </div>

        </div>
    </div>
    )
}