import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const Modal = (props) => {
    console.log(props.showModal);
    return (
        <CSSTransition 
        in={props.showModal} 
        timeout={300} 
        
        classNames="my-node">
            <div>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Typical modal window</h5>
                        <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body content</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
                        <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    
    return (
        <Container>
            <Modal onClose={setShowModal} showModal = {showModal}/>
            <button 
                type="button" 
                className="btn btn-warning mt-5"
                onClick={() => setShowModal(true)}>Open Modal</button>
        </Container>
    );
}

export default App;
