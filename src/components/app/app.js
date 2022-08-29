import {useState, useEffect} from 'react';
import './App.css';


const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};


const withAllSlider = (Component, pullFunction) => {
    return(props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false)
    
        useEffect(() => {
            setSlide(pullFunction);
        }, [])
    
        function changeSlide(i) {
            setSlide(slide => slide + i);
        }
        return(
            <Component
            {...props}  
            slide= {slide} 
            setSlide={setSlide}
            autoplay={autoplay}
            setAutoplay = {setAutoplay}
            changeSlide = {changeSlide}
            />
        )
    }
}

// Логику компонента закидываем через props
const SliderFirst = (props) => {
    return (
        <div>
            <div>
                Active slide {props.slide}
            </div>
            <div>
                <button                        
                    onClick={() => props.changeSlide(-1)}>
                        -1
                </button>
                <button 
                    onClick={() => props.changeSlide(1)}>
                        +1
                </button>
            </div>
        </div>
    )
}

const SliderSecond = (props) => {
    return (
        <div>
            <div>
                Active slide {props.slide} 
                <br/>{props.autoplay ? 'auto' : null
            }</div>
            <div>
                <button 
                    onClick={
                        () => props.changeSlide(-1)}>-1
                </button>
                <button 
                onClick={
                    () => props.changeSlide(1)}>+1
                </button>
                <button 
                    onClick={
                        () => props.setAutoplay(autoplay => !props.autoplay)}>
                    toggle autoplay
                </button>
            </div>
        </div>
    )
}


//Компоненты кладем в синтаксисе не как компоненты, а как фукнцию, вторую фукнцию не раскрываем
const NewSliderFirst = withAllSlider(SliderFirst, getDataFromFirstFetch);
const NewSliderSecond = withAllSlider(SliderSecond, getDataFromSecondFetch);


function App() {
    return (
        <>
        {/* Закидываем переменные, который будут содержать измененный компонент */}
            <NewSliderFirst/>
            <NewSliderSecond/>
        </>
    );
}

export default App;
