import React, { useRef, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import TodoBox from './components/TodoBox';

function App() {
  const [todos,setToDo] = useState([]);

  const removeToDo = (id) => {
      // console.log(id);
      const newTodos = todos.filter(
        (d,index) => {
          if(index !==id){
            return true;
          }
          else{
            return false;
          }
        }
      )
      setToDo(newTodos);
  }

  const addToDoHandler = (item) => {
    
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        }
      ]
    )

  }
    
  return (
    <div className="h-screen dark:bg-black bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <Navbar/>
      <div>
        <div className='mx-auto max-w-[720px] min-h-[550px] shadow-2xl bg-white rounded-2xl'>
            <Todo handler={addToDoHandler} />
            <TodoBox data={todos} removeHandler={removeToDo} />
        </div>
      </div>
    </div>
  );
}

export default App;

