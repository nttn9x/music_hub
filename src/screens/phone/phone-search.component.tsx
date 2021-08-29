import React from 'react';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Button, View, TextInput} from '@components';
import Styles from '@styles';

const PhoneSearch = ({navigation}: any) => {
  const {t} = useTranslation();
  return (
    <View flexDirection="row">
      <TextInput style={styles.input} />
      <Button
        onPress={() => navigation.goBack()}
        label={t('action.cancel')}
        variant="link"
        color="primary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {flex: 1},
});

export default PhoneSearch;
