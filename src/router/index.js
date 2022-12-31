import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard, Home } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigator } from '../components';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={_props => <BottomTabNavigator {..._props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />

      <Tab.Screen name="Salat">{() => <Text>Salat Screen</Text>}</Tab.Screen>

      <Tab.Screen name="Prayer">
        {() => <Text>Dua Prayer Screen</Text>}
      </Tab.Screen>

      <Tab.Screen name="Bookmark">
        {() => <Text>Bookmark Screen</Text>}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
