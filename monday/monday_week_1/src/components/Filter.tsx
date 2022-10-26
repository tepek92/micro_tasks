import React, {useState} from "react";
import {MyButton} from "./MyButton";

type FilterType = 'full' | 'Dollars' | 'RUBLS';

type FilterPropsType = {
    currentMoney: {banknots: string; value: number; number: string;}[],
    filterMoney: (banknote: FilterType) => void;
}

export const Filter = (props: FilterPropsType) => {
    //  Мой вариант
    // const money = [
    //     {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
    //     {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
    //     {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
    //     {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
    //     {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
    //     {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
    //     {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
    //     {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    // ];
    // let [currentMoney, setCurrentMoney] = useState(money);
    //
    // const filterMoney = (banknote: string) => {
    //     if (banknote === "full") setCurrentMoney(money);
    //     else setCurrentMoney(money.filter(m => m.banknote === banknote));
    //     console.log(currentMoney);
    // }

    // Вариант с урока


    return (
        <>
            <div style={{marginLeft: '50px', marginTop: '20px'}}>
            <MyButton name={"dollar"} callBack={() => props.filterMoney("Dollars")} />
            <MyButton name={"ruble"} callBack={() => props.filterMoney("RUBLS")} />
            <MyButton name={"full"} callBack={() => props.filterMoney("full")} />
            </div>
            <ul>
                {props.currentMoney.map((m, i) => {
                    return(
                        <li key={i}>
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}