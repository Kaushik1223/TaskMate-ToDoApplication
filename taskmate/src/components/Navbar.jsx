import React, { useRef } from 'react'
import {BsFillMoonStarsFill} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
return (
    <div className={darkMode ? "dark" : ""}>
    <nav className="w-full bg-white shadow dark:bg-black">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-3xl text-purple-600 font-bold font-roboto">TaskMate</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="font-roboto font-normal text-gray-700 hover:text-purple-600">
                                <a href="#">Todo</a>
                            </li>
                            <li className="font-roboto text-gray-700 hover:text-purple-600">
                                <a href="https://github.com/Kaushik1223">Projects</a>
                            </li>
                            <li className="font-roboto text-gray-700 hover:text-purple-600">
                                <a href="#">Team</a>
                            </li>
                            <button className="bg-white text-gray-700 duration-500 px-3 py-2 mx-0 hover:bg-pink-500 hover:text-white rounded-3xl"
                            >
                            <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}/>
                            </button>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
}