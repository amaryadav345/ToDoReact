import "./App.css";
import React, { useState } from "react";
import TaskItem from "./TaskItem";
const App = () => {
  const [items, setitems] = useState("");
  const [itemList, setItemList] = useState([]);
  const addItems = (e) => {
    setitems(e.target.value);
  };
  const listOfItems = () => {
    setItemList((oldItems) => {
      return [...oldItems, items];
    });
    setitems("");
  };

  const deleteItems = (id) => {
    setItemList((oldItems) => {
      return oldItems.filter((arrayItems, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_container">
      <div className="inner_card">
        <h1>To do list </h1>
        <br />
        <input
          className="input_field"
          type="text"
          value={items}
          placeholder="Add a Task"
          onChange={addItems}
        />
        <button className="addButton" onClick={listOfItems}>
          +
        </button>
        <ol>
          {itemList.map((itemVal, index) => {
            return (
              <TaskItem
                listVal={itemVal}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default App;
