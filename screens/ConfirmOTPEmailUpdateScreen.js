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
  PinInput,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View, useWindowDimensions } from 'react-native';

const ConfirmOTPEmailUpdateScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const otpValidation = otp => {
    var errorMessage = null;
    if (!otp.trim()) {
      errorMessage = 'Otp is required';
    }
    return errorMessage;
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
      msg33: 'Group Created',
      msg34: 'Group Creation Error',
      msg35: 'Added Group is Valid',
      msg36: 'Account Added Successfully',
      msg37: 'Add Account Error',
    };

    return scheme[msg];
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
      setSeconds(seconds);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [codeInputValue, setCodeInputValue] = React.useState(undefined);
  const [otpErrorMsg, setOtpErrorMsg] = React.useState('');
  const [otpValue1, setOtpValue1] = React.useState('');
  const [otpValue2, setOtpValue2] = React.useState('');
  const [otpValue3, setOtpValue3] = React.useState('');
  const [otpValue4, setOtpValue4] = React.useState('');
  const [pinInputValue, setPinInputValue] = React.useState('');
  const [seconds, setSeconds] = React.useState(21);
  const [textInputValue, setTextInputValue] = React.useState(0);

  const oTPInputSclbgD9TRef = React.useRef();
  const oTPInputNT0msyJuRef = React.useRef();
  const oTPInputFGZTagzORef = React.useRef();

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
          {'Confirm OTP'}
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
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        <PinInput
          renderItem={({ cellValue, isFocused }) => {
            return null;
          }}
          onInputFull={finalValue => {
            const codeInputValue = finalValue;
            try {
            } catch (err) {
              console.error(err);
            }
          }}
          onChangeText={newPinInputValue => {
            const codeInputValue = newPinInputValue;
            try {
              setPinInputValue(newPinInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.PinInputStyles(theme)['Pin Input'],
              {
                backgroundColor: theme.colors['BG Gray'],
                borderColor: theme.colors['Divider'],
                borderRadius: 16,
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '700',
                maxHeight: 61,
                padding: 8,
                width: '100%',
              }
            ),
            dimensions.width
          )}
          value={pinInputValue}
          autoComplete={'one-time-code'}
          blurOnFull={true}
          cellCount={4}
          changeTextDelay={500}
          clearOnCellFocus={true}
          focusedBorderColor={theme.colors.primary}
          keyboardType={'number-pad'}
        />
      </View>

      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            color: theme.colors['Error'],
            fontFamily: 'Roboto_400Regular',
            paddingLeft: 30,
          }),
          dimensions.width
        )}
      >
        {otpErrorMsg}
      </Text>
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
                const adsercondetresult = (
                  await CISAPPApi.updateEmailPOST(Constants, {
                    accno: Constants['name'],
                    newEmail: props.route?.params?.newEmail ?? '',
                    oldEmail: props.route?.params?.oldEmail ?? '',
                    userId: Constants['userId'],
                  })
                )?.json;
                console.log(adsercondetresult);
                const test = setGlobalVariableValue({
                  key: 'OTP_ACK_NUMBER',
                  value: JSON.parse(
                    (adsercondetresult && adsercondetresult[0])?.data[0]?.data
                  )?.id,
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
                      letterSpacing: 0.3,
                      lineHeight: 21,
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
                const otpErrorMsg = otpValidation(pinInputValue);
                setOtpErrorMsg(otpErrorMsg);
                if (otpErrorMsg?.length) {
                  return;
                }
                const confirmotp = (
                  await CISAPPApi.oTPEmailUpdatePOST(Constants, {
                    accno: (() => {
                      const e = Constants['name'];
                      console.log(e);
                      return e;
                    })(),
                    newEmail: (() => {
                      const e = props.route?.params?.newEmail ?? '';
                      console.log(e);
                      return e;
                    })(),
                    oldEmail: (() => {
                      const e = Constants['email'];
                      console.log(e);
                      return e;
                    })(),
                    otp: (() => {
                      const e = pinInputValue;
                      console.log(e);
                      return e;
                    })(),
                    txid: (() => {
                      const e = Constants['OTP_ACK_NUMBER'];
                      console.log(e);
                      return e;
                    })(),
                    userId: (() => {
                      const e = Constants['userId'];
                      console.log(e);
                      return e;
                    })(),
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
                navigation.navigate('ProfileOptionsScreen');
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

export default withTheme(ConfirmOTPEmailUpdateScreen);
