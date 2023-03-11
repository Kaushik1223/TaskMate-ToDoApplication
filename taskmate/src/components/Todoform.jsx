import React from 'react'

export default function Todoform() {
  return (
    <form className='TodoForm'>
        <input type="text" className='Todo-input' placeholder='Add todo'/>
        <button type="submit" className='todo-btn'></button>
    </form>
  )
}
