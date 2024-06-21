import { editCourse } from "@/redux/features/courses/courseSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const EditCourse = ({ course, setOpenEditModel }) => {
  const [currentCourse, setCurrentCourse] = useState({ ...course });
  console.log(course);

  const dispatch = useDispatch();

  function editCourseInput(e) {
    setCurrentCourse({
      ...currentCourse,
      [e.target.name]: e.target.value,
    });
  }

  function changeCourse(e) {
    e.preventDefault();

    dispatch(editCourse({ id: course.id, course: { ...currentCourse } }));
    setOpenEditModel(false);
  }

  return (
    <form className="w-full relative max-w-md" onSubmit={changeCourse}>
      <div className="absolute -right-5 -top-5 cursor-pointer w-fit"></div>
      <div className="flex flex-col -mx-3  mb-6 gap-2">
        <div className="w-96 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Course Name"
            name="name"
            onChange={editCourseInput}
            value={currentCourse.name}
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Description
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Description..."
            name="description"
            onChange={editCourseInput}
            value={currentCourse.description}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Instructor
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Instructor"
            name="instructor"
            onChange={editCourseInput}
            value={currentCourse.instructor}

            // disabled={true}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Instrument
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Instrument"
            name="instrument"
            onChange={editCourseInput}
            value={currentCourse.instrument}

            // disabled={true}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Price
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="$100"
            name="price"
            onChange={editCourseInput}
            value={currentCourse.price}

            // disabled={true}
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Day of Week
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="dayOfWeek"
              onChange={editCourseInput}
              value={currentCourse.dayOfWeek}
            >
              <option value={"Sunday"}>Sunday</option>
              <option value={"Monday"}>Monday</option>
              <option value={"Tuesday"}>Tuesday</option>
              <option value={"Wednesday"}>Wednesday</option>
              <option value={"Thursday"}>Thursday</option>
              <option value={"Friday"}>Friday</option>
              <option value={"Saturday"}>Saturday</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Status
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="status"
              onChange={editCourseInput}
              value={currentCourse.status}
            >
              <option value="Active">Active</option>
              <option value="Close">Close</option>
              <option value="Archive">Archive</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 items-center w-full justify-center">
        <button
          type="submit"
          class="bg-blue-500 flex hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Task
        </button>
      </div>
    </form>
  );
};

export default EditCourse;
