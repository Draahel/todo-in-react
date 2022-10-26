import './todoCounter.css'

export const TodoCounter = (props) => {
    const { totalTodos, completedTodos } = props
    return(
        <>
            <h1 className="todoCounter">Tienes {completedTodos} de {totalTodos} tareas completadas</h1>
        </>
    );
}