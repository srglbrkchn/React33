import React, {useState} from "react";
import Btn from "./Btn";

function InputArea(props) {

    const [inputText,
        setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText}/>
            <Btn addItem={props.addItem} text={inputText} setInputText={setInputText}/>
        </div>
    );
}

export default InputArea;