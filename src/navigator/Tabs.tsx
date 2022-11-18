/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Tab1Screen} from '../screen/Tab1Screen';
import {Tab2Screen} from '../screen/Tab2Screen';
import {StackNavigator} from './StackNavigatior';
import {colores} from '../theme/appTheme';
import {TopTabs} from './TopTab';

const TabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <TabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          position: 'relative',
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'S';
              break;
          }

          return <Text style={{color: color}}> {iconName} </Text>;
        },
      })}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <TabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};

const TabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          position: 'relative',
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'apps-outline';
              break;
            case 'TopTabs':
              iconName = 'attach-outline';
              break;
            case 'StackNavigator':
              iconName = 'body-outline';
              break;
          }

          return <Icon name={`${iconName}`} size={20} color={color} />;
        },
      })}>
      <TabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
      <TabAndroid.Screen name="TopTabs" component={TopTabs} />
      <TabAndroid.Screen name="StackNavigator" component={StackNavigator} />
    </TabAndroid.Navigator>
  );
};

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};
