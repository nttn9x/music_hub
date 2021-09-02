import React from 'react';
import {Button, ScreenLayout} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import Styles from '@styles';
import {StyleSheet, View} from 'react-native';
import {MainStack} from '@constants';

import Header from './home-header.component';

const Home = () => {
  const {t} = useTranslation('account');
  const navigation = useNavigation();

  const goToDashboardScreen = () => {
    navigation.navigate(MainStack.Dashboard);
  };

  return (
    <ScreenLayout>
      <Header />
      <View style={styles.root}>
        <Button
          onPress={goToDashboardScreen}
          label={'Go Back'}
          variant="outlined"
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, margin: Styles.gutter.container, justifyContent: 'center'},
});

export default Home;
