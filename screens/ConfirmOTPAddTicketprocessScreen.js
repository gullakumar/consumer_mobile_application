import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  Link,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View, useWindowDimensions } from 'react-native';

const ConfirmOTPAddTicketprocessScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const otpVerify = (otpResult, otp) => {
    if (otpResult === otp) {
      // Navigate to the change password screen
      //console.log('Navigating to change password screen...');
      return otpVerify;
      // Add your navigation logic here
    } else {
      console.log('Incorrect OTP. Please try again.');
    }
  };

  const createOTP = () => {
    return `${otpValue1}${otpValue2}${otpValue3}${otpValue4}`;
  };

  const check_otp = otp => {
    const ChangePasswordScreen = () => {
      // Function to handle OTP verification
      const verifyOTP = () => {
        if (userOTP === otpValue) {
          // Navigate to the change password screen
          console.log('Navigating to change password screen...');
          // Add your navigation logic here
        } else {
          console.log('Incorrect OTP. Please try again.');
        }
      };
    };
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

  const startTimer = () => {
    const intervalId = setInterval(() => {
      if (seconds) {
        setSeconds(prev =>
          prev > 0 ? prev - 1 : (setSeconds(21), clearInterval(intervalId))
        );
      }
    }, 1000);

    return seconds;
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      const seconds = startTimer();
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [otpValue1, setOtpValue1] = React.useState('');
  const [otpValue2, setOtpValue2] = React.useState('');
  const [otpValue3, setOtpValue3] = React.useState('');
  const [otpValue4, setOtpValue4] = React.useState('');
  const [seconds, setSeconds] = React.useState(20);
  const [textInputValue, setTextInputValue] = React.useState(0);

  const oTPInput4AO2t6lNRef = React.useRef();
  const oTPInputFNWamtUxRef = React.useRef();
  const oTPInput4bYb6SayRef = React.useRef();

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
        {/* heading */}
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
          {'Confirm OTP Add Ticket'}
        </Text>
      </View>
      {/* OTP Mobile and email */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
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
        {'Check the OTP sent to your registered phone number and email address'}
      </Text>
      {/* error */}
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            alignSelf: 'flex-start',
            color: theme.colors['Error'],
            fontFamily: 'Roboto_400Regular',
            marginTop: 50,
            paddingLeft: 30,
            paddingTop: 5,
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {processErrorMessage(Constants['ERROR_MESSAGE'])}
      </Text>
      {/* OTP */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* OTP Input */}
        <TextInput
          onChangeText={newOTPInputValue => {
            try {
              setOtpValue1(newOTPInputValue);
              oTPInput4AO2t6lNRef.current.focus();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 61,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: '21%',
            },
            dimensions.width
          )}
          value={otpValue1}
          placeholder={'*'}
          editable={true}
          keyboardType={'numeric'}
          maxLength={1}
          placeholderTextColor={theme.colors['Medium']}
        />
        {/* OTP Input */}
        <TextInput
          onChangeText={newOTPInputValue => {
            try {
              setOtpValue2(newOTPInputValue);
              oTPInputFNWamtUxRef.current.focus();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 61,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: '21%',
            },
            dimensions.width
          )}
          value={otpValue2}
          placeholder={'*'}
          editable={true}
          keyboardType={'numeric'}
          maxLength={1}
          placeholderTextColor={theme.colors['Medium']}
          ref={oTPInput4AO2t6lNRef}
        />
        {/* OTP Input */}
        <TextInput
          onChangeText={newOTPInputValue => {
            try {
              setOtpValue3(newOTPInputValue);
              oTPInput4bYb6SayRef.current.focus();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 61,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: '21%',
            },
            dimensions.width
          )}
          value={otpValue3}
          placeholder={'*'}
          editable={true}
          keyboardType={'numeric'}
          maxLength={1}
          placeholderTextColor={theme.colors['Medium']}
          ref={oTPInputFNWamtUxRef}
        />
        {/* OTP Input */}
        <TextInput
          onChangeText={newOTPInputValue => {
            try {
              setOtpValue4(newOTPInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 61,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: '21%',
            },
            dimensions.width
          )}
          value={otpValue4}
          placeholder={'*'}
          editable={true}
          keyboardType={'numeric'}
          maxLength={1}
          placeholderTextColor={theme.colors['Medium']}
          ref={oTPInput4bYb6SayRef}
        />
      </View>
      {/* Resend otp */}
      <View
        style={StyleSheet.applyWidth(
          { alignSelf: 'center', marginTop: 45 },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                const seconds = startTimer();
                setSeconds(seconds);
                const otpvalue = (
                  await CISAPPApi.guestRaiseTicketSendOTPPOST(Constants, {
                    accno: props.route?.params?.userenterscno ?? '',
                  })
                )?.json;
                const test = setGlobalVariableValue({
                  key: 'OTP_ACK_NUMBER',
                  value: JSON.parse((otpvalue && otpvalue[0])?.data[0]?.data)
                    ?.id,
                });
                setGlobalVariableValue({
                  key: 'name',
                  value: props.route?.params?.userenterscno ?? '',
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* Resend code */}
          <Text
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_400Regular',
                fontSize: 14,
                opacity: 1,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Resend OTP'}
            {/* timer */}
            <>
              {!(seconds !== 21) ? null : (
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color'],
                      fontFamily: 'System',
                      fontSize: 15,
                      fontWeight: '600',
                      opacity: 1,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {seconds}
                  {' sec'}
                </Text>
              )}
            </>
          </Text>
        </Touchable>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Continue */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const otpResult = createOTP();
                console.log(otpResult);
                const confirmotp = (
                  await CISAPPApi.guestRaiseTicketAfterSendOTPPOST(Constants, {
                    otp: otpResult,
                    transid: Constants['OTP_ACK_NUMBER'],
                  })
                )?.json;
                const messionj = confirmotp?.[0].data?.error?.message;
                console.log(messionj);
                setGlobalVariableValue({
                  key: 'ERROR_MESSAGE',
                  value: messionj,
                });
                if (messionj?.length) {
                  return;
                }
                navigation.navigate('RaiseTicketGuestScreen', {
                  userEnteredOTP: otpResult,
                  userenterscno: props.route?.params?.userenterscno ?? '',
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
          title={'Continue '}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ConfirmOTPAddTicketprocessScreen);
