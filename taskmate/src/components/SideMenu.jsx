import { useState } from "react";
import React from "react";
import {BsFillCloudSunFill} from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { MdToday, MdNotificationImportant } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";


export default function Drawer() {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Today", icon: <MdToday /> },
    { title: "My Day", icon: <BsFillCloudSunFill /> },
    { title: "Important", icon: <MdNotificationImportant /> },
    { title: "Settings", spacing: true, icon: <AiFillSetting /> },
  ];
  return (
    <>
      <div className="flex pt-5 z-10">
        <div
          className={`bg-indigo-200 bg-opacity-25 backdrop-blur-md h-screen rounded-lg px-5 pt-10 ${
            open ? "w-45" : "w-20"
          }  duration-500 relative`}
        >
          <div className="inline-flex">
            <FaTasks
              className={`text-slate-500 text-3xl rounded cursor-pointer block float-left duration-300 
              `}
              onClick={() => setOpen(!open)}
            />
          </div>
    
          <ul className="pt-2 ">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-slate-500 text-xs flex items-center gap-x-4 cursor-pointer p-2 hover:bg-purple-200 hover:text-pink-500 rounded-md ${
                    menu.spacing ? "mt-20" : "mt-6"
                  }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <BsFillCloudSunFill />}
                  </span>
                  <span
                    className={`text-base font-medium text-slate-500 flex-1 duration-300 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
