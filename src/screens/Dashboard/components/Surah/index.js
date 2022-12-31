import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../constants';

const Surah = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Surah</Text>
    </ScrollView>
  );
};

export default Surah;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
});
