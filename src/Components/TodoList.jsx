import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './stylesheets/TodoList.css';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => (
  <section className="App__Todo-list">
    <h2 className="Todo-list__todo">Todo</h2>
    {
      todos.length === 0
        ? <p className="Todo-list__no-show">Nothing to show... Try adding a todo</p>
        : <h2 className="Todo-list__completed">Completed</h2>
    }

    {
      todos.filter(todo => todo.isCompleted).length === 0 && todos.length !== 0
        ? <p className="Todo-list__no-completed">No completed todos yet...</p>
        : <></>
    }

    {
      todos.filter(todo => !todo.isCompleted).length === 0 && todos.length !== 0
        ? <p className="Todo-list__all-completed">Yay! You completed all your todos!</p>
        : <></>
    }

    {
      todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))
    }
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
