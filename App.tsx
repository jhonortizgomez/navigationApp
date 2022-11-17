import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {StackNavigator} from './src/navigator/StackNavigatior';
// import {MenuDrawer} from './src/navigator/MenuDrawer';
import { Menu } from './src/navigator/Menu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuDrawer /> */}
      <Menu />
    </NavigationContainer>
  );
};

export default App;
