import React, { Component } from "react";
import "./style/Todo.css";
class Todo extends Component {
  constructor() {
    super();
    this.state = { finish: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
  }
  handleDelete() {
    this.props.delete(this.props.todo.id);
  }
  handleFinished() {
    this.setState({ finish: !this.state.finish });
  }
  render() {
    return (
      <li onClick={this.handleFinished} className={this.state.finish ? "selected" : ""}>
        <span onClick={this.handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </span>
        {this.props.todo.task}
      </li>
    );
  }
}

export default Todo;
