import { Alert } from 'react-native';

export const setSurahs = (state, action) => {
  state.surahs = action.payload;
};

export const surahsRequested = state => {
  state.loading = true;
};

export const surahsReceived = (state, action) => {
  try {
    const surahs = { ...action.payload?.data?.surahs };
    const juzs = { ...action.payload?.data?.juzs };

    const juzDetails = juzs.references.map((juz, index) => {
      const findSurah = surahs.references.find(
        surah => surah.number === juz.surah,
      );

      return {
        ...juz,
        ...findSurah,
        juz: index + 1,
      };
    });

    state.loading = false;
    state.surahs = { ...surahs };
    state.juzs = { ...juzs, references: [...juzDetails] };
  } catch (error) {
    console.log({ error });
  }
};

export const surahsRequestFailed = state => {
  state.loading = false;
  Alert.alert('Failed to get list of surahs, please try again later.');
};

export const setFindSurah = (state, action) => {
  state.findSurah = action.payload;
};

export const skipHomeScreen = (state, action) => {
  state.isSkipHomeScreen = action.payload;
};
