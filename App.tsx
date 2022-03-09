/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {selectUser} from './app/store/selectors';
import {login} from './app/store/reducers/user';
import store from './app/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log(
    '🚀 ~ file: App.tsx ~ line 39 ~ App ~ backgroundStyle',
    backgroundStyle,
  );

  const Test = () => {
    const {loggedIn} = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
      <View style={{backgroundColor: 'blue', padding: 10}}>
        <Text>{loggedIn ? 'true' : 'false'}</Text>
        <TouchableOpacity onPress={() => dispatch(login('true'))}>
          <View style={{backgroundColor: 'white', padding: 10}}>
            <Text>login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Provider store={store}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'red',
              padding: 10,
            }}>
            <Text>sds</Text>
          </View>
        </TouchableOpacity>
        <Test />
        <Text>Test</Text>
      </View>
    </Provider>
  );
};

export default App;
