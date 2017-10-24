import React from 'react'

const Todo = ({ todo, onClick }) => (
  <div
    onClick={onClick}
    key={todo.id}
    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
    {todo.text}
  </div>
)

export default Todo
