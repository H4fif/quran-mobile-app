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
  const { loading, surahs } = useSelector(state => state.dashboard);

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
    <View style={{ ...styles.container, flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={surahs?.references}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.container}
          ListEmptyComponent={
            <Text style={styles.labelEmpty}>No data to display</Text>
          }
        />
      )}
    </View>
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
