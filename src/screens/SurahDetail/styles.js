import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  containerSafeArea: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  header: {
    borderRadius: 20,
    height: 180,
    justifyContent: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 8,
    size: 24,
  },
  titleArabic: {
    color: COLORS.white,
    fontSize: 30,
    marginBottom: 8,
    textAlign: 'right',
  },
  titleEnglish: {
    color: COLORS.white,
    fontSize: 18,
    marginBottom: 8,
  },
  topHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
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
