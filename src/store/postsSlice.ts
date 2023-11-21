import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost, IPostState } from "../interfaces/post.interfaces";

const initialState: IPostState = {
  loading: false,
  error: undefined,
  posts: [],
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts", async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/photos`).then(data => data.json());
    return res;
  }
);

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state: IPostState) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state: IPostState, action: PayloadAction<IPost[]>) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state: IPostState, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message || "An error was ocurred while searching the posts";
    });
  },
  reducers: {}
});

export default postsSlice;
