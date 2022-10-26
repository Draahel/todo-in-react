import './todoSearch.css'

export const TodoSearch = ({search, setSearch}) => {
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