import EmployersListItem from "../employers-list-item/employers-list-item"
import "./employers-list.css"


const EmployersList = ({data, onDelete, toggleProp}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;       
        
        return (
            <EmployersListItem
            key = {id} {...itemProps}         
            onDelete = {()=>onDelete(id)}
            toggleProp = {(e) => toggleProp(id, e.currentTarget.getAttribute("data-prop"))}
            />
        )
    })  
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
};


export default EmployersList

