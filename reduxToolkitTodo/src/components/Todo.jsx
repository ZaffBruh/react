import React from 'react'
import { useSelector, UseSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
    useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
     <div>
      Todos
     </div>
    </>
  )
}

export default Todo
