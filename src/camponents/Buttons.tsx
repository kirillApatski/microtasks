import React from "react";


export const Buttons = () => {

    const onClickHandler = (name: string) => {
        console.log(name);
    }

    return (
        <>
            <button onClick={(event) => onClickHandler("ivan")}>MyYouTubeChanel</button>
            <button onClick={(event) => onClickHandler("kirill")}>MyYouTubeChanel</button>
        </>
    )
}