import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import AddCardForm from './Components/AddCardForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('globalState')) {
      this.setState({
        todos: [...JSON.parse(localStorage.getItem('globalState'))],
      });
    }
  }

  componentDidUpdate() {
    localStorage.clear();
    const { todos } = this.state;
    localStorage.setItem('globalState', JSON.stringify(todos));
  }

  handleNewTodo(todo) {
    const { todos } = this.state;
    this.setState({
      todos: [todo, ...todos],
    });
  }

  toggleComplete(id) {
    const { todos } = this.state;
    const toggledComplete = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    this.setState({ todos: [...toggledComplete] });
  }

  deleteTodo(id) {
    const { todos } = this.state;
    const removedDeletedTodo = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: [...removedDeletedTodo],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <main className="App">
        <h1 className="App__headline">The Greatest Todolist of All Time</h1>
        <AddCardForm handleNewTodo={this.handleNewTodo} />
        <TodoList
          todos={todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      </main>
    );
  }
}
