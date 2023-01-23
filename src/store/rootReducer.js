import { combineReducers } from '@reduxjs/toolkit';
import dashboardReducers from '../screens/Dashboard/redux/slice';
import surahDetailReducers from '../screens/SurahDetail/redux/slice';

export default combineReducers({
  dashboard: dashboardReducers,
  surahDetail: surahDetailReducers,
});
