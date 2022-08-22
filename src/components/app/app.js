import {useState, memo, PureComponent, Component} from 'react';
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

class Form extends Component{
    shouldComponentUpdate(prevProps){
        if(this.props.mail.m === prevProps.mail.m) {
            return false
        } return true;
    }
    render(){
        console.log('render');
        return (
            <Container>
                <input value={this.props.mail.m}/>                           
            </Container>
        )
    }
}

const App = ()=> {
    const [data, setData] = useState({
        mail: {
            m: "second@example.com"},        
    });

    return (
        <>
            <Form mail={data.mail}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com"
                })}>
                Click me
            </button>
        </>
    );
}

export default App;
