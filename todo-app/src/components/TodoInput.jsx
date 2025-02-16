  import React, { useEffect, useState } from 'react'
  import * as todos from '../apis/todos';
  import { v4 as UUID} from 'uuid'
  
  const TodoInput = ({selectedDate, getData}) => {
  // const TodoInput = () => {

    const [input, setInput] = useState('')

    const onSubmit = async (e) => {
      e.preventDefault()
      let name = input
      if (input == '') name = '내용없음'

      console.log("선택 날짜 : " + selectedDate.format('YYYY-MM-DD'))

      const data = {
        id: UUID(),
        name: name,
        status: false,
        todoDate: selectedDate.format('YYYY-MM-DD')
      }
      const response = await todos.insert(data)
      if (response.status == 200) {
        alert("추가되었습니다.")
        getData()
        setInput('')
      } else {
        alert("추가 실패")
      }
    }

    const onChange = (e) => {
      setInput(e.target.value)
    }


    return (
      <div>
          <form className='form' onSubmit={onSubmit}>
              <input type="text"
                  placeholder='할 일 입력' 
                  className='input'
                  value={input}
                  onChange={onChange}
                  />
              <button type='submit' className='btn'>
                  추가
              </button>
          </form>
      </div>
    )
  }

  export default TodoInput