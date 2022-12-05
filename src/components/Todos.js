import React, { Component } from 'react';
import InputTodo from './InputTodo';
import ListTodos from './ListTodos';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  handleSubmit = (title) => {
    const { todos } = this.state;
    const { length } = todos;
    const id = todos.length ? length + 1 : 1;
    const newTodo = {
      id,
      title,
      completed: false,
    };

    this.setState((prev) => ({
      ...prev,
      todos: [...prev.todos, newTodo],
    }));
  };

  handleDelete = (id) => {
    const { todos } = this.state;
    const newtodos = todos.filter((t) => t.id !== id);
    this.setState({ newtodos });
  };

  handleCheck = (id) => {
    this.setState((prev) => ({
      ...prev,
      // eslint-disable-next-line array-callback-return
      todos: prev.todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.completed = !todo.completed;
        }
      }),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <InputTodo onSubmit={this.handleSubmit} />
        <ListTodos todos={todos} onCheck={this.handleCheck} onDelete={this.handleDelete} />
      </div>
    );
  }
}
