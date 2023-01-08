import { ActivityIndicator } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

const Loader = () => {
  return <ActivityIndicator size="large" color={COLORS.primary} />;
};

export default Loader;
