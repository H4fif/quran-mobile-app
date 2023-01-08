import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import ListSurahItem from './components/ListSurahItem';
import { COLORS } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { loadSurahs } from '../../redux/api';

const Surah = ({ navigation }) => {
  const dispatch = useDispatch();
  const { findSurah, loading, surahs } = useSelector(state => state.dashboard);

  const onPressListItem = useCallback(
    surah => {
      navigation.navigate('SurahDetail', { surah });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }) => (
      <ListSurahItem
        key={`surah-number-${item.number}`}
        onPressListItem={() => onPressListItem(item)}
        surah={item}
      />
    ),
    [onPressListItem],
  );

  useEffect(() => {
    dispatch(loadSurahs());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={
            !findSurah?.length
              ? surahs?.references
              : surahs?.references?.filter(
                  surah =>
                    surah.englishName
                      .toLowerCase()
                      .search(findSurah.toLowerCase()) > -1,
                )
          }
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.container}
          ListEmptyComponent={
            <Text style={styles.labelEmpty}>No data to display</Text>
          }
          refreshing={loading}
          onRefresh={() => dispatch(loadSurahs())}
        />
      )}
    </View>
  );
};

export default Surah;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  labelEmpty: {
    textAlign: 'center',
  },
});
