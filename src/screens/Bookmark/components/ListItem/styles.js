import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export default StyleSheet.create({
  icon: {
    marginRight: 8,
    size: 24,
  },
  itemCounter: {
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    lineHeight: 18,
  },
  itemLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  itemLabelWrapper: {
    marginLeft: 16,
  },
  itemWrapper: {
    flexDirection: 'row',
  },
  listItemView: {
    marginTop: 32,
  },
  listItemWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
