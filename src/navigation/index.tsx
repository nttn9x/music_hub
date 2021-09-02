import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainStack} from '@constants/navigation.constant';
import {Home, Dashboard, Profile} from '@screens';
import {useTheme} from '@context/theme.context';

import LoginNavigation from './login.navigation';
import AuthNavigation from './auth.navigation';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const {isDark} = useTheme();

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={MainStack.Login} component={LoginNavigation} />
        <Stack.Screen name={MainStack.Home} component={Home} />
        <Stack.Screen name={MainStack.Profile} component={Profile} />
        <Stack.Screen name={MainStack.Dashboard} component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
