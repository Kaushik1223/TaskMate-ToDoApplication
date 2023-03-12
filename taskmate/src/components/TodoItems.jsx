import React, { useState } from 'react'
import {BsTrash3} from "react-icons/bs"

export default function TodoItems(props) {
    const [done, setDone] = useState(false);

  return (
    <div onClick={() => setDone(!done)} className={`select-none cursor-pointer p-4 flex justify-between items-center`}>
        <div>
            <span className={`${done === true ? 'line-through' : ''} text-[20px] pr-3 font-roboto text-black`}>
            {props.item}
            </span>
            <span className='font-roboto text-[13px] text-slate-500'>
                {props.time}
            </span>
             
        </div>
        <div onClick={() => props.removeHandler(props.id)}>   
            <BsTrash3/>
        </div>
    </div>
  )
}
