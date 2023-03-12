import React from 'react'
import TodoItems from './TodoItems'

export default function TodoBox(props) {
    const items = props.data.map(
        (singleData, index) => {
            return <TodoItems removeHandler={props.removeHandler}key={index} id={index} item={singleData.item} time={singleData.time}/>
        }
    )
  return (
    <div className='p-6'>
        {items}
    </div>
  )
}
