import React from 'react'
import { useSelector, UseSelector } from 'react-redux'
import { UseDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
    useSelector(state => state.todos)
  return (
    <div>Todo</div>
  )
}

export default Todo
