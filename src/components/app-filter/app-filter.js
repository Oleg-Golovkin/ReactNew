
import "./app-filter.css"

const AppFilter = (props) => {   
        const btnData = [
            {name: "allWroker", lable: "Все сотрудники"},
            {name: "increaseWroker", lable: "Претендующие на повышение"},
            {name: "oneThousand", lable: "З.п. более 1000$" },
        ]

        const btns = btnData.map(({name, lable})=> {
            const active = props.filter === name
            const clazz = active ? "btn-light" : "btn-outline-light"
            return( 
                <button 
                    onClick={() => {props.addFilter(name)}}
                    className={`btn ${clazz}`} 
                    type="button"
                    key={name}>
                        {lable}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {btns}
</div>
        )
    
};

export default AppFilter