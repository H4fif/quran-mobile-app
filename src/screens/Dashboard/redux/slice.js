import { createSlice } from '@reduxjs/toolkit';
import { dashboardStates } from './states';
import * as dashboardReducers from './reducers';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    ...dashboardStates,
  },
  reducers: {
    ...dashboardReducers,
  },
});

export default dashboardSlice.reducer;

export const {
  setSurahs,
  setFindSurah,
  skipHomeScreen,
  surahsReceived,
  surahsRequestFailed,
  surahsRequested,
} = dashboardSlice.actions;
