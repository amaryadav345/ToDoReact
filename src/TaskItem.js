import React from "react";
import "./TaskItem.css";
const TaskItem = (props) => {
  //   const delClicked = () => {
  //     console.log("Delete clicked");
  //   };

  return (
    <div className="toDoStyle">
      <button
        className="deleteButton"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        x
      </button>
      <li>{props.listVal}</li>
    </div>
  );
};

export default TaskItem;
