import React, { useState } from 'react'
import {BsTrash3} from "react-icons/bs"

export default function TodoItems(props) {
    const [done, setDone] = useState(false);

  return (
    <div onClick={() => setDone(!done)} className={`select-none cursor-pointer p-4 flex justify-between items-center`}>
        <div>
            <span className={`${done === true ? 'line-through' : ''} text-[18px] pr-3 font-roboto font-semibold text-[#404040]`}>
            {props.item}
            </span>
            <span className='font-roboto text-[13px] font-normal text-slate-400'>
                {props.time}
            </span>
             
        </div>
        <div className='duration-500 hover:text-red-600' onClick={() => props.removeHandler(props.id)}>   
            <BsTrash3/>
        </div>
    </div>
  )
}
