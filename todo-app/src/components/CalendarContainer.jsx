import React from 'react'
import { Calendar } from 'antd'
import TodoContainer from './TodoContainer'
import './css/CalendarContainer.css'

const CalendarContainer = () => {
  return (
    <div className='content' style={{display: "flex", justifyContent: "space-around"}}>
      <Calendar />
      <TodoContainer />
    </div>
  )
}

export default CalendarContainer