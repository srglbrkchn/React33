import {div} from "prelude-ls";
import React, {useState} from "react";

function Item(props) {

    return (
        <div onClick={() => {
            props.deleteItem(props.id);
        }}>
            <li>{props.text}</li>
        </div>
    );
}

export default Item;