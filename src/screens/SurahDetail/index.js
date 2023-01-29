import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, images, initialPage } from '../../constants';
import { loadSurahDetail } from './redux/api';
import { setFindAyah, setLastReadSurah } from './redux/slice';
import { ListItem } from './components';
import ModalAyahSearch from './components/ModalAyahSearch';
import { Loader } from '../../components';
import styles from './styles';

const SurahDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { findAyah, loading, surahDetail } = useSelector(
    state => state.surahDetail,
  );

  const { surah } = route.params;
  const [page, setPage] = useState(1);
  const [_findAyah, set_findAyah] = useState('');
  const [searchModalVisible, setSearchModalVisible] = useState(false);

  const fetchDataRedux = useCallback(
    (_page = 1) => {
      dispatch(
        loadSurahDetail({
          surahNumber: surah.number,
          page: _page,
        }),
      );
    },
    [dispatch, surah.number],
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
            surahDetail?.translation?.ayahs?.find(
              item => item.number === ayah?.number,
            )?.text || '-'
          }
          onPressIn={_ayah => updateLastReadSurah(_ayah)}
        />
      );
    },
    [surahDetail, updateLastReadSurah],
  );

  const resetFindStates = useCallback(() => {
    dispatch(setFindAyah(''));
    set_findAyah('');
  }, [dispatch]);

  const onPressReset = () => {
    setSearchModalVisible(false);
    resetFindStates();
  };

  const onChangeText = text => {
    set_findAyah(text);
  };

  const onPressSubmit = () => {
    dispatch(setFindAyah(_findAyah));
    setSearchModalVisible(false);
  };

  useEffect(() => {
    fetchDataRedux(page, surahDetail);
  }, [page]);

  const filteredAyahs = useMemo(
    () =>
      !findAyah?.length
        ? surahDetail?.arabic?.ayahs
        : surahDetail?.arabic?.ayahs?.filter(item =>
            surahDetail?.translation?.ayahs
              .filter(translation => {
                const keyword = findAyah?.toLowerCase?.()?.trim?.();

                if (!isNaN(Number(keyword))) {
                  return translation.number === Number(findAyah);
                } else {
                  return (
                    translation.text
                      .toLowerCase()
                      .search(findAyah.toLowerCase()) > -1
                  );
                }
              })
              .find(arabic => arabic.number === item.number),
          ),
    [findAyah, surahDetail?.arabic?.ayahs, surahDetail?.translation?.ayahs],
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

        {!surahDetail?.arabic?.ayahs && loading ? (
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
                setPage(1);
              }
            }}
            refreshing={loading}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<Text>No data to display</Text>}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SurahDetail;
