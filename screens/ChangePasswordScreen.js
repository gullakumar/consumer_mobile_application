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

const ChangePasswordScreen = props => {
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

  const validateOldPassword = password => {
    var errorMessage = null;
    if (!password.trim()) {
      errorMessage = 'Please enter old password';
    }
    return errorMessage;
  };

  const validateNewPassword = password => {
    var errorMessage = null;
    if (!password.trim()) {
      errorMessage = 'Please enter new password';
    }
    return errorMessage;
  };

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

  const { theme } = props;
  const { navigation } = props;

  const [changepasswordSuccessMsg, setChangepasswordSuccessMsg] =
    React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [hiddenNewPassword, setHiddenNewPassword] = React.useState(true);
  const [hiddenPassword, setHiddenPassword] = React.useState(true);
  const [newPassword, setNewPassword] = React.useState('');
  const [newPasswordErrorMg, setNewPasswordErrorMg] = React.useState('');
  const [oldPassword, setOldPassword] = React.useState('');
  const [oldPasswordErrorMg, setOldPasswordErrorMg] = React.useState('');
  const [visibleNewPassword, setVisibleNewPassword] = React.useState(false);
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
        {/* Change Password */}
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
          {'Change Password'}
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
        {/* Old password */}
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
                      setOldPassword(newTextInputValue);
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
                  value={oldPassword}
                  placeholder={'Old password'}
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
        {/* Old password */}
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
                      setOldPassword(newTextInputValue);
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
                  value={oldPassword}
                  placeholder={'Old password'}
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
        {/* Error Old password Message */}
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
          {oldPasswordErrorMg}
        </Text>
        {/* New password */}
        <>
          {!hiddenNewPassword ? null : (
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
                      setNewPassword(newTextInputValue);
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
                  value={newPassword}
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
                    setCheckboxValue2(newCheckboxValue);
                    setVisibleNewPassword(true);
                    setHiddenNewPassword(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                status={checkboxValue2}
                checkedIcon={'Ionicons/eye-off'}
                uncheckedIcon={'Ionicons/eye-off'}
              />
            </View>
          )}
        </>
        {/* New password */}
        <>
          {!visibleNewPassword ? null : (
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
                      setNewPassword(newTextInputValue);
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
                  value={newPassword}
                  placeholder={'New password'}
                  editable={true}
                  placeholderTextColor={theme.colors['Medium']}
                  secureTextEntry={false}
                />
              </View>
              <Checkbox
                onPress={newCheckboxValue => {
                  const checkboxValue = newCheckboxValue;
                  try {
                    setHiddenNewPassword(true);
                    setVisibleNewPassword(false);
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
        {/* Error new password msg */}
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
          {newPasswordErrorMg}
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
                const oldPasswordErrorMg = validateOldPassword(oldPassword);
                const newPasswordErrorMg = validateNewPassword(newPassword);
                setOldPasswordErrorMg(oldPasswordErrorMg);
                setNewPasswordErrorMg(newPasswordErrorMg);
                if (oldPasswordErrorMg?.length) {
                  return;
                }
                if (newPasswordErrorMg?.length) {
                  return;
                }
                setErrorMessage('');
                const changepasswordJson = (
                  await CISAPPApi.changePasswordPOST(Constants, {
                    accno: (() => {
                      const e = Constants['name'];
                      console.log(e);
                      return e;
                    })(),
                    newPwd: (() => {
                      const e = newPassword;
                      console.log(e);
                      return e;
                    })(),
                    oldPwd: (() => {
                      const e = oldPassword;
                      console.log(e);
                      return e;
                    })(),
                  })
                )?.json;
                console.log(changepasswordJson);
                const messagejson =
                  changepasswordJson?.[0].data?.error?.message;
                setErrorMessage(messagejson);
                const changepasswordSuccessMsg =
                  changepasswordJson && changepasswordJson[0].data[0].message;
                setChangepasswordSuccessMsg(changepasswordSuccessMsg);
                if (messagejson?.length) {
                  return;
                }
                navigation.navigate('ChangePasswordSuccessScreen', {
                  changePasswordSuccessMsg: changepasswordSuccessMsg,
                });
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

export default withTheme(ChangePasswordScreen);
