import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../../constants';

export default StyleSheet.create({
  listItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.divider,
    borderBottomWidth: 1,
    paddingBottom: 16,
    marginBottom: 16,
  },
  listItemName: {
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listNumberBackground: {
    height: 32,
    width: 32,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  listNumberText: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '500',
  },
  surahName: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  surahNameArabic: {
    color: COLORS.primary,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    fontWeight: '700',
  },
  surahShortDesc: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '500',
  },
});
