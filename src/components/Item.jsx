import { div } from "prelude-ls";
import React from "react";


function Item (props) {
    return ( 
        <div><li>{props.text}</li></div>
    );
}

export default Item;