import { createSlice, current } from "@reduxjs/toolkit";

import courseDetails from "@/constants/courseDetails";

const initialState = [...courseDetails];

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    editCourseStatus: (state, action) => {
      state.map((course) => {
        if (course.id == action.payload.id) {
          course.status = action.payload.status;
        }
      });
    },
    addCourse: (state, action) => {
      state = [...state, action.payload];
    },
    editCourse: (state, action) => {
      state.map((course) => {
        if (course.id == action.payload.id) {
          for (let key in course) {
            course[key] = action.payload.course[key];
          }
        }
      });
    },
  },
});

export const { setCourses, editCourseStatus, addCourse, editCourse } =
  courseSlice.actions;

export default courseSlice.reducer;
