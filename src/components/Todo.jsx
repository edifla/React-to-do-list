import React from "react";

export function Todo({ todo, removeTodo, completeTodo }) {
    return (
        <div className='todo' 
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            <div className='content'>
                <p className='text'>{todo.text}</p>
                <p className='category'>{todo.category}</p>
            </div>
            <div className="buttons">
                <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className="delete" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    )
}