import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { images } from '../../../../../../constants';

const ListJuzItem = ({ onPressListItem, juz }) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPressListItem}>
      <View style={styles.listItemName}>
        <ImageBackground
          source={images.Star}
          style={styles.listNumberBackground}>
          <Text style={styles.listNumberText}>{juz?.juz}</Text>
        </ImageBackground>

        <View>
          <Text style={styles.juzName}>{juz?.englishName || ''}</Text>
          <Text style={styles.juzShortDesc}>Verse {juz?.ayah}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.juzNameArabic}>{juz?.name || '-'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListJuzItem;
