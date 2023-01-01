import { Text, View } from 'react-native';
import React from 'react';
import FIcon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../constants';
import styles from './styles';

const ListItem = ({ ayah, ayahTranslation }) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemControl}>
        <View style={styles.numberWrapper}>
          <Text style={styles.number}>{ayah?.numberInSurah}</Text>
        </View>

        <View style={styles.rightControls}>
          <FIcon
            name="share-2"
            size={styles?.icon?.size}
            color={COLORS.primary}
            style={styles.rightControlItem}
          />

          <FIcon
            name="play"
            size={styles?.icon?.size}
            color={COLORS.primary}
            style={styles.rightControlItem}
          />

          <FIcon
            name="bookmark"
            size={styles?.icon?.size}
            color={COLORS.primary}
            style={styles.rightControlItem}
          />
        </View>
      </View>

      <View>
        <Text style={styles.ayah}>{ayah?.text}</Text>
        <Text style={styles.ayahTranslation}>{ayahTranslation}</Text>
      </View>
    </View>
  );
};

export default ListItem;
