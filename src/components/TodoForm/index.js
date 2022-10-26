import { useContext, useState } from "react";
import { TodoContex } from "../../TodoContext";
import './style.css';

export const TodoForm = () => {

    const [ newTodoValue, setNewTodoValue ] = useState('');
    const { setOpenModal, addTodo } = useContext(TodoContex);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
        setNewTodoValue('');
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Nuevo ToDo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo."
            />
            <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
            >
                Añadir
            </button>
        </div>
        </form>
    );
}