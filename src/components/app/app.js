import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};

// Функция, которая:
// 1. Имеет два аргумента (компонент, и доп. фунции)
// 2. Содержит два возврата. Первый - логику компонента.
// Второй - аргумент, который содержит компонент. Обязательно в этот
// аргумент помещаем proops
// Т.о. эта функция становится универсальной оберткой,
// принимающей логику компонента.
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
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide} <br/>{props.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.setAutoplay(autoplay => !props.autoplay)}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}
        //    Компоненты кладем в синтаксисе не как компоненты, а как фукнцию, вторую фукнцию не раскрываем
const WithSliderFirst = withAllSlider(SliderFirst, getDataFromFirstFetch);
const WithSliderSecond = withAllSlider(SliderSecond, getDataFromSecondFetch);

function App() {
    return (
        <>
        {/* Закидываем переменные, который будут содержать измененный компонент */}
            <WithSliderFirst/>
            <WithSliderSecond/>
        </>
    );
}

export default App;
