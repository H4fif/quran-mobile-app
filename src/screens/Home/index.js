import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import { images } from '../../constants';
import styles from './styles';

const Home = ({ navigation }) => {
  const redirect = () => navigation.replace('MainApp');

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

        <Pressable style={style => styles.button(style)} onPress={redirect}>
          <Text style={styles.buttonLabel}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
