import { Alert } from 'react-native';

export const setLastReadSurah = (state, action) => {
  state.lastReadSurah = {
    ayah: action?.payload?.ayah,
    name: action?.payload?.name,
  };
};

export const setFindAyah = (state, action) => {
  state.findAyah = action.payload;
};

export const surahDetailRequested = (state, action) => {
  state.loading = true;
};

export const surahDetailReceived = (state, action) => {
  state.loading = false;
  let _newSurah = { ...state.surahDetail };
  const { payload } = action || {};
  const { data, page } = payload || {};
  const isNextPage = page === state.currentPage + 1;
  const isPreviousPage = page === state.currentPage - 1;
  state.currentPage = page;

  if (page === 1 || (!isNextPage && !isPreviousPage)) {
    _newSurah = {
      arabic: data[0],
      translation: data[1],
    };
  } else {
    _newSurah = {
      arabic: {
        ...(_newSurah?.arabic ? _newSurah.arabic : {}),
        ayahs: [
          ...(_newSurah?.arabic?.ayahs?.length ? _newSurah.arabic.ayahs : []),
          ...data[0].ayahs,
        ],
      },
      translation: {
        ...(_newSurah?.translation ? _newSurah.translation : {}),
        ayahs: [
          ...(_newSurah?.translation?.ayahs?.length
            ? _newSurah.translation.ayahs
            : []),
          ...data[1].ayahs,
        ],
      },
    };
  }

  state.surahDetail = _newSurah;
};

export const surahDetailRequestFailed = (state, action) => {
  state.loading = false;
  Alert.alert('Failed to get surah detail, please try again later.');
};
