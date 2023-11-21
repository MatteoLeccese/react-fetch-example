import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: unknown = [];

const usersSlice = createSlice({
  name: 'commitHistorySlice',
  initialState,
  reducers: {
    getUsers(state, action: PayloadAction<unknown>) {},
  }
});

export const { getUsers } = usersSlice.actions;

export default usersSlice;