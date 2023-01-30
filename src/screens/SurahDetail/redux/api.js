import { initialPage } from '../../../constants';
import { apiCallStart } from '../../../store/api';
import { getPagination } from '../../../utils';

import {
  surahDetailReceived,
  surahDetailRequestFailed,
  surahDetailRequested,
} from './slice';

export const loadSurahDetail = payload => dispatch => {
  const { page, surahNumber, ayah } = payload || {};

  return dispatch(
    apiCallStart({
      ...payload,
      url: `surah/${surahNumber}/editions/quran-uthmani,en.asad`,
      params: {
        ...getPagination(page),
        offset: ayah ? ayah - 1 : initialPage.limit * (page - 1),
      },
      onStart: surahDetailRequested.type,
      onSuccess: surahDetailReceived.type,
      onError: surahDetailRequestFailed.type,
    }),
  );
};
