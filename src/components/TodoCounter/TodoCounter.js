import { useContext } from 'react';
import { TodoContex } from '../../TodoContext';
import './todoCounter.css'
export const TodoCounter = () => {
    const { totalTodos, completedTodos } = useContext(TodoContex)
    return(
        <>
            <h1 className="todoCounter">Tienes {completedTodos} de {totalTodos} tareas completadas</h1>
        </>
    );
}