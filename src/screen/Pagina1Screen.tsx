/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
  //     ),
  //   });
  // }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'blue',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'orange',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Maria',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
