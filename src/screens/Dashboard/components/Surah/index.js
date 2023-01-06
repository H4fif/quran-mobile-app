import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import ListSurahItem from './components/ListSurahItem';
import { COLORS } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { loadSurahs } from '../../redux/api';

const Surah = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, surahs } = useSelector(state => state.dashboard);

  const onPressListItem = surah => {
    navigation.navigate('SurahDetail', { surah });
  };

  useEffect(() => {
    dispatch(loadSurahs());
  }, [dispatch]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : surahs?.references ? (
        surahs?.references?.map(item => (
          <ListSurahItem
            key={`surah-number-${item.number}`}
            onPressListItem={() => onPressListItem(item)}
            surah={item}
          />
        ))
      ) : (
        <Text style={styles.labelEmpty}>No data to display</Text>
      )}
    </ScrollView>
  );
};

export default Surah;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  labelEmpty: {
    textAlign: 'center',
  },
});
