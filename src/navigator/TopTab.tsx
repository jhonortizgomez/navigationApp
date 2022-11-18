/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {ChatScreen} from '../screen/ChatScreen';
import {ContactsScreen} from '../screen/ContactsScreen';
import {AlbumsScreen} from '../screen/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';

const TopTab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: colores.primary},
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName;

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubble-ellipses-outline';
              break;
            case 'Contacts':
              iconName = 'person-outline';
              break;
            case 'Albums':
              iconName = 'book-outline';
              break;
          }

          return <Icon name={`${iconName}`} size={20} color={color} />;
        },
      })}>
      <TopTab.Screen name="Chat" component={ChatScreen} />
      <TopTab.Screen name="Contacts" component={ContactsScreen} />
      <TopTab.Screen name="Albums" component={AlbumsScreen} />
    </TopTab.Navigator>
  );
};
