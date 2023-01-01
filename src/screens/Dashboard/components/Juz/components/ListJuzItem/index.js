import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { images } from '../../../../../../constants';

const ListJuzItem = ({ onPressListItem, data, juz, index }) => {
  const surah = data?.surahs?.references?.find(
    item => item?.number === juz?.surah,
  );

  return (
    <TouchableOpacity style={styles.listItem} onPress={onPressListItem}>
      <View style={styles.listItemName}>
        <ImageBackground
          source={images.Star}
          style={styles.listNumberBackground}>
          <Text style={styles.listNumberText}>{index + 1}</Text>
        </ImageBackground>

        <View>
          <Text style={styles.juzName}>{surah?.englishName || ''}</Text>
          <Text style={styles.juzShortDesc}>Verse {juz.ayah}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.juzNameArabic}>{surah?.name || '-'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListJuzItem;
