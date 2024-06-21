import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import courseReducers from "../features/courses/courseSlice";
import openEditTaskReducers from "../features/openEditTask/openEditTaskSlice";
import userTokenReducer from "../features/user/userTokenSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  course: courseReducers,
  editTask: openEditTaskReducers,
  token: userTokenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
