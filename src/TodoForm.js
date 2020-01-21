import React, { Component } from "react";
import "./style/TodoForm.css";
import uuid from "uuid/v4";
class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addTodo({...this.state, id: uuid()});
    this.setState({task: ""});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add New Todo"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default TodoForm;
