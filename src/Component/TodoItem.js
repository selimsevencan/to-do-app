import React, { Component } from 'react';

class TodoItem extends Component {

   
  render() {
    return (
      <li className="Todos">
       <strong>{this.props.todo.name}:</strong>   {this.props.todo.surname} 
      </li>
    );
  }
}


export default TodoItem;
