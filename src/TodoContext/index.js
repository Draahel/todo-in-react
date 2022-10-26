import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContex = createContext();

const TodoProvider = (props) => {
    const {
    items: todos, 
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage('todoList',[])

  const [search, setSearch] = useState('');
  const [ openModal, setOpenModal ] = useState(false)

  const completedTodos = todos.filter(todo => (todo.completed === true)).length
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

  const addTodo = (text) =>{
    const updatedTodos = [...todos];
    updatedTodos.push({
      completed: false,
      title: text,
    });
    saveTodos(updatedTodos);
  }

  const onComplete = (title) => {
    const todoIndex = todos.findIndex(todo => todo.title === title);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed 
    saveTodos(updatedTodos)
  }

  const onDelete = (title) => {
    const todoIndex = todos.findIndex(todo => todo.title === title);
    const updatedTodos = [...todos]
    updatedTodos.splice(todoIndex,1);
    saveTodos(updatedTodos)
  }
    return(
        <TodoContex.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            openModal,
            setOpenModal,
            todosFound,
            onComplete,
            onDelete,
            addTodo,
        }}>
            {props.children}
        </TodoContex.Provider>
    )
}

export { TodoContex, TodoProvider };