/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina 1 Screen</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>Navegar con argumentos</Text>

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
