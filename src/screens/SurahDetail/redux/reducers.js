export const setLastReadSurah = (state, action) => {
  state.lastReadSurah = {
    ayah: action?.payload?.ayah,
    name: action?.payload?.name,
  };
};