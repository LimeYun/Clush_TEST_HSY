import React from 'react';
import { Progress } from 'antd';

const TodoHeader = ({ selectedDate, todoList }) => {

  const completedTodos = todoList.filter(todo => todo.status).length;
  const totalTodos = todoList.length;
  const progressPercent = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  return (
    <div className="header" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 10px"}}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <h2>To do List</h2>
        <h2>{selectedDate.format('YYYY-MM-DD')}</h2>
      </div>

      <div style={{display: "flex", alignItems: "center", gap: "10px", width: "100%", marginBottom: "10px"}}>
        <Progress percent={progressPercent} style={{ flex: 1 }} />
        <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>
          {completedTodos}개 완료 / {totalTodos}개
        </p>
      </div>
    </div>
  );
};

export default TodoHeader;
