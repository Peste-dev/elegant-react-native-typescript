import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from './store/selectors';
import navigationTheme from './navigation/navigationTheme';
import {navigationRef} from './navigation/rootNavigation';
import {AppNavigator, AuthNavigator} from './navigation';

const App = () => {
  const {loggedIn} = useSelector(selectUser);
  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {loggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
