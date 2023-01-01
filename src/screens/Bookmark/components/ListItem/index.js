import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FIcon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../../constants';
import styles from './styles';

const ListItem = () => {
  return (
    <ScrollView
      style={styles.listItemView}
      showsVerticalScrollIndicator={false}>
      {[...Array(15)].map((item, index) => (
        <View key={index} style={styles.listItemWrapper}>
          <TouchableOpacity style={styles.itemWrapper}>
            <FIcon
              name="folder"
              size={styles?.icon?.size}
              color={COLORS.primary}
            />

            <View style={styles.itemLabelWrapper}>
              <Text style={styles.itemLabel}>Bookmark Sample {index + 1}</Text>
              <Text style={styles.itemCounter}>{index + 1} items</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <FIcon name="more-vertical" size={styles?.icon?.size} />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default ListItem;
