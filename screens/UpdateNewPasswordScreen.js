import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Checkbox,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const UpdateNewPasswordScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const passwordUpdate = (newPwd, confirmPwd) => {
    console.log('newPassword' + newPwd);
    console.log('confirmPassword' + confirmPwd);
    let customErrorMessage = null;
    if (newPwd != confirmPwd) {
      customErrorMessage = 'Passwords do not match';
      return customErrorMessage;
    }
  };

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [confirmpassword, setConfirmpassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [hiddenPassword, setHiddenPassword] = React.useState(true);
  const [newpassword, setNewpassword] = React.useState('');
  const [visiblePassword, setVisiblePassword] = React.useState(false);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              name={'Ionicons/arrow-back-sharp'}
              color={theme.colors['Custom Color_2']}
            />
          </Touchable>
        </View>
        {/* Update new password */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 12,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Update  Password'}
        </Text>
      </View>
      {/* Error Message */}
      <Text
        style={StyleSheet.applyWidth(
          {
            alignSelf: 'center',
            color: theme.colors['Error'],
            fontFamily: 'Roboto_400Regular',
            fontSize: 14,
            letterSpacing: 0.3,
            lineHeight: 21,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 75,
            opacity: 1,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {errorMessage}
      </Text>
      {/* OTP */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            marginTop: 50,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* password */}
        <>
          {!hiddenPassword ? null : (
            <View
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['password'],
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Medium']}
                size={24}
                name={'FontAwesome/lock'}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 10, paddingRight: 10 },
                  dimensions.width
                )}
              >
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setNewpassword(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      fontFamily: 'Roboto_400Regular',
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={newpassword}
                  placeholder={'Enter new password'}
                  placeholderTextColor={theme.colors['Medium']}
                  editable={true}
                  secureTextEntry={true}
                />
              </View>
              <Checkbox
                onPress={newCheckboxValue => {
                  const checkboxValue = newCheckboxValue;
                  try {
                    setCheckboxValue(newCheckboxValue);
                    setVisiblePassword(true);
                    setHiddenPassword(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                status={checkboxValue}
                uncheckedIcon={'Ionicons/eye-off'}
                checkedIcon={'Ionicons/eye-off'}
              />
            </View>
          )}
        </>
        {/* password */}
        <>
          {!visiblePassword ? null : (
            <View
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['password'],
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors['Custom Color_20']}
                name={'FontAwesome/lock'}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 10, paddingRight: 10 },
                  dimensions.width
                )}
              >
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      fontFamily: 'Roboto_400Regular',
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={newpassword}
                  placeholder={'Enter new password'}
                  editable={true}
                  placeholderTextColor={theme.colors['Custom Color_20']}
                  secureTextEntry={false}
                />
              </View>
              <Checkbox
                onPress={newCheckboxValue => {
                  const checkboxValue = newCheckboxValue;
                  try {
                    setHiddenPassword(true);
                    setVisiblePassword(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                status={checkboxValue}
                uncheckedIcon={'Ionicons/eye'}
                checkedIcon={'Ionicons/eye'}
              />
            </View>
          )}
        </>
        {/* password */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['password'], {
              marginTop: 30,
            }),
            dimensions.width
          )}
        >
          <Icon
            size={24}
            name={'FontAwesome/lock'}
            color={theme.colors['Medium']}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 10, paddingRight: 10 },
              dimensions.width
            )}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setConfirmpassword(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  fontFamily: 'Roboto_400Regular',
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={confirmpassword}
              placeholder={'Confirm password'}
              editable={true}
              secureTextEntry={true}
              placeholderTextColor={theme.colors['Medium']}
            />
          </View>
        </View>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Submit */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                setErrorMessage('');
                (
                  await CISAPPApi.aftersentOTPforgorpasswordPOSTStatusAndText(
                    Constants,
                    {
                      accno: Constants['OTP_SERVICE_NUMBER'],
                      newPassword: newpassword,
                      otp: props.route?.params?.userEnteredOTP ?? '',
                      transid: Constants['OTP_ACK_NUMBER'],
                    }
                  )
                )?.json;
                const passwordResult = passwordUpdate(
                  (() => {
                    const e = newpassword;
                    console.log(e);
                    return e;
                  })(),
                  (() => {
                    const e = confirmpassword;
                    console.log(e);
                    return e;
                  })()
                );
                console.log(passwordResult);
                setErrorMessage(passwordResult);
                if (passwordResult?.length) {
                  return;
                }
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 14,
              fontFamily: 'Roboto_400Regular',
              fontSize: 16,
              marginTop: 50,
            },
            dimensions.width
          )}
          title={'Submit'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(UpdateNewPasswordScreen);
