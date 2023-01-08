import { createSlice } from '@reduxjs/toolkit';
import { surahDetailStates } from './states';
import * as surahDetailReducers from './reducers';

export const surahDetailSlice = createSlice({
  name: 'surahDetail',
  initialState: {
    ...surahDetailStates,
  },
  reducers: {
    ...surahDetailReducers,
  },
});

export default surahDetailSlice.reducer;

export const { setLastReadSurah } = surahDetailSlice.actions;
