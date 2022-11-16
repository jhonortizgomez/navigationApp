import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Pagina1Screen} from '../screen/Pagina1Screen';
import {Pagina2Screen} from '../screen/Pagina2Screen';
import {Pagina3Screen} from '../screen/Pagina3Screen';
import {PersonaScreen} from '../screen/PersonaScreen';

export type RootStackParam = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParam>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'trasparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Pagina 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Pagina 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Pagina 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
