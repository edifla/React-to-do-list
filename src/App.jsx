import { useState } from 'react'
import './App.css'
import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm'
import { Search } from './components/Search'

function App() {
  const [search, setSearch] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar programação",
      category: "Estudos",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false
    }
  ])
  const addTodo = (text, category) => {
    const quantidade = todos.length - 1
    const newTodos = [...todos, {
      id: quantidade < 0 ? 1 : todos[quantidade].id + 1,
      text,
      category,
      isCompleted: false
    },
    ];
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(filteredTodos)
  }
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }




  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos.filter((todo) => 
        todo.text.toLowerCase().includes(search.toLocaleLowerCase()))
        .map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
