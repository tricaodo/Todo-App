import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./style/TodoList.css";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { task: "Buy New Wand", id: "abc" },
        { task: "Send Owl to Sirius", id: "bcd" }
      ]
    };
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }
  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  delete(id) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo todo={todo} key={todo.id} delete={this.delete} />
    ));
    return (
      <div className="TodoList">
        <TodoForm addTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
