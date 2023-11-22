import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAppState, IPostAndUser } from "../interfaces/app.interfaces";
import { fetchPosts } from './postsSlice';
import { fetchUsers } from "./usersSlice";
import { AppDispatch } from "./store";

const initialState: IAppState = {
  post: null,
  user: null,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setPostAndUserState(state, action: PayloadAction<IPostAndUser>) {
      state.post = action.payload.post;
      state.user = action.payload.user;
    },
  }
});

export const fetchPostsAndUsers = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  };
};

export const { setPostAndUserState } = appSlice.actions;

export default appSlice;
