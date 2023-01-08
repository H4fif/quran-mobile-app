import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FIcon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../constants';
import styles from './styles';

const ListItem = ({ ayah, ayahTranslation, onPressIn }) => {
  return (
    <View style={styles.itemWrapper}>
      <Pressable onPressIn={() => onPressIn(ayah?.numberInSurah)}>
        <View style={styles.itemControl}>
          <View style={styles.numberWrapper}>
            <Text style={styles.number}>{ayah?.numberInSurah}</Text>
          </View>

          <View style={styles.rightControls}>
            <TouchableOpacity>
              <FIcon
                name="share-2"
                size={styles?.icon?.size}
                color={COLORS.primary}
                style={styles.rightControlItem}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <FIcon
                name="play"
                size={styles?.icon?.size}
                color={COLORS.primary}
                style={styles.rightControlItem}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <FIcon
                name="bookmark"
                size={styles?.icon?.size}
                color={COLORS.primary}
                style={styles.rightControlItem}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text selectable={true} style={styles.ayah}>
            {ayah?.text}
          </Text>

          <Text selectable={true} style={styles.ayahTranslation}>
            {ayahTranslation}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ListItem;
