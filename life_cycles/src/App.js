import React from 'react';
import Form from './components/Form';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  state = { toDoInput: "", 
            toDoListItems: []
          }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState) => {
      return {
        toDoListItems: [...prevState.toDoListItems, this.state.toDoInput]
      }
    })
  }
  
  handleChange = (e) => {
  
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
   
    
    console.log(this.state.toDoListItems)
    console.log(this.state.toDoInput)
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} 
        toDoInput={this.state.toDoInput}
        handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
