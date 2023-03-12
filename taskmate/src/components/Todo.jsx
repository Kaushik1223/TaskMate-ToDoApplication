import React, { useRef } from 'react'
import {IoMdAdd} from "react-icons/io"

export default function Todo(props) {
    const inputBox = useRef();
    
  return (
    <div className='p-5 mt-10 flex justify-around'>
      <input type="text" placeholder='Add todo' className='p-3 focus:outline-none w-[90%] border border-slate-400 rounded-xl' ref={inputBox}/>
      <div className='cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center' onClick={() => {
            props.handler(inputBox.current.value)
            inputBox.current.value = "";
        } }>
          <IoMdAdd/>
        </div>
    </div>
  )
}
