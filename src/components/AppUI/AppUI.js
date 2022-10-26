import { CreateTodoButton } from "../CreateTodo/CreateTodoButton"
import { TodoCounter } from "../TodoCounter/TodoCounter"
import { TodoItem } from "../TodoItem/TodoItem"
import { TodoList } from "../TodoList/TodoList"
import { TodoSearch } from "../TodoSearch/TodoSearch"
import './style.css'


export const AppUI = (
    {
        totalTodos,
        completedTodos,
        search,
        setSearch,
        todosFound,
        onComplete,
        onDelete,
    }
)=>{

    return(
        <div id="container">
            <TodoCounter
                totalTodos = {totalTodos}
                completedTodos = {completedTodos}
            />
            <TodoSearch 
                search= {search}
                setSearch= {setSearch}
            />
            <TodoList>
                {
                    todosFound.map((todo,index) => (
                        <TodoItem  
                            key={index} 
                            todo={todo} 
                            onComplete = {onComplete}
                            onDelete = {onDelete}
                        />
                    ))
                }
            </TodoList>
            <CreateTodoButton/>
            <div id="closer"></div>
        </div>
    )
}