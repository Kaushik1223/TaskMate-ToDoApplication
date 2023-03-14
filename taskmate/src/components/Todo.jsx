import Checkbox from "./Checkbox";
import { useState } from "react";

export default function Task({ name, done, onToggle, onTrash, onRename }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <div
      className={
        "bg-white rounded-lg p-1 md:p-3 mt-5 flex transition-opacity duration-300 w-30 sm:w-full" +
        (done ? "opacity-50" : "")
      }
    >
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
        <div
          className="task-name text-"
          onClick={() => setEditMode((prev) => !prev)}
        >
          <span>{name}</span>
        </div>
      )}

      {editMode && (
        <form
          className=" border-purple-300 rounded-lg flex"
          onSubmit={(ev) => {
            ev.preventDefault();
            setEditMode(false);
          }}
        >
          <input
            className=" bg-transparent border-2  border-purple-100 rounded-lg ml-2 text-black block w-full"
            type="text"
            value={name}
            onChange={(ev) => onRename(ev.target.value)}
          />
        </form>
      )}
      <button
        className="trash bg-transparent border-0 flex ml-auto justify-items-center items-center cursor-pointer  "
        onClick={onTrash}
      >
        <svg
          className=" text-purple-600 h-4 w-4 mr-2"
          fill="#F67280"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </div>
  );
}
