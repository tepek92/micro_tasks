import React from 'react'
import style from './NewComponent.module.css'

type StudentsArrayType = {
    id: number,
    name: string,
    age: number
}

type TopCarsArrayType = {
    manufacturer: string
    model: string
}

type NewComponentPropsType = {
    students: Array<StudentsArrayType>,
    topCars: TopCarsArrayType[]
}

export const NewComponent = (props: NewComponentPropsType) => {
    let infoStudents = props.students.map(s => (<li key={s.id}> Name {s.name}, age {s.age}</li>));

    let tableCars = props.topCars.map((car, index) =>
        (<tr key={index}>
            <td className={style.table}>{index + 1}</td>
            <td className={style.table}>{car.manufacturer}</td>
            <td className={style.table}>{car.model}</td>
        </tr>));

    return (
        <div>
            <ul>
                {infoStudents}
            </ul>
            <table className={style.table}>
                <tr>
                    <th className={style.table}>Number</th>
                    <th className={style.table}>Manufacturer</th>
                    <th className={style.table}>Model</th>
                </tr>
                {tableCars}
            </table>
        </div>

    );
}