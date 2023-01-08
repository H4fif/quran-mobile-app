import {
  ActivityIndicator,
  Alert,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, api, images } from '../../constants';
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from './ListItem';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { setLastReadSurah } from './redux/slice';

const initialPage = {
  offset: 0,
  limit: 10,
};

const SurahDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { surah } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [_surah, set_Surah] = useState({
    arabic: {},
    translation: {},
  });

  const getPagination = _page => ({
    limit: initialPage.limit,
    offset: initialPage.limit * (_page - 1),
  });

  const fetchData = useCallback(
    (_page = 1) => {
      setIsLoading(true);

      api
        .get(
          `surah/${surah.number}/editions/quran-uthmani,id.indonesian?language=id`,
          {
            params: {
              ...getPagination(_page),
            },
          },
        )
        .then(response => {
          const _data = response?.data?.data;

          set_Surah(prevState => ({
            ...prevState,
            arabic: {
              ...prevState?.arabic,
              ayahs: [
                ...(prevState?.arabic?.ayahs ? prevState.arabic.ayahs : []),
                ..._data[0].ayahs,
              ],
            },
            translation: {
              ...prevState?.translation,
              ayahs: [
                ...(prevState?.translation?.ayahs
                  ? prevState.translation.ayahs
                  : []),
                ..._data[1].ayahs,
              ],
            },
          }));
        })
        .catch(error => {
          Alert.alert(
            'Failed to get ayah of the current surah, try again later.',
          );
        })
        .finally(() => setIsLoading(false));
    },
    [surah.number],
  );

  const updateLastReadSurah = useCallback(
    ayah =>
      dispatch(
        setLastReadSurah({
          ayah: ayah,
          name: surah.englishName,
        }),
      ),
    [dispatch, surah],
  );

  const renderItem = useCallback(
    ({ item: ayah }) => {
      return (
        <ListItem
          key={`surah-detail-ayah-${ayah?.number}`}
          ayah={ayah}
          ayahTranslation={
            _surah?.translation?.ayahs?.find(
              item => item.number === ayah?.number,
            )?.text || '-'
          }
          onPressIn={_ayah => updateLastReadSurah(_ayah)}
        />
      );
    },
    [_surah, updateLastReadSurah],
  );

  useEffect(() => {
    fetchData(page);

    if (surah?.name) {
      updateLastReadSurah(1);
    }
  }, [dispatch, fetchData, page, surah, updateLastReadSurah]);

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.topHeaderNav}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <FIcon
                name="arrow-left"
                size={styles?.icon?.size}
                color={COLORS.gray}
              />
            </TouchableOpacity>

            <Text style={styles.topHeaderTitle}>{surah?.englishName}</Text>
          </View>

          <TouchableOpacity>
            <Icon
              name="search-outline"
              size={styles?.icon?.size}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={images.PlayerBackground}
          imageStyle={styles.header}
          style={styles.header}>
          <View>
            <Text style={styles.titleArabic}>{surah?.name}</Text>

            <Text style={styles.titleEnglish}>
              {surah?.englishNameTranslation}
            </Text>

            <Text style={styles.titleEnglish}>
              Revelation: {surah?.revelationType}
            </Text>
            <Text style={styles.titleEnglish}>
              {surah?.numberOfAyahs} Verses
            </Text>
          </View>
        </ImageBackground>

        <FlatList
          data={_surah?.arabic?.ayahs || []}
          renderItem={renderItem}
          onEndReached={() => {
            if (surah.numberOfAyahs > initialPage.limit) {
              setPage(prevState => prevState + 1);
            }
          }}
          showsVerticalScrollIndicator={false}
          refreshing={isLoading}
          onRefresh={() => fetchData()}
        />

        {isLoading ? <ActivityIndicator size="large" /> : null}
      </View>
    </SafeAreaView>
  );
};

export default SurahDetail;
