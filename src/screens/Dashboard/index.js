import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { COLORS, images } from '../../constants';
import { Tabs } from './components';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setFindSurah } from './redux/slice';
import ModalSurahSearch from './components/ModalSurahSearch';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { lastReadSurah } = useSelector(state => state.surahDetail) || {};
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [_findSurah, set_findSurah] = useState('');
  const tabsMemo = useMemo(() => <Tabs />, []);

  const onPressReset = () => {
    setSearchModalVisible(false);
    set_findSurah('');
    dispatch(setFindSurah(''));
  };

  const onChangeText = text => {
    set_findSurah(text);
  };

  const onPressSubmit = () => {
    dispatch(setFindSurah(_findSurah));
    setSearchModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ModalSurahSearch
        isOpen={searchModalVisible}
        findSurah={_findSurah}
        onChangeText={onChangeText}
        onPressReset={onPressReset}
        onPressSubmit={onPressSubmit}
      />

      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.topHeaderNav}>
            <TouchableOpacity style={styles.menuButton}>
              <Icon name="menu-outline" size={styles?.icon?.size} />
            </TouchableOpacity>

            <Text style={styles.topHeaderTitle}>Surah</Text>
          </View>

          <TouchableOpacity onPress={() => setSearchModalVisible(true)}>
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

            <Text style={styles.bannerSurahName}>
              {lastReadSurah?.name ? lastReadSurah.name : 'No surah'}
            </Text>
            <Text style={styles.bannerSurahAyah}>
              {lastReadSurah?.ayah
                ? 'Ayah No: ' + lastReadSurah.ayah
                : 'has been read'}
            </Text>
          </View>
        </View>

        {tabsMemo}
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
