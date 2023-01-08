import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  containerSafeArea: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  icon: {
    marginRight: 8,
    size: 24,
  },
  menuButton: {
    marginRight: 16,
    padding: 8,
  },
  newCollectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newCollectionLabel: {
    color: COLORS.primary,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  newCollectionWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
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
