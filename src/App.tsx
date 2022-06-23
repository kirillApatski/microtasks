import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import {Car} from "./Car";


function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <div className="App">
            <Header title={"New Header"}/>
            <Body titleForBody={"Now Body"}/>
            <Footer titleForFooter={"Now Footer"}/>
            <Car topCars={topCars}/>
        </div>
    );
}

export default App;
