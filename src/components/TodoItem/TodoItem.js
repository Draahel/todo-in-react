import './todoItem.css'

export const TodoItem =  (props) => {
    const { title, completed } = props.todo
    const { onComplete, onDelete } = props
    
    return(
        <>
            <li className={`todoItem ${completed && 'marked'}`}>
                <span className="delete" onClick={()=>onDelete(title)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
                {title}
                <span className='done' onClick={()=>onComplete(title)}>
                    <i className={`fa-solid fa-circle-check ${completed && 'checkDone'}`} aria-hidden="true"></i>
                </span>
            </li>
        </>
    )
}