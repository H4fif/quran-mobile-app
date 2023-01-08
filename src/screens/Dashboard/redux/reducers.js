import { Alert } from 'react-native';

export const setSurahs = (state, action) => {
  state.surahs = action.payload;
};

export const surahsRequested = state => {
  state.loading = true;
};

export const surahsReceived = (state, action) => {
  state.surahs = action.payload?.data?.surahs;
  state.loading = false;
};

export const surahsRequestFailed = state => {
  state.loading = false;
  Alert.alert('Failed to get list of surahs, please try again later.');
};

export const setFindSurah = (state, action) => {
  state.findSurah = action.payload;
};
