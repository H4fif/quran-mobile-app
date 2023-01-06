import { configureStore } from '@reduxjs/toolkit';
import api from './middleware/api';
import dashboardReducers from '../screens/Dashboard/redux/slice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducers,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api),
});
