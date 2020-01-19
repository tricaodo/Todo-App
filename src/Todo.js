import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
      this.props.delete(this.props.todo.id);
  }
  render() {
    return (
      <li>
        <span onClick={this.handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </span>
        {this.props.todo.task}
      </li>
    );
  }
}

export default Todo;
