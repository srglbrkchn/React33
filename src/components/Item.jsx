import {div} from "prelude-ls";
import React, {useState} from "react";

function Item(props) {

    const [done,
        setDone] = useState(false);

    function handleClick() {
        setDone((preValue) => {
            return !preValue;
        })
    }

    return (
        <div onClick={handleClick} style={{textDecoration: done && "line-through"}}>
            <li>{props.text}</li>
        </div>
    );
}

export default Item;