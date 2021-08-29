import React from 'react';

import {StyleSheet, View} from 'react-native';
import {useTheme} from '@context/theme.context';

const ScreenLayout = ({style, ...props}: any) => {
  const {
    theme: {
      palette: {background},
    },
  } = useTheme();
  return (
    <View
      style={[styles.root, {backgroundColor: background.body}, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export {ScreenLayout};
