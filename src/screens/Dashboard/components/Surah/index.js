import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React, { useCallback, useEffect, useMemo } from 'react';
import ListSurahItem from './components/ListSurahItem';
import { COLORS } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { loadSurahs } from '../../redux/api';
import { setFindSurah } from '../../redux/slice';

const Surah = ({ navigation }) => {
  const dispatch = useDispatch();
  const { findSurah, loading, surahs } =
    useSelector(state => state.dashboard) || {};

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

  const onRefresh = useCallback(() => {
    dispatch(setFindSurah(''));
    dispatch(loadSurahs());
  }, [dispatch]);

  const dataMemo = useMemo(
    () =>
      !findSurah?.length
        ? surahs?.references
        : surahs?.references?.filter(surah => {
            if (isNaN(Number(findSurah))) {
              const keyword = findSurah.toLowerCase();

              const engNameAlike =
                surah.englishName.toLowerCase().search(keyword) > -1;

              const engNameTranslationAlike =
                surah.englishNameTranslation.toLowerCase().search(keyword) > -1;

              const typeAlike =
                surah.revelationType.toLowerCase().search(keyword) > -1;

              const nameAlike = surah.name.toLowerCase().search(keyword) > -1;

              return (
                engNameAlike ||
                typeAlike ||
                nameAlike ||
                engNameTranslationAlike
              );
            } else {
              const keyword = Number(findSurah);
              const surahNumberAlike = surah.number === keyword;
              const verseTotalAlike = surah.numberOfAyahs === keyword;
              return surahNumberAlike || verseTotalAlike;
            }
          }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [findSurah],
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
          data={dataMemo}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.container}
          ListEmptyComponent={
            <Text style={styles.labelEmpty}>
              {findSurah?.length > 0 ? 'No match' : 'No data to display'}
            </Text>
          }
          refreshing={loading}
          onRefresh={onRefresh}
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
