// import React from "react";
import Form from "./components/Form";
import ToDoList from "./components/TodoList";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  state = { toDoInput: "", toDoList: [], action: "" };

  handleClick = e => {
    e.preventDefault();

    let x = e.target.id;
    this.setState(prevState => {
      let deletedItem = prevState.toDoList.splice(x, 1);
      this.notify("Todo deleted: " + deletedItem)
      return {
        toDoList: prevState.toDoList
      };
    });
  };
  notify = (task) => toast(task);
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        toDoList: [...prevState.toDoList, this.state.toDoInput]
      };
    });
    this.notify("New todo created: " + this.state.toDoInput)
    e.currentTarget.elements[0].value = "";
    // this.setState({action: "New todo created"})
  };
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
  }
  render() {
    console.log(this.state.toDoList);
    console.log(this.state.toDoInput);
    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          toDoInput={this.state.toDoInput}
          handleChange={this.handleChange}
        />
        <div>
          <ToDoList
            toDoList={this.state.toDoList}
            handleClick={this.handleClick}
          />
        </div>
        <div>
        <ToastContainer />
        {this.notify}
        </div>
      </div>
    );
  }
}

export default App;
