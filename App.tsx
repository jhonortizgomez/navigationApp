import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigatior';
import {MenuDrawer} from './src/navigator/MenuDrawer';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuDrawer />
    </NavigationContainer>
  );
};

export default App;
