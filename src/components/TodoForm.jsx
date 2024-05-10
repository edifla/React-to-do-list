import React from "react";
import { useState } from "react";

export function TodoForm({addTodo}){

    const[text,setText] = useState("")
    const[category,setCategory] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!text || !category) return
        addTodo(text,category)
        setCategory("")
        setText("")
    }


    return(
        <div className="todo-form">
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} placeholder="Digite o título" onChange={(e) => setText(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Estudo">Estudo</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}   