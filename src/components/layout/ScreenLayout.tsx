import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useTheme} from '@context/theme.context';

const ScreenLayout = ({style, ...props}: any) => {
  const {
    theme: {
      palette: {background},
    },
  } = useTheme();
  return (
    <LinearGradient
      colors={['#2C3137', '#17191D']}
      useAngle={true}
      angle={135}
      angleCenter={{x: 0.5, y: 0.5}}
      style={[styles.root, {backgroundColor: background.body}, style]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={[styles.root, style]} {...props} />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export {ScreenLayout};
