import React from "react";

const ListTodos = (props) => {
  const { todos, onCheck, onDelete } = props;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onCheck(todo.id)}
          />
          <p>{todo.title}</p>
          <button type="button" className="" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

ListTodos.propTypes = {};

export default ListTodos;
