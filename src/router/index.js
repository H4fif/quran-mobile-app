import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Bookmark, Dashboard, Dua, Home, Salat, SurahDetail } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigator } from '../components';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={_props => <BottomTabNavigator {..._props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Salat" component={Salat} />
      <Tab.Screen name="Prayer" component={Dua} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
    </Tab.Navigator>
  );
};

const Router = () => {
  const { isSkipHomeScreen } = useSelector(state => state.dashboard) || {};

  return (
    <Stack.Navigator
      initialRouteName={isSkipHomeScreen ? 'MainApp' : 'Home'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SurahDetail" component={SurahDetail} />
    </Stack.Navigator>
  );
};

export default Router;
