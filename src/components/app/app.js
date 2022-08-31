import {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const Modal = (props) => {
    return (
        <CSSTransition 
        in={props.showModal} 
        timeout={300}         
        classNames="my-node">
            <div className="my-node">
                <button 
                    onClick={() => props.onClose(false)}>
                        exit
                </button>
            </div>
        </CSSTransition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);    
    return (
        <>
            <Modal onClose={setShowModal} showModal = {showModal}/>
            <button 
                onClick={() => setShowModal(true)}>
                    Open Modal
            </button>
        </>
    );
}

export default App;
