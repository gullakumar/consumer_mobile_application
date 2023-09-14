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
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const AddTicketProcessGuestScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const myFunctionName = async a => {
    console.log(a);
    let t = await JSON.parse(a);
    console.log(t);
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

  const validateScno = scNo => {
    var errorMessage = null;
    if (!scNo.trim()) {
      errorMessage = 'Service connection number is required';
    }
    return errorMessage;
  };

  const { theme } = props;
  const { navigation } = props;

  const [afterotpvalue, setAfterotpvalue] = React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [serviceconnectionnumber, setServiceconnectionnumber] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

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
        {/* Forgot passwords */}
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
          {'Raise Ticket\n'}
        </Text>
      </View>
      {/* error message */}
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            alignSelf: 'flex-start',
            color: theme.colors['Error'],
            fontFamily: 'Roboto_400Regular',
            marginTop: 40,
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
            flexDirection: 'column',
            height: 50,
            justifyContent: 'space-evenly',
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* consumer no */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['consumer no'],
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Medium']}
            name={'MaterialIcons/house'}
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
              placeholder={'Service connection number'}
              editable={true}
              placeholderTextColor={theme.colors['Medium']}
            />
          </View>
        </View>
      </View>

      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            color: theme.colors['Error'],
            fontFamily: 'Roboto_400Regular',
            paddingLeft: 20,
          }),
          dimensions.width
        )}
      >
        {scnoErrorMsg}
      </Text>

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
                const scnoErrorMsg = validateScno(serviceconnectionnumber);
                setScnoErrorMsg(scnoErrorMsg);
                if (scnoErrorMsg?.length) {
                  return;
                }
                const otpvalue = (
                  await CISAPPApi.guestRaiseTicketSendOTPPOST(Constants, {
                    accno: serviceconnectionnumber,
                  })
                )?.json;
                console.log(otpvalue);
                const messagejson = otpvalue?.[0].data?.error?.message;
                setGlobalVariableValue({
                  key: 'ERROR_MESSAGE',
                  value: messagejson,
                });
                const test = setGlobalVariableValue({
                  key: 'OTP_ACK_NUMBER',
                  value: JSON.parse((otpvalue && otpvalue[0])?.data[0]?.data)
                    ?.id,
                });
                setGlobalVariableValue({
                  key: 'OTP_SERVICE_NUMBER',
                  value: serviceconnectionnumber,
                });
                if (messagejson?.length) {
                  return;
                }
                navigation.navigate('ConfirmOTPAddTicketprocessScreen', {
                  userenterscno: serviceconnectionnumber,
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            { borderRadius: 14, fontSize: 16, marginTop: 35 },
            dimensions.width
          )}
          title={'Submit'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AddTicketProcessGuestScreen);
