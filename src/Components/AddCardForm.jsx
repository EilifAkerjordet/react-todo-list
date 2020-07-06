import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from '../helper-functions/generate-uuid';
import './stylesheets/AddCardForm.css';

export default class AddCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isCompleted: false,
    };
    const { handleNewTodo } = this.props;
    this.handleNewTodo = handleNewTodo;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const inputVal = e.target.value;
    this.setState(prevState => ({ ...prevState, input: inputVal }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;
    if (input.trim()) {
      this.handleNewTodo({ ...this.state, id: uuidv4() });
      this.setState(prevState => ({ ...prevState, input: '' }));
    }
  }

  render() {
    const { input } = this.state;
    return (
      <form className="App__Todo-form" autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          className="Todo-form__input"
          placeholder="Add a new todo..."
          id="new-todo"
          name="new-todo"
          value={input}
          type="text"
          onChange={this.handleChange}
        />
        {/* eslint-disable-next-line */}
        <label className="Todo-form__label" htmlFor="new-todo"> Add a new todo...</label>
        <button className="Todo-form__btn" type="submit">Add todo</button>
      </form>
    );
  }
}

AddCardForm.propTypes = {
  handleNewTodo: PropTypes.func.isRequired,
};
