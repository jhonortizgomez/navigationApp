import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {logout, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;
  return (
    <View style={styles.globalMargin}>
      {isLoggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
