import React, { useEffect, useState } from 'react';
import './css/TodoContainer.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoContainer = ({todoList, getData, selectedDate}) => {
  
  return (
    <div className='container'>
      <TodoHeader selectedDate={selectedDate} todoList={todoList}/>
      <TodoList selectedDate={selectedDate} getData={getData} todoList={todoList}/>
    </div>
  );
}

export default TodoContainer
