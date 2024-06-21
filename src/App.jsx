import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "./components/ui/button";
import SideNavbar from "./components/SideNavbar";

import { Routes, Route } from "react-router-dom";
import Course from "./pages/Course";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const LayoutWithNavBar = ({ children }) => {
  return (
    <div className="">
      <SideNavbar />
      {children}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/course"
          element={
            <LayoutWithNavBar>
              <div className="p-4 sm:ml-64 min-h-screen bg-gray-100">
                <Course />
              </div>
            </LayoutWithNavBar>
          }
        />
        <Route
          path="/home"
          element={
            <LayoutWithNavBar>
              <div className="p-4 sm:ml-64 min-h-screen h-fit bg-gray-100 ">
                <Home />
              </div>
            </LayoutWithNavBar>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
