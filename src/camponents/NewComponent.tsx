import React from 'react';
import {FilterMoneyType} from "./Money";

type NewComponentPropsType = {
    money: Array<MoneyPropsType>
    currentMoney:Array<MoneyPropsType>
    onClickFilterHandler: (name: FilterMoneyType) => void
}

type MoneyPropsType = {
    banknots: string
    value: number
    number: string
}



const NewComponent = (props:NewComponentPropsType) => {
    return (
        <>
            <ul>
                {
                    props.currentMoney.map((objForMoneyArr: MoneyPropsType, index:number) => {
                        return (
                            <li key={index}>
                                <span>{objForMoneyArr.banknots}</span>
                                <span>{objForMoneyArr.value}</span>
                                <span>{objForMoneyArr.number}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div style={{marginLeft: '30px'}}>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('RUBLE')}>RUBLE</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
};

export default NewComponent;