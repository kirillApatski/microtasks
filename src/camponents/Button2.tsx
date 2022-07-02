import React from 'react';

type Button2PropsType = {
    name: string
    callBack: () => void
}

export const Button2 = (props: Button2PropsType) => {
    const onClickButton2Handler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButton2Handler}>{props.name}</button>
    );
};

