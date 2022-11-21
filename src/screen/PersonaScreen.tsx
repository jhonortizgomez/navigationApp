/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParam} from '../navigator/StackNavigatior';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParam, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  const params = route.params;
  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{}</Text>
    </View>
  );
};
