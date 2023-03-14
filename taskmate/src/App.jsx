import "./App.css";
import Drawer from "./components/SideMenu";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TodoForm";
import Task from "./components/Todo";
import { useEffect, useState } from "react";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter((t) => t.done).length;

  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do at least one!😠";
    }
    if (percentage === 100) {
      return "Nice job for today!🙌🏻";
    }
    return "Keep going🥹";
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 overflow-x-hidden">
      <Navbar />
      <div className="flex h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <Drawer />

        <div className="my-20 sm:mt-10 mx-auto space-y-3 bg-white shadow-2xl rounded-xl">
          
          <TaskForm onAdd={addTask} />
          {tasks.map((task, index) => (
            <Task
              {...task}
              onRename={(newName) => renameTask(index, newName)}
              onTrash={() => removeTask(index)}
              onToggle={(done) => updateTaskDone(index, done)}
            />
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;


