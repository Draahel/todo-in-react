import { useContext } from 'react'
import { TodoContex } from '../../TodoContext'
import './todoSearch.css'

export const TodoSearch = () => {
    const {search, setSearch} = useContext(TodoContex);
    const onSearchValieChange = (e) => {
        setSearch(e.target.value)
    }
    return(
        <>
            <input 
                type="text" 
                placeholder="FILTRAR UNA NUEVA TAREA"
                onChange={onSearchValieChange}
                value={search}
            />
        </>
    )
}