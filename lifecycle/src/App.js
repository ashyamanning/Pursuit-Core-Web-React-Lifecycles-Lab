import React from "react";
import Form from "./components/Form";
import ToDoList from "./components/TodoList";
// import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  state = { toDoInput: "", toDoList: [] };

  handleClick = e => {
    e.preventDefault();

    let x = e.target.id;
    this.setState(prevState => {
      prevState.toDoList.splice(x, 1);
      return {
        toDoList: prevState.toDoList
      };
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        toDoList: [...prevState.toDoList, this.state.toDoInput]
      };
    });
    e.currentTarget.elements[0].value = "";
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {}
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
      </div>
    );
  }
}

export default App;
