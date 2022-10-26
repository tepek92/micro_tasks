import React, {useState} from "react";

export const UseState = () => {
    let [a, setA] = useState(1);
    const onClickHandler = () => setA(++a);
    const restart = () => setA(0);
    return (
        <div>
            <div>{a}</div>
            <button onClick={onClickHandler}>number</button>
            <button onClick={restart}>0</button>
        </div>
    );
}