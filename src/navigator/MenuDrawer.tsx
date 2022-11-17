import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {useWindowDimensions} from 'react-native';

import {StackNavigator} from './StackNavigatior';
import {SettingsScreen} from '../screen/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuDrawer = () => {
  // const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
