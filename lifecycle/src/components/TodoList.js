import React from "react";
import ToDoItem from "./TodoItem";

class ToDoList extends React.Component {
  render() {
    let list = this.props.toDoList.map((toDoItem, i) => {
      return (
        <ToDoItem
          key={i}
          id={i}
          input={toDoItem}
          handleClick={this.props.handleClick}
        />
      );
    });
    return (
      <div className={"toDoList"}>
        <h1>My To Do List</h1>
        <div>{list}</div>
      </div>
    );
  }
}

export default ToDoList;
