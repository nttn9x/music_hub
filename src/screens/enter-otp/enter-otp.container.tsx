import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import Styles from '@styles';
import {MainStack} from '@constants';
import {useTheme} from '@context/theme.context';
import {
  Button,
  TextInput,
  ScreenLayout,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from '@components';

import EnterOTPCursor from './enter-otp-cursor';

const OTP_LENGTH = 6;

const EnterOTP = () => {
  const {t} = useTranslation();
  const refInput = useRef(null);
  const [otp, setOTP] = useState('');
  const [focused, setFocus] = useState(true);
  const {
    theme: {
      palette: {background, text},
    },
  } = useTheme();
  const navigation = useNavigation();

  const goToDashboardScreen = () => {
    navigation.navigate(MainStack.Dashboard);
  };

  const onOTPPress = () => {
    refInput.current?.focus();
    setFocus(true);
  };

  const onOTPBlur = () => {
    setFocus(false);
  };

  const onOTPChange = (text: string) => {
    if (text.length > OTP_LENGTH) {
      return;
    }

    setOTP(text);
  };

  return (
    <ScreenLayout style={styles.root}>
      <KeyboardAvoidingView>
        <Text style={styles.title} align="center" variant="h6">
          {t('login.otp_note')}
        </Text>
        <TextInput
          ref={refInput}
          value={otp}
          onChangeText={onOTPChange}
          style={styles.textInput}
          keyboardType="number-pad"
          onBlur={onOTPBlur}
          autoFocus
        />
        <View flexDirection="row" style={styles.otps}>
          {Array(OTP_LENGTH)
            .fill(0)
            .map((n: any, i: number) => {
              const selected = focused && i === otp.length;
              return (
                <TouchableOpacity
                  key={i}
                  onPress={onOTPPress}
                  style={[
                    styles.otp,
                    selected && {borderColor: text.primary, borderWidth: 1},
                    {backgroundColor: background.paper},
                  ]}>
                  <Text variant="h4">{otp[i]}</Text>
                  {selected && <EnterOTPCursor />}
                </TouchableOpacity>
              );
            })}
        </View>
        <Button
          disabled={otp.length < OTP_LENGTH}
          onPress={goToDashboardScreen}
          label={t('login.verify')}
        />
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: Styles.gutter.container, justifyContent: 'center'},
  otps: {
    justifyContent: 'space-between',
    marginBottom: Styles.gutter.container,
  },
  otp: {
    position: 'relative',
    width: 50,
    height: 50,
    borderRadius: Styles.radius.button,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: Styles.gutter.container * 2,
  },
  textInput: {
    height: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

export default EnterOTP;
