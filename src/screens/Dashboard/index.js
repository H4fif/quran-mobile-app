import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, images, SIZES } from '../../constants';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.topHeaderNav}>
          <TouchableOpacity style={styles.menuButton}>
            <Icon name="menu-outline" size={styles.iconSize} />
          </TouchableOpacity>

          <Text style={styles.topHeaderTitle}>Quran App</Text>
        </View>

        <TouchableOpacity>
          <Icon name="search-outline" size={styles.iconSize} />
        </TouchableOpacity>
      </View>

      <View style={styles.greetings}>
        <Text style={styles.greetingText}>ٱلسَّلَامُ عَلَيْكُمْ</Text>
        <Text style={styles.greetingName}>John Doe</Text>
      </View>

      <View>
        <Image
          source={images.QuranHeader}
          resizeMode="cover"
          style={styles.topBanner}
        />

        <View style={styles.bannerDescription}>
          <View style={styles.bannerDescriptionTop}>
            <Icon
              name="book-outline"
              size={styles.iconSize}
              style={{ marginRight: 8 }}
              color={COLORS.white}
            />
            <Text style={{ color: COLORS.white, fontSize: 14 }}>Last Read</Text>
          </View>

          <Text style={styles.bannerSurahName}>Al-Fatihah</Text>
          <Text style={styles.bannerSurahAyah}>Ayah No: 1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  bannerDescription: {
    marginTop: 20,
    marginLeft: 20,
    position: 'absolute',
  },
  bannerDescriptionTop: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  bannerSurahName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  bannerSurahAyah: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: 24,
  },
  greetings: {
    alignItems: 'flex-start',
    marginVertical: 24,
  },
  greetingName: {
    color: '#240F4F',
    fontSize: 24,
    fontWeight: '600',
  },
  greetingText: {
    color: '#8789A3',
    fontSize: 18,
    fontWeight: '500',
  },
  iconSize: 32,
  menuButton: {
    marginRight: 24,
  },
  searchIcon: {
    color: COLORS.primary,
  },
  topBanner: {
    borderRadius: 10,
    width: '100%',
  },
  topHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  topHeaderNav: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  topHeaderTitle: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: '700',
  },
});
