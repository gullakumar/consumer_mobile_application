import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Checkbox,
  CheckboxRow,
  Divider,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

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

  const [ERROR_MESSAGE, setERROR_MESSAGE] = React.useState('');
  const [accountno, setAccountno] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [hiddenPassword, setHiddenPassword] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [profileDetails, setProfileDetails] = React.useState({});
  const [serviceconnectionnumber, setServiceconnectionnumber] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [visiblePassword, setVisiblePassword] = React.useState(false);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* header */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['fef hed'],
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
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Login to Your Account'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            alignContent: 'stretch',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            minHeight: 100,
          },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'always'}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'stretch',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-start',
              paddingBottom: 20,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Logo */}
          <Image
            style={StyleSheet.applyWidth(
              { height: 128, marginTop: 18, width: 128 },
              dimensions.width
            )}
            resizeMode={'cover'}
            source={Images.JBNL}
          />
          {/* error message */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Error'],
                fontFamily: 'Roboto_400Regular',
                marginBottom: 5,
                marginTop: 5,
              }),
              dimensions.width
            )}
          >
            {processErrorMessage(ERROR_MESSAGE)}
          </Text>
          {/* User Name */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
                marginBottom: 15,
                marginTop: 20,
                opacity: 1,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Medium']}
              size={24}
              name={'Ionicons/person'}
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
                    setServiceconnectionnumber(newTextInputValue);
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
                value={serviceconnectionnumber}
                placeholder={'User name'}
                editable={true}
                placeholderTextColor={theme.colors['Medium']}
              />
            </View>
          </View>
          {/* Password */}
          <>
            {!hiddenPassword ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['BG Gray'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 16,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    marginTop: 15,
                    paddingLeft: 20,
                    paddingRight: 20,
                    width: '100%',
                  },
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
                        setPassword(newTextInputValue);
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
                    value={password}
                    placeholder={'Password'}
                    editable={true}
                    secureTextEntry={true}
                    placeholderTextColor={theme.colors['Medium']}
                  />
                </View>
                <Checkbox
                  onPress={newCheckboxValue => {
                    const checkboxValue = newCheckboxValue;
                    try {
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
          {/* Password */}
          <>
            {!visiblePassword ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['BG Gray'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 16,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    marginTop: 15,
                    paddingLeft: 20,
                    paddingRight: 20,
                    width: '100%',
                  },
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
                        setPassword(newTextInputValue);
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
                    value={password}
                    placeholder={'Password'}
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
          {/* Sign in */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const logindata = (
                    await CISAPPApi.loginPOST(Constants, {
                      accountno: serviceconnectionnumber,
                      pwd: password,
                    })
                  )?.json;
                  console.log(logindata);
                  const messagejson = logindata?.[0].data?.error?.message;
                  setERROR_MESSAGE(messagejson);
                  const accountIdJson = JSON.parse(
                    (logindata && logindata[0])?.data[0]?.data
                  )?.ACCOUNT_ID;
                  const emailJson = JSON.parse(
                    (logindata && logindata[0])?.data[0]?.data
                  )?.EMAIL;
                  const mobileNumberJson = JSON.parse(
                    (logindata && logindata[0])?.data[0]?.data
                  )?.MOBILE_NUMBER;
                  const userIdJson = JSON.parse(
                    (logindata && logindata[0])?.data[0]?.data
                  )?.ID;
                  const consumerNoJson = JSON.parse(
                    (logindata && logindata[0])?.data[0]?.data
                  )?.CONSUMER_NUMBER;
                  setGlobalVariableValue({
                    key: 'name',
                    value: accountIdJson,
                  });
                  setGlobalVariableValue({
                    key: 'email',
                    value: emailJson,
                  });
                  setGlobalVariableValue({
                    key: 'mobileNumber',
                    value: mobileNumberJson,
                  });
                  setGlobalVariableValue({
                    key: 'userId',
                    value: userIdJson,
                  });
                  setGlobalVariableValue({
                    key: 'consumerNo',
                    value: consumerNoJson,
                  });
                  if (messagejson?.length) {
                    return;
                  }
                  navigation.navigate('DashboardScreen', {
                    Name: serviceconnectionnumber,
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
                marginBottom: 15,
                marginTop: 20,
                width: '100%',
              },
              dimensions.width
            )}
            title={'Login'}
          />
          {/* Login with OTP */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LoginOTPScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {'Login with OTP'}
              </Text>
            </View>
          </Touchable>
          {/* Forgot Password */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ForgotpasswordScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {'Forgot password?'}
              </Text>
            </View>
          </Touchable>
          {/* Sign up */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('RegisterScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Medium'],
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 15,
                  },
                  dimensions.width
                )}
              >
                {'Don’t have an account?'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 15,
                    marginLeft: 7,
                    textDecorationLine: 'underline',
                  },
                  dimensions.width
                )}
              >
                {'Register'}
              </Text>
            </View>
          </Touchable>
          {/* Quick Pay */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('QuickPayScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['GetFit Orange'],
                borderRadius: 14,
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                marginTop: 34,
                width: '100%',
              },
              dimensions.width
            )}
            title={'Quick Pay'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
