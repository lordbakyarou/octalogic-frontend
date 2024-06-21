import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";

import EditCourse from "./CourseMenu";
import EditTask from "./EditCourse";
import { MdOutlineCancel } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

import { closeEditTask } from "@/redux/features/openEditTask/openEditTaskSlice";
import CourseMenu from "./CourseMenu";

const CourseTable = ({ search = "", filterData, name = "" }) => {
  const courseDetails = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const [filteredCourseDetails, setFilteredCourseDetails] = useState([
    ...courseDetails,
  ]);

  useEffect(() => {
    setFilteredCourseDetails(
      courseDetails.filter((course) => {
        for (let key in course) {
          if (course[key].toString().toLowerCase().includes(search))
            return course;
        }
      })
    );
  }, [search, courseDetails]);

  return (
    <Table>
      <TableCaption>A list of your courses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Instructor</TableHead>
          <TableHead>Instrument</TableHead>
          <TableHead>Day of Week</TableHead>
          <TableHead># of students</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          {name !== "overview" && <TableHead>Actions</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredCourseDetails.slice(0, filterData).map((course) => {
          let statusColor;
          if (course.status === "Active") statusColor = "bg-green-400";
          if (course.status === "Close") statusColor = "bg-red-400";
          if (course.status === "Archive") statusColor = "bg-gray-400";

          return (
            <TableRow key={course.id}>
              <TableCell className="">{course.name}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>{course.instructor}</TableCell>
              <TableCell>{course.instrument}</TableCell>
              <TableCell>{course.dayOfWeek}</TableCell>
              <TableCell>{course.noOfStudents}</TableCell>
              <TableCell>${course.price}</TableCell>
              <TableCell>
                {" "}
                <Button
                  className={`${statusColor} rounded font-normal`}
                  disabled
                >
                  {course.status}
                </Button>
              </TableCell>
              {name !== "overview" && (
                <TableCell>
                  {" "}
                  <CourseMenu course={course} />
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CourseTable;
