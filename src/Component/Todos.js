import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todos extends Component {
 constructor() {
    super();
      todo:[
         {
          name: 'selim',
          surname: 'sevencan',
        },
        {
            name: 'emilia',
            surname: 'clark'
        },
        {
            name: 'jennifer',
            surname: 'lawrance'
        }
      ]
 }

  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todo => {
            return(
                <TodoItem  key={todo.name} todo={todo}/>
            );
        });
    }
    return (
      <div className="Todos">
          <h3>Todo Lists</h3>
       {todoItems}
        <br/>
      </div>
    );
  }
}

export default Todos;
