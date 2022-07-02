import {useState} from "react";
import {Input} from "./Input";
import {Button2} from "./Button2";

export const InputNew = () => {
    const [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ]);
    const [title, setTitle] = useState("");
    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }
    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }
    return (
        <div>
            <Input setTitle={setTitle} title={title}/>
            <Button2 name={'+'} callBack={onClickButtonHandler}/>
            <div>
                {message.map(((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                }))}
            </div>
        </div>
    )
}