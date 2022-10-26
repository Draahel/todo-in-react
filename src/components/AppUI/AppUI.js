import { useContext } from "react"
import { TodoContex } from "../../TodoContext"
import { CreateTodoButton } from "../CreateTodo/CreateTodoButton"
import { Modal } from "../modal"
import { TodoCounter } from "../TodoCounter/TodoCounter"
import { TodoForm } from "../TodoForm"
import { TodoItem } from "../TodoItem/TodoItem"
import { TodoList } from "../TodoList/TodoList"
import { TodoSearch } from "../TodoSearch/TodoSearch"
import './style.css'


export const AppUI = ()=>{
    const {error, loading, todosFound, onComplete, onDelete, openModal, setOpenModal } = useContext(TodoContex)
    
    return(
        <div id="container">
            <TodoCounter/>
            <TodoSearch/>
            
            <TodoList>
                {error && <p>Error al cargar los datos.</p>}
                {loading && <p>Cargando datos...</p>}
                {(!loading && !todosFound) && <p>Crea tu primera tarea.</p> }
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
            
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal = { setOpenModal }
            />
            <div id="closer"></div>
        </div>
    )
}