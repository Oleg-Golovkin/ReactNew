
import React from "react"
import "./employers-list-item.sass"


const EmployersListItem = (props) => {
        const {name, salary, onDelete, toggleProp, increase, stars, onChangeSalary} = props;
        let className = "list-group-item d-flex justify-content-between";
        
        if (increase) {
            className += ` increase`
        }
        if (stars) {
            className += ` like`
        }
        
        return(
            <li className={className}>
                <span 
                onClick={toggleProp}                
                className="list-group-item-label" 
                data-prop="increase">{name}
                </span>
                <input 
                onChange={onChangeSalary}
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                    onClick={toggleProp} 
                    data-prop="stars" 
                    type="button"
                    className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    
}
export default EmployersListItem;