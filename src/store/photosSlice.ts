import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPhoto, IPhotoState } from "../interfaces/photos.interfaces";

const initialState: IPhotoState = {
  loading: false,
  error: undefined,
  photo: null,
};

export const fetchPhotos = createAsyncThunk(
  "posts/fetchPhotos", async (id: number) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/photos/${id}`).then(data => data.json());
    return res;
  }
);

const photosSlice = createSlice({
  name: "photosSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state: IPhotoState) => {
      state.loading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state: IPhotoState, action: PayloadAction<IPhoto>) => {
      state.loading = false;
      state.photo = action.payload;
    });
    builder.addCase(fetchPhotos.rejected, (state: IPhotoState, action) => {
      state.loading = false;
      state.photo = null;
      state.error = action.error.message || "An error was ocurred while searching the posts";
    });
  },
  reducers: {}
});

export default photosSlice;
