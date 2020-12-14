import React from 'react';
import Inputtodo from './Inputitem';

export default function TODO_ITEM(props) {
  return (
    <div className='todo-container'>
      <p className='todo-items'>{props.newTodo}</p>
      <div className='btn'>
        <button>E</button>
        <button>D</button>
      </div>
    </div>
  );
}
