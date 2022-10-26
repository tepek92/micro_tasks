import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    );

    // 1 часть
    // const addNewMessage = (title: string) => {
    //     setMessage([{message: title}, ...message])
    // }

    //  2 часть
    let [title, setTitle] = useState('');

    const addNewMessage = () => {
        setMessage([{message: title}, ...message]);
        setTitle('');
    }

    return (
        <div className="App">
            {/*1 часть*/}
            {/*<FullInput addNewMessage={addNewMessage}/>*/}

            {/*2 часть*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} addNewMessage={addNewMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
