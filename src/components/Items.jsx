import React, {useState} from "react";
import Item from "./Item";
import InputArea from "./InputArea";

function Items(props) {

    const [items,
        setItems] = useState([]);

    function addItem(inputText) {
        setItems(prevItems => {
            return [
                ...prevItems,
                inputText
            ];
        });

    }

    function deleteItem(id) {
        setItems((preValue) => {
            return (preValue.filter((item, index) => {
                return id !== index;
            }));
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea addItem={addItem}/>
            <div>
                <ul>
                    {items.map((todoItem, index) => (<Item key={index} id={index} text={todoItem} deleteItem ={deleteItem}/>))}
                </ul>
            </div>
        </div>
    );

}

export default Items;