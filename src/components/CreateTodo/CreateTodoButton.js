import './createTodoButton.css'

export const CreateTodoButton = () => {
    const createTodo = () => {
        alert("Creando Todo")
    }
    return(
        <>
            <button 
                className="createTodoButton"
                onClick={createTodo}
            >
                +
            </button>
        </>
    )
}