import React, { useState } from 'react';
import TODO_ITEM from './TODO_ITEM';

function Inputtodo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleChange(event) {
    event.preventDefault();
    const inputVal = event.target.value;
    setTodo(inputVal);
  }

  function addTodo() {
    setTodoList((preVal) => [...preVal, todo]);
    setTodo('');
    todoList.map(CeatecCard);
  }
  function CeatecCard(contact) {
    return <TODO_ITEM newTodo={contact} />;
  }

  return (
    <div className='input-wrapper'>
      <input onChange={handleChange} value={todo} type='text' />
      <button onClick={addTodo}>add</button>
    </div>
  );
}
export default Inputtodo;
