import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina 2 Screen</Text>
      <Button
        title="Ir pagina 1"
        onPress={() => navigator.navigate('Pagina1Screen')}
      />
      <Button
        title="Ir pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
