import React, { Component} from "react";

import "./app.css";
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import EmployersList from "../employers-list/employers-list"
import EmployersAddForm from "../employers-add-form/employers-add-form"

class App extends Component {
    
        state = {
                data: [
                    {name: "Oleg Golovkin", salary: "800", increase: false, stars: false, id: 1},
                    {name: "Vladimir Golovkin", salary: "900", increase: false, stars: false, id: 2},
                    {name: "Nadeshda Golovkina", salary: "1200", increase: false, stars: false, id: 3}
                ],
                term: "",
                filter: "allWroker",
        }
        id = 4
      
    
    // 1. Удаление объектов из состояния data.
    // Кидаем сначало в employers-list, в котором вытаскиваем id,
    // затем в employers-list-item, в нем
    // вызов метода в каждом эл. списка, 
    // где при клике на карзинку 
    onDelete=(id)=> {
        this.setState(({data}) => ({
            // 1.1. Создаем новое состояние data,
            // отфильтровав предыдущее, которое не содержит
            // id, которое получаем в событии клика                        
            data: data.filter(item=> item.id !== id)          
        }))            
    }

    // 2. Добавление новых сотрудников.
    // Кидаем напрямую в employers-add-form.
    // Все тело метода здесь. Там только вызываем с
    // аргументами e и newWorker - состояние в employers-add-form,
    // в которое записываются введенные в employers-add-form данные
    addWorker = (e, newWorker) => {
        e.preventDefault(); 
        // 2.2. Копируем состояние
        const copyState = this.state.data
        const worker = {
            name: newWorker.name,
            salary: newWorker.salary,
            increase: false,
            stars: false,
            // 2.2. Новый id
            id: ++this.id  
        }; 
        // 2.3. Добавляем в копию состояния новый объект
        copyState.push(worker);
        this.setState({
            data: copyState
        })
    }

    // // 3. Изменение только значений increase и stars объектов в состоянии data  
    // на true или false (цвет же меняется внутри employers-list-item, напрямую
    // обращаясь к data к этим свойствам и если true один цвет, а наоборот - другой )
    // Закидываем и получаем id также как в пункте 1 выше.
    // Один метод для increase и stars, поэтому добавили аргумент prop,
    // в который в employers-list-item записываем increase и stars
    toggleProp = (id, prop) => {
        this.setState(({data}) => ({
            // 3.1. Создаем новое состояние по аналогии с пунктом 1 выше
            data: data.map(item => {
                // 3.1. Если id на который кликаем совпадает с data, то
                // извлекаем increase или stars и меняем в них 
                // значение на противоположное
                if (item.id === id) {
                    // [prop] - это аргумент, в котором содержится 
                    // increase или stars, которое получаем в employers-list-item 
                    return {...item, [prop]: !item[prop]}                 
                }
                // 3.2. Возвращаем новое состояние
                return item          
            })       
        }))
    }

    // 4 Выведение общего колличества сотрудников,
    // у которых свойство stars не false
    sumPrize = (data) => {
    // Получаем копию состояния, в котором не содержатся
    // объекты со значением stars: true
        const all = data.filter(item=> {
            return item.stars === true
        })
        // Возвращаем общее число сотрудников
        return all.length
    }

    // 5. Поиск сотрудников
    searchEmp = (data, term) => {
        // Если ничего не введено в объект
        // term, то возвращаем пустой объект
        if (term.length === 0) {
            return data
        }
        // Возвращаем копию состояния 
        // с объектами, содержащими значения в
        // свойстве name == term
        // indexOf(term) возращает индекс найденной 
        // строки
        // если ничего не находит, то возвр. -1
        return data.filter(item=> {
            return item.name.indexOf(term) > -1
        })        
    }

    changeTerm = (term) => {
        this.setState({term:term})
    }

    // Фильтр сотрудников по премии.
    filterWroker = (data, filter) => {        
        if(filter === "increaseWroker"  ) {
            return data.filter(item=> {
                    return item.increase === true
                    })             
        }
        if(filter === "oneThousand") {            
            return data.filter(item=> {
                    return +item.salary > 1000
                    })
        }   
        return data      
    }

    addFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

    onChangeSalary = (id, salary) => {        
            const copyData = this.state.data.map(item=>{
                if(item.id === id) {
                    return {...item, salary: salary}
                } 
                    return item
                
            })
            this.setState({data:copyData})               
    }

    
    render(){
        const Oleg = (props) => {
            return(
                <h2> Общее число {props.counter}</h2>                
            )
        }
    
        class Wrapper extends Component {
            state = {
                counter: 0
            }
            plus = () => {
                this.setState({
                    counter: this.state.counter + 1
                })
            }
            render(){
                return (
                    <div>                        
                        <h2 onClick={this.plus}>Мама</h2>
                        {this.props.render(this.state.counter)}                      
                    </div>
                )   
            }            
        }
        

        
        const {data, term, filter} = this.state;
        // Происходит двойной фильтр. Первый аргумент в filterWroker,
        // это уже отфильтрованное состояние в функции searchEmp (первая
        // фильтрация). В filterWroker происходит вторая фильтрация 
        // В обоих фильтрах состояние не меняется, а создается его копия, которая
        // return возращается наружу к переменной visibleEmp !!
        // Это нужно для того, чтобы фильтры применялись к первоначальному
        // состоянию, а не к отфильтрованному. Состояние должно быть статичным,
        // чтобы каждый из фильтров не мешал остальным
        const visibleEmp = this.filterWroker(this.searchEmp(data, term), filter)

        return (            
            <div className="app">
                <AppInfo 
                // Возвращают числа. Вызов 
                // внизу не требуется. Т.е. вниз
                // передаем числа, а не методы
                // Поэтому сразу прописываем аргументы
                dataLength = {data.length}
                sumPrize = {this.sumPrize(data)}/>
                <div className="search-panel">
                    <SearchPanel
                    changeTerm = {this.changeTerm}
                    />
                    <AppFilter
                    filter = {filter}
                    addFilter = {this.addFilter}
                    />                        
                </div>
                <EmployersList 
                data = {visibleEmp}
                onDelete = {this.onDelete}
                toggleProp = {this.toggleProp}
                toggleStars = {this.toggleStars}
                onChangeSalary = {this.onChangeSalary}
                />       
                <EmployersAddForm 
                onAddWorker = {(e, newWorker) => {this.addWorker(e, newWorker)}}
                /> 
                <Wrapper render = {counter => (
                    <Oleg counter = {counter}/>
                )}/>
 
            </div>
        );
    }
}

export default App