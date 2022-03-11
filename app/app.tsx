import 'react-native-gesture-handler';

import { AppNavigator, AuthNavigator } from '@app/navigation';
import navigationTheme from '@app/navigation/navigationTheme';
import { navigationRef } from '@app/navigation/rootNavigation';
import { selectUser } from '@app/store/selectors/user';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
    const { loggedIn } = useSelector(selectUser);
    return (
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
            {loggedIn ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default App;
