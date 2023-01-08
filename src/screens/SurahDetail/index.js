import {
  Alert,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, api, images } from '../../constants';
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItem } from './components';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setFindAyah, setLastReadSurah } from './redux/slice';
import ModalAyahSearch from './components/ModalAyahSearch';
import { Loader } from '../../components';

const initialPage = {
  offset: 0,
  limit: 10,
};

const SurahDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { findAyah } = useSelector(state => state.surahDetail);
  const { surah } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [_surah, set_Surah] = useState({
    arabic: {},
    translation: {},
  });
  const [_findAyah, set_findAyah] = useState('');
  const [searchModalVisible, setSearchModalVisible] = useState(false);

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

  const onPressReset = () => {
    setSearchModalVisible(false);
    set_findAyah('');
    dispatch(setFindAyah(''));
  };

  const onChangeText = text => {
    set_findAyah(text);
  };

  const onPressSubmit = () => {
    dispatch(setFindAyah(_findAyah));
    setSearchModalVisible(false);
  };

  const resetFindStates = useCallback(() => {
    dispatch(setFindAyah(''));
    set_findAyah('');
  }, [dispatch]);

  useEffect(() => {
    fetchData(page);

    if (surah?.name) {
      updateLastReadSurah(1);
    }

    return () => {
      resetFindStates();
    };
  }, [dispatch, fetchData, page, surah, resetFindStates, updateLastReadSurah]);

  const filteredAyahs = useMemo(
    () =>
      !findAyah?.length
        ? _surah?.arabic?.ayahs
        : _surah?.arabic?.ayahs?.filter(item =>
            _surah?.translation?.ayahs
              .filter(
                translation =>
                  translation.text
                    .toLowerCase()
                    .search(findAyah.toLowerCase()) > -1,
              )
              .find(arabic => arabic.number === item.number),
          ),
    [findAyah, _surah],
  );

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ModalAyahSearch
        isOpen={searchModalVisible}
        findAyah={_findAyah}
        onChangeText={onChangeText}
        onPressReset={onPressReset}
        onPressSubmit={onPressSubmit}
      />

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

          <TouchableOpacity onPress={() => setSearchModalVisible(true)}>
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

        {!_surah?.arabic?.ayahs && isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={filteredAyahs || []}
            onEndReached={() => {
              if (surah.numberOfAyahs > initialPage.limit) {
                setPage(prevState => prevState + 1);
              }
            }}
            onRefresh={() => {
              if (surah.numberOfAyahs > initialPage.limit) {
                set_Surah({});
                fetchData();
              }
            }}
            refreshing={isLoading}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SurahDetail;
