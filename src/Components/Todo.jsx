import React from 'react';
import PropTypes from 'prop-types';
import './stylesheets/Todo.css';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const handleClick = e => {
    e.preventDefault();
    toggleComplete(todo.id);
  };
  const handleDelete = e => {
    e.preventDefault();
    e.stopPropagation();
    deleteTodo(todo.id);
  };
  const handleKeyDown = e => {
    e.preventDefault();
  };
  return (
    <>
      {
        todo.isCompleted
          ? (
            <div
              role="button"
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              className="Todo-list__item completed"
              tabIndex={0}
              style={{ background: 'rgba(94, 94, 94, 0.2)', color: 'lightgrey' }}
            >
              <h3 style={{ textDecoration: 'line-through' }}>{todo.input}</h3>
              <button className="item__delete-btn" type="button" onClick={handleDelete}>
                <span role="img" aria-label="X-emoji">❌</span>
              </button>
            </div>
          )
          : (
            <div
              role="button"
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              className="Todo-list__item"
              tabIndex={0}
            >
              <h3>{todo.input}</h3>
            </div>
          )
        }
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
