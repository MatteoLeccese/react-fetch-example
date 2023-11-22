import { combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import postsSlice from "./postsSlice";
import commentsSlice from "./commentsSlice";
import photosSlice from "./photosSlice";
import appSlice from "./appSlice";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  posts: postsSlice.reducer,
  comments: commentsSlice.reducer,
  photo: photosSlice.reducer,
  app: appSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
