
import './App.css';
import {useState} from 'react';
import textContent from './textContent';
import Form from './Form'

const {Provider} = textContent; 

const App = ()=> {
    const [data, setData] = useState({
        mail: "second@example.com",
        changeTextContent: changeTextContent,        
    });
    function changeTextContent(){
        setData({mail: "next"})
    }
    return (
        <Provider value={data}>
            <Form/>
            <button 
                onClick={() => setData({
                    mail: "example.com",
                    changeTextContent: changeTextContent,
                })}>
                Click me
            </button>
        </Provider>
    );
}







export default App;
