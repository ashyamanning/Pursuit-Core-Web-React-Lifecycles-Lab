import React from "react";

const ToDoItem = ({ input, id, handleClick }) => {
  return (
    <div>
      <p>{input}</p>
      <button id={id} onClick={handleClick}>
        DONE?
      </button>
      <br></br>
    </div>
  );
};

export default ToDoItem;
