import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import googleAuth from "../assets/google.png";
import { BsArrowClockwise } from "react-icons/bs";
import { FaEye, FaEyeSlash, FaFacebookSquare } from "react-icons/fa";
import loginImage from "../assets/login-image.jpg";

import { FaRegUser } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addToken } from "@/redux/features/user/userTokenSlice";

const URL = import.meta.env.VITE_API_URL;

const LoginPage = () => {
  const [loginInUser, setLoginUser] = useState({ loginId: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userCreationError, setUserCreationError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function setUserProperties(e) {
    setLoginUser({ ...loginInUser, [e.target.name]: e.target.value });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function loginUser(e) {
    e.preventDefault();
    setUserCreationError(null);
    setIsLoading(true);
    try {
      const loggedInUser = await axios.post(
        `https://octalogic-backend.vercel.app/auth/login`,
        {
          loginId: loginInUser.loginId,
          password: loginInUser.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );

      console.log(loggedInUser.data);

      dispatch(addToken({ token: loggedInUser.data }));
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setUserCreationError(error.response?.data);
      setIsLoading(false);
      console.log(error);
    }
  }

  async function recruiterLogin() {
    setIsLoading(true);
    try {
      const loggedInUser = await axios.post(
        `https://octalogic-backend.vercel.app/auth/login`,
        {
          loginId: "mayur1710hanwate@gmail.com",
          password: "Mayur@123",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );
      dispatch(addToken({ token: loggedInUser.data }));
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setUserCreationError(error.response?.data);
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="flex justify-evenly gap-10 px-10 max-md:flex-col-reverse">
      <div className="flex flex-col gap-2 justify-center max-md:items-center">
        <div>
          {/* Hello Text */}
          <div className="flex gap-4 flex-col mb-5">
            <h1 className="font-bold text-2xl">Welcome Back 🌟</h1>
            <p className="w-64 text-sm">
              {" "}
              We've missed your smile – let's make today amazing together!
            </p>
          </div>

          <div className="flex flex-col gap-2.5 relative max-md:items-center">
            {/* Login Form */}
            <form onSubmit={loginUser} className="flex flex-col gap-4 ">
              <div className="input-username w-80">
                <input
                  type="text"
                  placeholder="Email or Username"
                  name="loginId"
                  className="peer bg-gray-50 w-full h-10 p-2 text-xs rounded border focus:outline-none focus:border-gray-400 placeholder-transparent"
                  onChange={(e) => setUserProperties(e)}
                />
                <label
                  className="absolute
                 transition-all
                  left-2.5 -top-0
                   text-gray-400 
                   text-[0.60rem] peer-placeholder-shown:text-xs
                    peer-placeholder-shown:top-3
                    pointer-events-none"
                >
                  Email or Username
                </label>
              </div>
              <div className="input-password relative w-80">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="peer  bg-gray-50 w-full h-10 p-2 text-xs rounded border focus:outline-none focus:border-gray-400 placeholder-transparent"
                  onChange={(e) => setUserProperties(e)}
                />
                <label
                  className="absolute
                 transition-all
                  left-2.5 -top-0.5
                   text-gray-400 
                   text-[0.60rem] peer-placeholder-shown:text-xs
                    peer-placeholder-shown:top-3
                    pointer-events-none"
                >
                  Password
                </label>

                {loginInUser.password && (
                  <div
                    className="absolute top-2.5 right-2 text-lg text-gray-800 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                )}
              </div>

              <div className="login-button">
                <button
                  className={`w-80 cursor-pointer  h-10 border rounded-lg
                     text-white font-semibold  flex justify-center items-center
                      ${
                        loginInUser.loginId.length >= 3 &&
                        loginInUser.password.length >= 8
                          ? "bg-gray-800"
                          : "bg-gray-600"
                      }
                     `}
                  type="submit"
                >
                  {isLoading ? (
                    <BsArrowClockwise className="animate-spin text-xl " />
                  ) : (
                    "Log in"
                  )}
                </button>
              </div>

              {userCreationError && (
                <div className="error">
                  <p className="flex justify-center items-center text-red-400">
                    {userCreationError}
                  </p>
                </div>
              )}
            </form>

            <div className="flex  items-center justify-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <p className="mx-4 text-gray-600 font-semibold text-gray-500">
                OR
              </p>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center items-center gap-2 rounded p-2 bg-light-blue ">
              <img src={googleAuth} width={20} />
              <span className="text-blue-900 font-semibold cursor-pointer">
                Sign in with google
              </span>
            </div>
            <div
              className="flex justify-center items-center gap-2 rounded p-2 bg-light-blue "
              onClick={recruiterLogin}
            >
              <FaRegUser />
              <span className="text-blue-900 font-semibold cursor-pointer">
                Quick Login for Recruiters
              </span>
            </div>
            <div className="flex items-center justify-center p-5 gap-1">
              <span>Don't have an account?</span>
              <span className="text-blue-400 font-semibold cursor-pointer">
                <NavLink to="/signup">Sign up</NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen p-5 flex jusity-start max-md:h-96 max-sm:h-64">
        <img
          src={loginImage}
          alt="home-page-photo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LoginPage;
