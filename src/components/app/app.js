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


                  //   1
const textContent = createContext(
                //   1.1
    {mail: "second@example.com"}
    )
            // 1.3
const {Provider, Consumer} = textContent; 
console.log(textContent);

const App = ()=> {
                // 2
    const [data, setData] = useState({
        mail: "second@example.com",        
    });

    return (
        // 3       3.1    3.2
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
    static contextType = textContent
    
    render(){
        console.log(textContent);
        return(
            <input value={this.context.mail}/>
        )
    }
}



export default App;
