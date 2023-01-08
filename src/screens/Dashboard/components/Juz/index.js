import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { COLORS, api } from '../../../../constants';
import ListJuzItem from './components/ListJuzItem';

const Juz = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(data);

  const fetchData = useCallback(() => {
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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={data?.juzs?.references}
          ListEmptyComponent={
            <Text style={styles.labelEmpty}>No data to display</Text>
          }
          onRefresh={() => fetchData()}
          renderItem={({ item, index }) => (
            <ListJuzItem data={data} juz={item} index={index} />
          )}
          refreshing={isLoading}
        />
      )}
    </View>
  );
};

export default Juz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  labelEmpty: {
    textAlign: 'center',
  },
});
