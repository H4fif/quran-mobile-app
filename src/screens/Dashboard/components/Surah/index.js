import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ListSurahItem from './components/ListSurahItem';
import { COLORS } from '../../../../constants';
import { api } from '../../../../constants';

const Surah = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onPressListItem = event => {
    console.log({ event });
  };

  useEffect(() => {
    setIsLoading(true);

    api
      .get('meta')
      .then(response => {
        const _data = response?.data?.data;
        setData(_data?.surahs);
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : data?.references ? (
        data?.references?.map(item => (
          <ListSurahItem
            key={`surah-number-${item.number}`}
            onPressListItem={onPressListItem}
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
