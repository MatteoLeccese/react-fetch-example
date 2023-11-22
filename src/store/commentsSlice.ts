import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IComment, ICommentsState } from "../interfaces/comments.interfaces";

const initialState: ICommentsState = {
  loading: false,
  error: undefined,
  comments: [],
};

export const fetchComments = createAsyncThunk(
  "posts/fetchComments", async (id: number) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/comments?postId=${id}`).then(data => data.json());
    return res;
  }
);

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state: ICommentsState) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state: ICommentsState, action: PayloadAction<IComment[]>) => {
      state.loading = false;
      state.comments = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state: ICommentsState, action) => {
      state.loading = false;
      state.comments = [];
      state.error = action.error.message || "An error was ocurred while searching the comments";
    });
  },
  reducers: {}
});

export default commentsSlice;
