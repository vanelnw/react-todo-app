import React, { Component } from "react";
import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  handleSubmit = (title) => {
    const { length } = this.state.todos;
    const id = this.state.todos.length ? length + 1 : 1;
    const newTodo = {
      id: id,
      title: title,
      completed: false,
    };

    this.setState((prev) => ({
      ...prev,
      todos: [...prev.todos, newTodo],
    }));
  };
    
    handleDelete = id => {
         const todos = this.state.todos.filter((t) => t.id !== id);
         this.setState({ todos });
    }

    handleCheck = id => {
        this.setState(prev => ({
            ...prev,
            todos: prev.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
            })
        }))
    }

    render() {
        const items = this.state.todos;
    return (
      <div>
            <InputTodo onSubmit={this.handleSubmit} />
            <ListTodos todos={items} onCheck={this.handleCheck} onDelete={this.handleDelete} />
      </div>
    );
  }
}
