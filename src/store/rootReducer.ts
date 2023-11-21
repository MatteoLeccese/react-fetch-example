import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';

const rootReducer = combineReducers({ 
  repositorySearch: usersSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
