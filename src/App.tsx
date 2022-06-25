import React from 'react';
import './App.css';
import {Header} from "./camponents/Header";
import {Body} from "./camponents/Body";
import {Footer} from "./camponents/Footer";
import {Car} from "./camponents/Car";
import {Buttons} from "./camponents/Buttons";
import {Button} from "./camponents/Button";
import {TestHook} from "./camponents/TestHook";
import {Money} from "./camponents/Money";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }
    const Button3Foo = () => {
        console.log("im button");
    }
    return (
        <div className="App">
            <Header title={"New Header"}/>
            <Body titleForBody={"Now Body"}/>
            <Footer titleForFooter={"Now Footer"}/>
            <hr/>
            <Car topCars={topCars}/>
            <hr/>
            <Buttons/>
            <hr/>
            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("Im Ivan", 22, "live in Minsk")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Im Kirill")}/>
            <Button name={"MyYouTubeChanel-3 "} callBack={Button3Foo}/>
            <hr/>
            <TestHook/>
            <hr/>
            <Money/>
        </div>
    );
}

export default App;
