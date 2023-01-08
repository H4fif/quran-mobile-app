import { configureStore } from '@reduxjs/toolkit';
import api from './middleware/api';
import dashboardReducers from '../screens/Dashboard/redux/slice';
import surahDetailReducers from '../screens/SurahDetail/redux/slice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducers,
    surahDetail: surahDetailReducers,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api),
});
