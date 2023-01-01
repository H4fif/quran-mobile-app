import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, api } from '../../../../constants';
import ListJuzItem from './components/ListJuzItem';

const Juz = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(data);

  useEffect(() => {
    setIsLoading(true);

    api
      .get('meta')
      .then(response => {
        const _data = response?.data?.data;
        setData(_data);
      })
      .catch(error => {
        console.log('FETCH QURAN META FAILED >>> ', error);
        Alert.alert('Failed to get list of surah(s), please try again later');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : data?.juzs?.references ? (
        data?.juzs?.references?.map((item, index) => (
          <ListJuzItem
            key={`juz-number-${index}`}
            data={data}
            juz={item}
            index={index}
          />
        ))
      ) : (
        <Text style={styles.labelEmpty}>No data to display</Text>
      )}
    </ScrollView>
  );
};

export default Juz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  labelEmpty: {
    textAlign: 'center',
  },
});
