import { apiCallStart } from '../../../store/api';
import { getPagination } from '../../../utils';

import {
  surahDetailReceived,
  surahDetailRequestFailed,
  surahDetailRequested,
} from './slice';

export const loadSurahDetail = payload => dispatch => {
  const { page, surahNumber } = payload || {};

  return dispatch(
    apiCallStart({
      ...payload,
      url: `surah/${surahNumber}/editions/quran-uthmani,en.asad`,
      params: {
        ...getPagination(page),
      },
      onStart: surahDetailRequested.type,
      onSuccess: surahDetailReceived.type,
      onError: surahDetailRequestFailed.type,
    }),
  );
};
