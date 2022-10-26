import './todoList.css'

export const TodoList = (props) => {

    return(
        <>
            <ul id="ullist">
                {props.children}
            </ul>
        </>
    )
}