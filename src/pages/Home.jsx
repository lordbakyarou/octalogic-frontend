import React, { useEffect, useState } from "react";
import CourseTable from "@/components/CourseTable";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  console.log(token);

  useEffect(() => {
    if (!token) navigate("/");
  }, [token]);

  return (
    <div className="flex flex-col gap-10 h-fit bg-gray-100">
      <h1 className="course text-4xl font-semibold text-gray-500">Overview</h1>
      <div className="flex justify-between">
        <h3 className="uppercase font-semibold text-2xl text-gray-400">
          Course List
        </h3>
        <h3
          className="text-purple-500 font-semibold hover:text-purple-900 cursor-pointer"
          onClick={() => navigate("/course")}
        >
          View All Courses
        </h3>
      </div>
      <div className="bg-white rounded ">
        <CourseTable filterData={5} name={"overview"} />
      </div>
    </div>
  );
};

export default Home;
