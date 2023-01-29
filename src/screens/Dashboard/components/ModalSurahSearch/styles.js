import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

export default StyleSheet.create({
  modalContent: {
    backgroundColor: COLORS.white,
    elevation: 5,
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: SIZES.width * 0.025,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    height: SIZES.height / 3,
    width: SIZES.width / 2,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalFooterResetButton: {
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: SIZES.width * 0.025,
    fontFamily: 'Poppins-Regular',
    padding: 10,
  },
  modalFooterResetLabel: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  modalFooterSubmitButton: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.width * 0.025,
    fontFamily: 'Poppins-Regular',
    padding: 10,
  },
  modalFooterSubmitLabel: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
  },
  modalInput: {
    borderColor: COLORS.primary,
    borderRadius: SIZES.width * 0.025,
    borderWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginVertical: 16,
  },
  modalLabel: {
    fontFamily: 'Poppins-Bold',
  },
  modalListItem: {
    fontFamily: 'Poppins',
    fontSize: 12,
  },
  modalView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
