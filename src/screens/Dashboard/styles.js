import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  bannerDescription: {
    marginTop: 20,
    marginLeft: 20,
    position: 'absolute',
  },
  bannerDescriptionTop: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  bannerSurahName: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: '600',
  },
  bannerSurahAyah: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: 16,
  },
  containerSafeArea: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  greetings: {
    alignItems: 'flex-start',
    marginVertical: 24,
  },
  greetingName: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    fontWeight: '600',
  },
  greetingText: {
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    marginRight: 8,
    size: 24,
  },
  lastRead: {
    color: COLORS.white,
    fontSize: 14,
  },
  menuButton: {
    marginRight: 16,
    padding: 8,
  },
  searchIcon: {
    color: COLORS.primary,
  },
  topBanner: {
    borderRadius: 10,
    width: '100%',
  },
  topHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  topHeaderNav: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  topHeaderTitle: {
    color: COLORS.primary,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    fontWeight: '700',
  },
});
