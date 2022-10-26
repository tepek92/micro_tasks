import React from "react";

type MyButtonPropsType = {
    name: string,
    callBack: () => void
}
export const MyButton = (props: MyButtonPropsType) => {
    // const myFirstSubscriber = (event: MouseEventHandler<HTMLButtonElement>) => console.log("Hi, Im Vasya!");
    // const NameSubscriber = (name: string) => console.log(name);
    // const foo1 = () => console.log(100200);
    // const foo2 = (number: number) => console.log(number);
    // const foo = (number?: number) => console.log(number || 500);


    return(
        <>
            {/*Задание 1*/}
            {/*<button onClick={() => console.log("Hi man!")}>MyYouTubeChanel-0</button>*/}
            {/*<button onClick={() => NameSubscriber("VASYA")}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={() => NameSubscriber("IVAN")}>MyYouTubeChanel-2</button>*/}

            {/*<div>Задание 2</div>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(100500)}>2</button>*/}

            {/*<div>Задание 2 - улучшение</div>*/}
            {/*<button onClick={() => foo(1000)}>1000</button>*/}
            {/*<button onClick={() => foo()}>500</button>*/}
            
            {/*<div>Задание 4</div>*/}
            <button onClick={props.callBack}>{props.name}</button>
        </>
    );
}