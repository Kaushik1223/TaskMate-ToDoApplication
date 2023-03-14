import { useState } from "react";
import {IoIosAdd} from "react-icons/io";

export default function TaskForm({ onAdd }) {
  
  const [taskName, setTaskName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="mr-3 mt-2 container flex justify-center items-center">
        <div className="relative">
          <div className="absolute top-4 left-3"></div>
          <input
            type="text"
            className="mx-0 h-14 w-60 sm:w-full pl-10 pr-20 bg-white border-slate-300 border-2 rounded-2xl z-0 focus:shadow focus:outline-none"
            placeholder="Add task"
            value={taskName}
            onChange={(ev) => setTaskName(ev.target.value)}
          />
          <div className="absolute top-2 right-2 mr-1">
            <button className="cursor-pointer w-[40px] h-[40px] bg-purple-300 hover:bg-pink-300 duration-500 text-white text-3xl rounded-[50%] flex justify-center items-center">
              <IoIosAdd className='flex justify-center items-center'/>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
