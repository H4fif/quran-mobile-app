import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  banner: {
    borderRadius: 30,
    width: '100%',
  },
  bannerWrapper: {
    alignItems: 'center',
    marginTop: 49,
    marginHorizontal: '8%',
  },
  button: ({ pressed }) => ({
    backgroundColor: pressed ? COLORS.orangeFocus : COLORS.orange,
    borderRadius: 30,
    paddingVertical: 17,
    paddingHorizontal: 40,
    position: 'absolute',
    bottom: -30,
  }),
  buttonLabel: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 18,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  subTitle: {
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 18,
  },
  subTitleWrapper: {
    alignItems: 'center',
  },
  titleBrand: {
    color: COLORS.primary,
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleWrapper: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 86,
  },
});
