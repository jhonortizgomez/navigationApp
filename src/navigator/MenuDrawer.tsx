import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StackNavigator} from './StackNavigatior';
import {SettingsScreen} from '../screen/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
