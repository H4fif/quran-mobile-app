import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';
import { COLORS } from '../../../../constants';
import ListJuzItem from './components/ListJuzItem';
import { useDispatch, useSelector } from 'react-redux';
import { loadSurahs } from '../../redux/api';
import { useMemo } from 'react';

const Juz = () => {
  const dispatch = useDispatch();

  const { findSurah, loading, juzs } =
    useSelector(state => state.dashboard) || {};

  const dataMemo = useMemo(() => {
    if (!findSurah?.length) {
      return juzs;
    } else {
      return {
        ...juzs,
        references: juzs.references.filter(juz => {
          if (isNaN(Number(findSurah))) {
            const keyword = findSurah.toLowerCase();

            const engNameAlike =
              juz.englishName.toLowerCase().search(keyword) > -1;

            const engNameTranslationAlike =
              juz.englishNameTranslation.toLowerCase().search(keyword) > -1;

            const typeAlike =
              juz.revelationType.toLowerCase().search(keyword) > -1;

            const nameAlike = juz.name.toLowerCase().search(keyword) > -1;

            return (
              engNameAlike || typeAlike || nameAlike || engNameTranslationAlike
            );
          } else {
            const keyword = Number(findSurah);
            const juzNumberAlike = juz.number === keyword;
            const juzAyahAlike = juz.ayah === keyword;
            const surahNumberAlike = juz.surah === keyword;
            const verseTotalAlike = juz.numberOfAyahs === keyword;

            return (
              juzNumberAlike ||
              verseTotalAlike ||
              juzAyahAlike ||
              surahNumberAlike
            );
          }
        }),
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [findSurah]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={dataMemo?.references}
          ListEmptyComponent={
            <Text style={styles.labelEmpty}>
              {!findSurah?.length ? 'No match' : 'No data to display'}
            </Text>
          }
          onRefresh={() => dispatch(loadSurahs())}
          renderItem={({ item }) => <ListJuzItem data={dataMemo} juz={item} />}
          refreshing={loading}
          showsVerticalScrollIndicator={false}
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
