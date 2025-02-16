import React, { useEffect, useState } from 'react';
import { Badge, Calendar } from 'antd';
import TodoContainer from './TodoContainer';
import * as todos from '../apis/todos';
import './css/CalendarContainer.css';
import dayjs from 'dayjs'

const CalendarContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const getData = async () => {
    const response = await todos.list();
    const data = await response.data;
    setTodoList(data);
    console.log("투두리스트 데이터 : " + data.length);
  }
  
  const getDataByDate = (date) => {
    const dateString = date.format('YYYY-MM-DD')
  
    return todoList.filter(todo => {
      const todoDateString = todo.todoDate.split('T')[0]
      return todoDateString === dateString
    })
  }

  const onSelect = (date) => {
    setSelectedDate(date);
  }
  

  const cellRender = (date) => {
    const listData = getDataByDate(date);
    
    return (
      <div>
        {listData.map((item) => (
          <div key={item.id} className="todo-item">
            <Badge status={item.status ? "success" : "warning"} />
            <span className="todo-text">{item.name}</span>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
  }, [todoList]);
  
  return (
    <div className="content" style={{ display: "flex", justifyContent: "space-around" }}>
      <Calendar cellRender={cellRender} onSelect={onSelect} value={selectedDate}/>
      <TodoContainer getData={getData} todoList={getDataByDate(selectedDate)} selectedDate={selectedDate}/>
    </div>
  );
};

export default CalendarContainer;
