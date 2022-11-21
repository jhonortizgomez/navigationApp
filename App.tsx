import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import {StackNavigator} from './src/navigator/StackNavigatior';
// import {MenuDrawer} from './src/navigator/MenuDrawer';
import {Menu} from './src/navigator/Menu';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MenuDrawer /> */}
        <Menu />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
