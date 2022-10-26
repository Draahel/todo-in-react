import React, { useState } from "react";
import { AppUI } from "./components/AppUI/AppUI";

const defaultTodos = [
  {title:"To study React", completed: true},
  {title:"Find work", completed: true},
  {title:"To study Node", completed: false},
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [search, setSearch] = useState('');

  const completedTodos = todos.filter(todo => (todo.completed == true)).length
  const totalTodos = todos.length

  let todosFound = []
  if (!search.length >= 1) {
    todosFound = todos;
  } else {
    todosFound = todos.filter(todo => {
      const todoText = todo.title.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const onComplete = (title) => {
    const todoIndex = todos.findIndex(todo => todo.title == title);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed 
    setTodos(updatedTodos);
  }

  const onDelete = (title) => {
    const todoIndex = todos.findIndex(todo => todo.title == title);
    const updatedTodos = [...todos]
    updatedTodos.splice(todoIndex,1);
    setTodos(updatedTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos = {completedTodos}
      search = { search }
      setSearch = { setSearch }
      todosFound = { todosFound }
      onComplete = { onComplete }
      onDelete = { onDelete }
    />
  );
}

export default App;
