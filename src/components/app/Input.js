
import { useContext } from "react"
import textContent from './textContent';

const Input = ()=> {
    const context = useContext(textContent)   
        return(
            <>
                <input value={context.mail}/>
                <button 
                    onClick={context.changeTextContent}>
                </button>
            </>
            

        )    
}
export default Input