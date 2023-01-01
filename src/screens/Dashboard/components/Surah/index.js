import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import ListSurahItem from './components/ListSurahItem';
import { COLORS } from '../../../../constants';
import axios from 'axios';

const Surah = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onPressListItem = event => {
    console.log({ event });
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('http://api.alquran.cloud/v1/meta')
      .then(response => {
        const _data = response?.data?.data;
        setData(_data?.surahs);
      })
      .catch(error => {
        console.log('FETCH QURAN META FAILED >>> ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        data?.references?.map(item => (
          <ListSurahItem onPressListItem={onPressListItem} surah={item} />
        ))
      )}
    </ScrollView>
  );
};

export default Surah;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
});
