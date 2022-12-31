import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Surah from '../Surah';
import Juz from '../Juz';
import CustomTopTabs from '../CustomTopTabs';

const Tab = createMaterialTopTabNavigator();

const Tabs = props => {
  return (
    <Tab.Navigator tabBar={_props => <CustomTopTabs {..._props} />} {...props}>
      <Tab.Screen
        name="Surah"
        component={Surah}
        options={{
          tabBarLabel: 'Surah',
        }}
      />

      <Tab.Screen name="Juz" component={Juz} options={{ tabBarLabel: 'Juz' }} />
    </Tab.Navigator>
  );
};

export default Tabs;
