import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export default StyleSheet.create({
  tabHeader: {
    flexDirection: 'row',
    paddingVertical: 24,
  },
  tabHeaderButton: isFocused => ({
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 17,
    borderBottomColor: isFocused ? COLORS.primary : COLORS.gray,
    borderBottomWidth: 3,
    color: isFocused ? COLORS.primary : COLORS.gray,
  }),
  tabHeaderLabel: isFocused => ({
    color: isFocused ? COLORS.primary : COLORS.gray,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  }),
});
