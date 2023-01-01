import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { images } from '../../../../../../constants';

const ListSurahItem = ({ onPressListItem, surah }) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPressListItem}>
      <View style={styles.listItemName}>
        <ImageBackground
          source={images.Star}
          style={styles.listNumberBackground}>
          <Text style={styles.listNumberText}>{surah.number}</Text>
        </ImageBackground>

        <View>
          <Text style={styles.surahName}>{surah.englishName}</Text>
          <Text style={styles.surahShortDesc}>
            {surah.revelationType} - {surah.numberOfAyahs} Verses
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.surahNameArabic}>{surah.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListSurahItem;
