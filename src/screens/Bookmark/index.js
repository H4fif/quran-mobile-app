import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import ListItem from './components/ListItem';
import styles from './styles';

const Bookmark = () => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.topHeaderNav}>
            <TouchableOpacity style={styles.menuButton}>
              <Icon name="menu-outline" size={styles?.icon?.size} />
            </TouchableOpacity>

            <Text style={styles.topHeaderTitle}>Bookmark</Text>
          </View>

          <TouchableOpacity>
            <Icon name="search-outline" size={styles?.icon?.size} />
          </TouchableOpacity>
        </View>

        <View style={styles.newCollectionWrapper}>
          <TouchableOpacity style={styles.newCollectionButton}>
            <FIcon
              name="folder-plus"
              size={styles?.icon?.size}
              color={COLORS.primary}
            />
            <Text style={styles.newCollectionLabel}>Add New Collection</Text>
          </TouchableOpacity>

          <MIcon name="sort" size={styles?.icon?.size} />
        </View>

        <ListItem />
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
