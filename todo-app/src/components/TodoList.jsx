import React, { useEffect, useState } from 'react'
import * as todos from '../apis/todos';
import TodoInput from './TodoInput';

const TodoList = ({selectedDate, todoList, getData}) => {
  // const [todoList, setTodoList] = useState([])

  useEffect(() => {
    getData()
  }, []);

  const update = async (todo) => {
    const name = prompt("수정할 내용을 입력하세요", todo.name)

    const data = {
      id: todo.id,
      name: name,
      status: todo.status
    }

    if (name) {
      const response = await todos.update(data)
      if (response.status == 200) {
        alert("수정되었습니다.")
        getData()
      } else {
        alert("수정 실패")
      }
    }
  }

  const toggleStatus = async (todo) => {
    const updateStatus = {
      id: todo.id,
      name: todo.name,
      status: !todo.status
    }

    const response = await todos.update(updateStatus);
    if (response.status === 200) {
      getData()
    } else {
      alert("상태 변경 실패")
    }
  }

  const remove = async (id) => {
    const response = await todos.remove(id)
    if (response.status == 200) {
      alert("삭제되었습니다.")
      getData()
    } else {
      alert("삭제 실패")
    }
  }

  return (
    <div className="todoList">
        <TodoInput selectedDate={selectedDate} getData={getData}/>
      <ul style={{marginTop: '20px'}}>
        {
          todoList.map((todo) => {
            return (
              <li key={todo.id} style={{
                backgroundColor: todo.status ? "lightskyblue" : "white", 
                color: todo.status ? "#4caf50" : "black", 
              }}>
                <div className="item">
                  <input type="checkbox" id={todo.id} checked={todo.status} onChange={() => toggleStatus(todo)}/>
                  <span>{todo.name}</span>
                  <div className="btn-container">
                    <button className="btn update" onClick={() => update(todo)}>수정</button>
                    <button className="btn delete" onClick={() => remove(todo.id)}>삭제</button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoList
