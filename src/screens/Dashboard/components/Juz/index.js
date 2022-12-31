import { ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../constants';

const Juz = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Juz</Text>
    </ScrollView>
  );
};

export default Juz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
});
