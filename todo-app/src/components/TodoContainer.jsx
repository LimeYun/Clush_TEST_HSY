import React, { useEffect, useState } from 'react';
import './css/TodoContainer.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoContainer = () => {
  
  return (
    <div className='container'>
      <TodoHeader />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoContainer
