import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {MyButton} from "./components/MyButton";
import {UseState} from "./components/UseState";
import {Filter} from "./components/Filter";

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ];

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ];
    //
    // const clickButton = (subscriber: string, age: number) => console.log("name: " + subscriber + ", age: " + age);
    // const stupidButton = () => console.log("Im stupid button:(");

 // Домащнее задание фильтр
    type FilterType = 'full' | 'Dollars' | 'RUBLS';

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    let [filter, setFilter] = useState<FilterType>("full");

    const filterMoney = (banknote: FilterType) => {
        setFilter(banknote);
    }
    let currentMoney = money;
    if (filter === 'full') {
        currentMoney = money;
    } else {
        currentMoney = money.filter(m => m.banknots === filter);
    }

  return (
    <div className="App">
      <NewComponent students={students} topCars={topCars}/>
      {/*  <MyButton name={"MyYouTubeChanel-1"} callBack={() => clickButton("PASHA", 29)}/>*/}
      {/*  <MyButton name={"MyYouTubeChanel-2"} callBack={() => clickButton("IVAN", 30)}/>*/}
      {/*  <MyButton name={"MyYouTubeChanel-3"} callBack={stupidButton}/>*/}
      {/*  <UseState />*/}
      {/*  <Filter currentMoney={currentMoney} filterMoney={filterMoney}/>*/}
    </div>
  );
}

export default App;

// выдать только рубли
// выдать только доллары
// выдать и то и другое