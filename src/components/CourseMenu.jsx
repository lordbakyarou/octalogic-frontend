import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { editCourseStatus } from "@/redux/features/courses/courseSlice";
import {
  closeEditTask,
  openEditTask,
} from "@/redux/features/openEditTask/openEditTaskSlice";
import EditCourse from "./EditCourse";
import { MdOutlineCancel } from "react-icons/md";

const CourseMenu = ({ course }) => {
  const dispatch = useDispatch();

  const [openEditModel, setOpenEditModel] = useState(false);

  function courseStatusEdit(status) {
    console.log(course.id);
    dispatch(editCourseStatus({ id: course.id, status }));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BsThreeDotsVertical className="text-2xl text-gray-500 hover:text-black" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>My Course</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => setOpenEditModel(true)}
          className="cursor-pointer hover:bg-gray-200"
        >
          Edit Course
        </DropdownMenuItem>
        {course.status != "Active" && (
          <DropdownMenuItem
            onClick={() => courseStatusEdit("Active")}
            className="cursor-pointer hover:bg-gray-200"
          >
            Active Course
          </DropdownMenuItem>
        )}
        {course.status != "Close" && (
          <DropdownMenuItem
            onClick={() => courseStatusEdit("Close")}
            className="cursor-pointer hover:bg-gray-200"
          >
            Close Course
          </DropdownMenuItem>
        )}

        {course.status != "Archive" && (
          <DropdownMenuItem
            onClick={() => courseStatusEdit("Archive")}
            className="cursor-pointer hover:bg-gray-200"
          >
            Archive Course
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
      {openEditModel && (
        <div className="flex gap-10 flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4">
          <div className="flex justify-between  items-center">
            <h1 className="text-2xl font-semibold text-gray-500">
              Edit Course
            </h1>
            <h1
              className="text-xl text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => setOpenEditModel(false)}
            >
              <MdOutlineCancel />
            </h1>
          </div>
          <EditCourse course={course} setOpenEditModel={setOpenEditModel} />
        </div>
      )}
    </DropdownMenu>
  );
};

export default CourseMenu;
