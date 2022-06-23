import {useState} from "react";

export const TestHook = () => {
    let[a, setA] = useState(1);
    const onclickHandler = () => {
        setA(++a);
    }
    const onclickHandler2 = () => {
        setA(a = 0);
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>+</button>
            <button onClick={onclickHandler2}>0</button>
        </div>
    )
}
