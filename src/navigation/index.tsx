import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainStack} from '@constants/navigation.constant';
import {Home, Dashboard} from '@screens';
import {useTheme} from '@context/theme.context';

import LoginNavigation from './login.navigation';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const {isDark, theme} = useTheme();

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.palette.background.body}}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={MainStack.Login} component={LoginNavigation} />
        <Stack.Screen name={MainStack.Dashboard} component={Dashboard} />
        <Stack.Screen name={MainStack.Home} component={Home} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigation;
