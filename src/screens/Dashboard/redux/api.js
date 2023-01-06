import { apiCallStart } from '../../../store/api';
import { surahsReceived, surahsRequested, surahsRequestFailed } from './slice';

export const loadSurahs = () => dispatch => {
  return dispatch(
    apiCallStart({
      url: '/meta',
      onStart: surahsRequested.type,
      onSuccess: surahsReceived.type,
      onError: surahsRequestFailed.type,
    }),
  );
};
