import React from "react";

function Btn(props) {
    return (
        <button onClick={()=> {
            props.addItem(props.text);
            props.setInputText("");
        }}>
            <span>Add</span>
        </button>
    );
}

export default Btn;