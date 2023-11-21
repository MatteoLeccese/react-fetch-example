import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser, IUsersState } from "../interfaces/user.interfaces";

const initialState: IUsersState = {
  loading: false,
  error: undefined,
  users: [],
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers", async() => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`).then(data => data.json());
    return res;
  }
);

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state: IUsersState) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state: IUsersState, action: PayloadAction<IUser[]>) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state: IUsersState, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "An error was ocurred while searching the users";
    });
  },
  reducers: {}
});

export default usersSlice;
