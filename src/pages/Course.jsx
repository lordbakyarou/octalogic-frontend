import React, { useEffect, useState } from "react";
import CourseTable from "@/components/CourseTable";
import { Input } from "@/components/ui/input";

import { IoMdSearch } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [search, setSearch] = useState("");
  const token = useSelector((state) => state.token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
  }, [token]);

  return (
    <div className="flex flex-col gap-10 h-fit bg-gray-100">
      <h1 className="course text-4xl font-semibold text-gray-500">Courses</h1>
      <div className="course-list"></div>
      <div className="flex justify-between">
        <h3 className="uppercase font-semibold text-2xl text-gray-400">
          Course list
        </h3>
        <div className="relative ">
          <IoMdSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 font-semibold text-gray-400" />
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full bg-white"
          />
        </div>
      </div>
      <div className="bg-white rounded relative">
        <CourseTable search={search} filterData={10} />
      </div>
    </div>
  );
};

export default Course;
