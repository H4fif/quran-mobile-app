import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

export default StyleSheet.create({
  ayah: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 8,
    textAlign: 'right',
  },
  ayahTranslation: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
    size: 24,
  },
  itemControl: {
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  itemWrapper: {
    borderBottomColor: COLORS.divider,
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  number: {
    color: COLORS.white,
  },
  numberWrapper: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 27,
    height: 27,
    justifyContent: 'center',
    width: 27,
  },
  rightControlItem: {
    marginLeft: 16,
  },
  rightControls: {
    flexDirection: 'row',
  },
});
