import React from "react";
import logo from "../assets/logo.png";

import { SiBookstack } from "react-icons/si";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToken } from "@/redux/features/user/userTokenSlice";

const SideNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(removeToken());
    navigate("/");
  }

  return (
    <div className="">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:text-gray-500 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={(e) => {
          e.stopPropagation();
          document
            .getElementById("logo-sidebar")
            .classList.toggle("-translate-x-full");
        }}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-15 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white"
        aria-label="Sidebar"
        onClick={(e) => {
          e.stopPropagation();
          document
            .getElementById("logo-sidebar")
            .classList.remove("-translate-x-full");
          // console.log(document.getElementById("logo-sidebar").classList);
        }}
      >
        <div className="h-full px-3 py-4 overflow-y-auto shadow-xl">
          <a
            href="/home"
            className="flex items-center ps-2.5 mb-5 justify-center"
          >
            <img src={logo} className="h-12 me-3 sm:h-16" alt="Logo" />
          </a>
          <ul className="space-y-2 font-medium mt-20">
            <li>
              <div
                onClick={() => navigate("/home")}
                className="flex items-center cursor-pointer p-2 text-gray-900 hover:text-black text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoHomeSharp className="text-3xl " />
                <span className="ms-3 text-xl">Home</span>
              </div>
            </li>
            <li>
              <div
                onClick={() => navigate("/course")}
                className="flex items-center p-2 cursor-pointer text-gray-900 hover:text-black text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SiBookstack className="text-3xl" />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl">
                  Courses
                </span>
              </div>
            </li>
            <hr />
            <li>
              <div
                onClick={logout}
                className="flex items-center p-2 cursor-pointer text-gray-900 hover:text-black text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoIosLogOut className="text-3xl" />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl">
                  Logout
                </span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideNavbar;
