import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {routes} from '../../navigation/routes';

const Welcome = () => {
  const navigator = useNavigation();
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate(routes.LOGIN as never);
        }}>
        <Text>test</Text>
      </TouchableOpacity>
      <Text>welcome</Text>
    </View>
  );
};

export default Welcome;
