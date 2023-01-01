import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../constants';

const Dua = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FA5Icon name="praying-hands" size={200} color={COLORS.gray} />
    </SafeAreaView>
  );
};

export default Dua;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
