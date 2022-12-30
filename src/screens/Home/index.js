import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { images } from '../../constants';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleBrand}>Quran App</Text>
      </View>

      <View style={styles.subTitleWrapper}>
        <Text style={styles.subTitle}>Learn Quran and</Text>
      </View>

      <View style={styles.subTitleWrapper}>
        <Text style={styles.subTitle}>Recite once everyday</Text>
      </View>

      <View style={styles.bannerWrapper}>
        <Image
          source={images.SplashScreen}
          style={styles.banner}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
