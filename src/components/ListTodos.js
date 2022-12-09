import React from 'react';
import PropTypes from 'prop-types';

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
          <p className={todo.completed ? 'todoCompleted' : ''}>{todo.title}</p>
          <button type="button" className="" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

ListTodos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListTodos;
