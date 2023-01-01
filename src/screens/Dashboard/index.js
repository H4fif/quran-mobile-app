import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { COLORS, images } from '../../constants';
import { Tabs } from './components';
import styles from './styles';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.topHeaderNav}>
            <TouchableOpacity style={styles.menuButton}>
              <Icon name="menu-outline" size={styles?.icon?.size} />
            </TouchableOpacity>

            <Text style={styles.topHeaderTitle}>Surah</Text>
          </View>

          <TouchableOpacity>
            <Icon name="search-outline" size={styles?.icon?.size} />
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
              <FAIcon
                name="readme"
                size={styles.icon.size}
                style={styles.icon}
                color={COLORS.white}
              />
              <Text style={styles.lastRead}>Last Read</Text>
            </View>

            <Text style={styles.bannerSurahName}>Al-Fatihah</Text>
            <Text style={styles.bannerSurahAyah}>Ayah No: 1</Text>
          </View>
        </View>

        <Tabs />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
