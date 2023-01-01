import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const COLORS = {
  black: '#240F4F',
  white: '#ffffff',
  primary: '#672CBC',
  gray: '#8789A3',
  orange: '#F9B091',
  orangeFocus: '#e09e82',
  divider: '#BBC4CE59',
};

export const SIZES = {
  // GLOBAL
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // FONT SIZES
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // APP DIMENSIONS
  width,
  height,
};

export const FONTS = {
  h1: {
    fontFamily: 'Poppins-Black',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: 'Poppins-Black',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: 'Poppins-Black',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: 'Poppins-Black',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
