import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [todoList,setTodoList]=useState([]);
    const handleTodo=()=>{
        setTodoList((prev)=>[...prev,'New Todo'])
    }
    const todoCount =useMemo(()=>{
      return todoList.length
    },[todoList])
  return (
    <div>
        <h1>React.useMemo</h1>
        <h2>My todos {todoCount}</h2>
        <div>
            {todoList.map((e,i)=><div id={`todo-${i}`} key={i}>{e}</div>)}
        </div>
        <button id='add-todo-btn' onClick={handleTodo}>Add Todo</button>
    </div>
  )
}

export default UseMemo