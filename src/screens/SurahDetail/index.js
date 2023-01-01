import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, api, images } from '../../constants';
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from './ListItem';
import styles from './styles';

const SurahDetail = ({ route, navigation }) => {
  const { surah } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [_surah, set_Surah] = useState([]);
  const [ayahTranslation, setAyahTranslation] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(
        `surah/${surah.number}/editions/quran-uthmani,id.indonesian?language=id`,
      )
      .then(response => {
        const _data = response?.data?.data;
        set_Surah(_data[0]);

        if (_data.length > 1) {
          setAyahTranslation(_data[1]);
        }
      })
      .catch(error => {
        Alert.alert(
          'Failed to get ayah of the current surah, try again later.',
        );
      })
      .finally(() => setIsLoading(false));

    return () => {
      set_Surah([]);
      setAyahTranslation([]);
    };
  }, [surah.number]);

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

        <ScrollView showsVerticalScrollIndicator={false}>
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

          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            _surah?.ayahs?.map((ayah, index) => (
              <ListItem
                key={`surah-detail-ayah-${ayah?.number}`}
                ayah={ayah}
                ayahTranslation={
                  ayahTranslation?.ayahs?.find(
                    item => item.number === ayah?.number,
                  )?.text || '-'
                }
              />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SurahDetail;
