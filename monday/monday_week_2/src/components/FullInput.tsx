import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addNewMessage: (title: string) => void
}

export function FullInput(props: FullInputPropsType) {
    let [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = (event: React.MouseEvent) => {
        props.addNewMessage(title);
        setTitle('')
    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
}