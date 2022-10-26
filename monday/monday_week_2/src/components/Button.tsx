import React from 'react';

type ButtonPropsType = {
    name: string
    addNewMessage: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.addNewMessage}>{props.name}</button>
    );
}

