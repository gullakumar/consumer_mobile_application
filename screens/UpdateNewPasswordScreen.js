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

  const processErrorMessage = msg => {
    const scheme = {
      msg1: 'Password Changed Successfully',
      msg2: 'Problem while Sending OTP SMS',
      msg3: 'OTP send SuccessFully TO the existing Mobile',
      msg4: 'Input password details not same as in DB !',
      msg5: 'The user is already registered',
      msg6: 'You are not smart meter consumer',
      msg7: 'Invalid OTP',
      msg8: 'Problem while creating an user',
      msg9: 'User Creation Done Successfully',
      msg10: 'Mobile Number Doesnot exist for this consumer!',
      msg11: 'Problem while generating OTP!',
      msg12: 'Email ID Doesnot exist for this consumer in registration Table',
      msg13: 'OTP sent to your Registred Email Address',
      msg14: 'The OTP has expired!',
      msg15: 'Problem while updating password!',
      msg16: 'Existing email not Found',
      msg17: 'password details not found in the input data!',
      msg18: 'Old password and New Password must not be same !',
      msg19: 'Problem while updating password',
      msg20: 'OTP sent SuccessFully',
      msg21: 'Phone Number Changed Successfully',
      msg22: 'Logical Error',
      msg23: 'Entered consumer number is already registered',
      msg24: 'Entered consumer number already mapped',
      msg26: 'Accounts added for the existing consumer limit is exceeded',
      msg27: 'Should not same login account and entered account',
      msg28: '* Invalid Consumer Number',
      msg29: '* Invalid Credentials',
      msg30: 'Invalid Password',
      msg31: 'OTP Limit Exceeded, Please Try Again!',
      msg32: "Account Dosen't Have SmartMeter",
    };

    return scheme[msg];
  };

  const validateUpdatepassword = password => {
    var errorMessage = null;
    if (!password.trim()) {
      errorMessage = 'New password is required';
    }
    return errorMessage;
  };

  const validateConfirmpassword = password => {
    var errorMessage = null;
    if (!password.trim()) {
      errorMessage = 'Confirm password is required';
    }
    return errorMessage;
  };

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
  const [updateConfirmpasswordErrorMgs, setUpdateConfirmpasswordErrorMgs] =
    React.useState('');
  const [updatePasswordErrorMgs, setUpdatePasswordErrorMgs] =
    React.useState('');
  const [visiblePassword, setVisiblePassword] = React.useState(false);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
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
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
              size={24}
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
            alignSelf: 'flex-start',
            color: theme.colors['Error'],
            fontFamily: 'Roboto_400Regular',
            fontSize: 14,
            marginTop: 75,
            opacity: 1,
            paddingLeft: 20,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {processErrorMessage(errorMessage)}
      </Text>
      {/* OTP */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
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
                name={'FontAwesome/lock'}
                size={24}
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
                  placeholder={'New password'}
                  editable={true}
                  placeholderTextColor={theme.colors['Medium']}
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
                checkedIcon={'Ionicons/eye-off'}
                uncheckedIcon={'Ionicons/eye-off'}
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
                color={theme.colors['Custom Color_20']}
                name={'FontAwesome/lock'}
                size={24}
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
                  placeholder={'New password'}
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
                checkedIcon={'Ionicons/eye'}
                status={checkboxValue}
                uncheckedIcon={'Ionicons/eye'}
              />
            </View>
          )}
        </>
        {/* Error new password mgs */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              alignSelf: 'flex-start',
              color: theme.colors['Error'],
              fontFamily: 'Roboto_400Regular',
            }),
            dimensions.width
          )}
        >
          {updatePasswordErrorMgs}
        </Text>
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
            color={theme.colors['Medium']}
            name={'FontAwesome/lock'}
            size={24}
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
              placeholderTextColor={theme.colors['Medium']}
              secureTextEntry={true}
            />
          </View>
        </View>
        {/* Error new password mgs */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              alignSelf: 'flex-start',
              color: theme.colors['Error'],
              fontFamily: 'Roboto_400Regular',
            }),
            dimensions.width
          )}
        >
          {updateConfirmpasswordErrorMgs}
        </Text>
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
                const updatePasswordErrorMgs =
                  validateUpdatepassword(newpassword);
                const updateConfirmpasswordErrorMgs =
                  validateConfirmpassword(confirmpassword);
                setUpdatePasswordErrorMgs(updatePasswordErrorMgs);
                setUpdateConfirmpasswordErrorMgs(updateConfirmpasswordErrorMgs);
                if (updatePasswordErrorMgs?.length) {
                  return;
                }
                if (updateConfirmpasswordErrorMgs?.length) {
                  return;
                }
                setErrorMessage('');
                (
                  await CISAPPApi.aftersentOTPforgorpasswordPOST(Constants, {
                    accno: Constants['OTP_SERVICE_NUMBER'],
                    newPassword: newpassword,
                    otp: props.route?.params?.userEnteredOTP ?? '',
                    transid: Constants['OTP_ACK_NUMBER'],
                  })
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
