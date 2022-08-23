import {useState, createContext, Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


// function comparisonProps(prevProps, nextProps){
//     return prevProps.mail.m === nextProps.mail.m
// }

// const Form = memo((props) => {
//     console.log('render');
//     return (
//         <Container>
//             <input value={props.mail.m}/>                           
//         </Container>
//     )
// }, comparisonProps)


// Это значение по умолчанию?
const textContent = createContext({
    mail: "second@example.com" 
})

console.log(textContent);

const {Provider, Consumer} = textContent; 

const App = ()=> {
    const [data, setData] = useState({
        mail: "second@example.com",        
    });

    return (
        //   Зачем сдесь пишем value?
        <Provider value={data}>
            <Form/>
            <button 
                onClick={() => setData({
                    mail: "example.com"
                })}>
                Click me
            </button>
        </Provider>
    );
}

class Form extends Component{    
    render(){
        return (
            <Container>
                <Input/>
            </Container>
        )
    }
}

class Input extends Component{
    render(){
        return(
            <Consumer>
                {
                    value=> {
                        return(
                            <input value={value.mail}/>
                        )
                        
                    }
                }            
            </Consumer>
        )
    }
}



export default App;
