import React from 'react';
import './App.css';
import Inputitem from './Inputitem';
import TODO_ITEM from './TODO_ITEM';

export default function Design() {
  return (
    <div className='container'>
      <div className='app-container'>
        <div className='head-container'>
          <h1>Todo App</h1>
          <Inputitem />
        </div>
        <div className='body-container'>
          <TODO_ITEM />
        </div>
      </div>
    </div>
  );
}
