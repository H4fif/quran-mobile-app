import axios from 'axios';
import * as actions from '../api';

const api =
  ({ dispatch }) =>
  next =>
  async action => {
    if (action.type !== actions.apiCallStart.type) {
      return next(action);
    }

    const { url, params, method, data, onStart, onSuccess, onError, ...rest } =
      action.payload || {};

    if (onStart) {
      dispatch({ type: onStart });
    }

    next(action);

    try {
      const response = await axios.request({
        baseURL: 'https://api.alquran.cloud/v1/',
        url,
        method,
        data,
        params,
      });

      dispatch(actions.apiCallSuccess({ ...response.data, ...rest }));

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: { ...response.data, ...rest } });
      }
    } catch (error) {
      dispatch(actions.apiCallFail(error.message));

      if (onError) {
        dispatch({ type: onError, payload: error.message });
      }
    }
  };

export default api;
