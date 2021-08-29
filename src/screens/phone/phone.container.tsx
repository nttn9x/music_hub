import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, ScreenLayout, View, TextInput} from '@components';
import Styles from '@styles';

import usePhoneHook from './phone.hook';

import PhoneSearch from './phone-search.component';
import PhoneData from './phone-list.component';

const Phone = () => {
  const {firstLoad} = usePhoneHook();
  return (
    <ScreenLayout style={styles.root}>
      <PhoneSearch />
      {!firstLoad && <PhoneData />}
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: Styles.gutter.container},
});

export default Phone;
