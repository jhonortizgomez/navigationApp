import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import { RootStackParam } from '../navigator/StackNavigatior';

interface Props extends StackScreenProps<RootStackParam, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{}</Text>
    </View>
  );
};
