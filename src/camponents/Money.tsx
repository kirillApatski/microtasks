import {useState} from "react";
import NewComponent from "./NewComponent";

export type FilterMoneyType = 'All' | 'Dollars' | 'RUBLE'

export const Money = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLE', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLE', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLE', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterMoneyType>('All')
    let currentMoney = money
    if(filter === 'Dollars'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if(filter === 'RUBLE'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLE')
    }
    const onClickFilterHandler = (nameButton:FilterMoneyType) => {
        setFilter(nameButton)
    }
    return (
        <>
            <NewComponent money={money} currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
            {/*<ul>*/}
            {/*    {*/}
            {/*        currentMoney.map((objForMoneyArr, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>*/}
            {/*                    <span>{objForMoneyArr.banknots}</span>*/}
            {/*                    <span>{objForMoneyArr.value}</span>*/}
            {/*                    <span>{objForMoneyArr.number}</span>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: '30px'}}>*/}
            {/*    <button onClick={()=>onClickFilterHandler('All')}>All</button>*/}
            {/*    <button onClick={()=>onClickFilterHandler('RUBLE')}>RUBLE</button>*/}
            {/*    <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>*/}
            {/*</div>*/}

        </>


    )
}