import React, { useEffect, useState } from 'react'
import * as todos from '../apis/todos';

const TodoList = () => {
  const [todoList, setTodoList] = useState([])

  const getData = async () => {
    const response = await todos.list()
    const data = await response.data
    console.log(data)
    setTodoList(data)
  }

  useEffect(() => {
    getData()
  }, []);

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
      <ul>
        {
          todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <div className="item">
                  <input type="checkbox" id={todo.id} />
                  {/* <label htmlFor={todo.id}></label> */}
                  <span>{todo.name}</span>
                  <div className="btn-container">
                    <button className="btn update" onClick={() => update(todo.id)}>수정</button>
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
