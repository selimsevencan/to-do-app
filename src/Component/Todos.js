import React, { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';

const names = [
  {
    name: 'selim',
    surname: 'sevencan',
  },
  {
    name: 'emilia',
    surname: 'clark',
  },
  {
    name: 'jennifer',
    surname: 'lawrance',
  },
];
class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: names,
    };
  }

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => (
        <TodoItem key={todo.name} todo={todo} />
            ));
    }
    return (
      <div className="Todos">
        <h3>Todo Lists</h3>
        {todoItems}
        <br />
      </div>
    );
  }
}
Todos.PropTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
