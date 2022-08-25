
import {useReducer} from "react";

const App = () => {
    const [years, dispatch] = useReducer(nextYears, {years: 0});

    function nextYears(state, action) {
        console.log(state);
        switch (action.type) {
            case "one": 
                return {years: state.years + 1};
            case "two": 
                return {years: state.years + 2} 
            case "three": 
                return {years: state.years + 3} 
        }
    }
    return (
        <> 
            <button onClick={()=> dispatch({type: "one"})}>one</button>
            <button onClick={()=> dispatch({type: "two"})}>two</button>
            <button onClick={()=> dispatch({type: "three"})}>three</button>
            <div>{years.years}</div>
        </>
    )            
}

export default App
