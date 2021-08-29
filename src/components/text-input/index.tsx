import React from 'react';
import {
  I18nManager,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import Styles from '@styles';

import {useTheme} from '@context/theme.context';

export interface ITextInputProps extends TextInputProps {
  variant?: 'outlined' | 'normal';
  children?: any;
  endIcon?: any;
  startIcon?: any;
  ref?: any;
}

const CustomTextInput = React.forwardRef(
  (
    {style, startIcon, endIcon, variant, ...props}: ITextInputProps,
    ref: any,
  ) => {
    const {isDark, theme} = useTheme();

    return (
      <View
        style={[
          styleLayouts.root,
          {backgroundColor: theme.palette.background.paper},
          variant === 'outlined' && {
            borderColor: theme.palette.border,
            borderWidth: 1,
          },
          style,
        ]}>
        {startIcon && <View style={styleLayouts.startIcon}>{startIcon}</View>}
        <TextInput
          ref={ref}
          keyboardAppearance={isDark ? 'dark' : 'light'}
          style={[styleLayouts.textInput, {color: theme.palette.text.primary}]}
          {...props}
        />
        {endIcon && <View style={styleLayouts.endIcon}>{endIcon}</View>}
      </View>
    );
  },
);

CustomTextInput.defaultProps = {
  variant: 'normal',
  maxLength: 100,
};

const styleLayouts = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: Styles.fontSize.body,
    fontFamily: Styles.fontFamily.regular,
    borderRadius: Styles.radius.button,
    paddingVertical: Styles.gutter.component,
    paddingHorizontal: Styles.gutter.container,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    height: Styles.verticalScale(40),
  },
  startIcon: {
    marginRight: Styles.gutter.text,
  },
  endIcon: {
    marginLeft: Styles.gutter.text,
  },
  textInput: {flex: 1, padding: 0},
});

export {CustomTextInput as TextInput};
