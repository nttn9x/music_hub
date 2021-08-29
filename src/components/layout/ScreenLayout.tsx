import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useTheme} from '@context/theme.context';

const ScreenLayout = ({style, ...props}: any) => {
  const {
    theme: {
      palette: {background},
    },
  } = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: background.body}}>
      <View
        style={[styles.root, {backgroundColor: background.body}, style]}
        {...props}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export {ScreenLayout};
