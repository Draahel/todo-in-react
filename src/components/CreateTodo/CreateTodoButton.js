
import './createTodoButton.css'

export const CreateTodoButton = (props) => {
    const createTodo = () => {
        props.setOpenModal(prevState => !prevState)
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