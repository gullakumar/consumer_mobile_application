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
  Circle,
  CircleImage,
  DatePicker,
  Icon,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const UpdateEmailScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const updateOldpassword = email => {
    var errorMessage = null;
    if (!email.trim()) {
      errorMessage = 'Old Email is required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        errorMessage = 'Invalid email';
      }
    }
    return errorMessage;
  };

  const validateNewEmail = email => {
    var errorMessage = null;
    if (!email.trim()) {
      errorMessage = 'New Email is required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        errorMessage = 'Invalid email';
      }
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

  const [date, setDate] = React.useState(new Date());
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [emailErrorMsg2, setEmailErrorMsg2] = React.useState('');
  const [existAcct, setExistAcct] = React.useState('');
  const [newAcct, setNewAcct] = React.useState('');
  const [newemail, setNewemail] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'column' },
        dimensions.width
      )}
      hasTopSafeArea={false}
    >
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, flexBasis: 1, justifyContent: 'flex-start' },
          dimensions.width
        )}
      >
        {/* headerp */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['headerp 5'], {
              marginTop: 45,
            }),
            dimensions.width
          )}
        >
          {/* Back btn */}
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  height: 44,
                  justifyContent: 'center',
                  width: 44,
                },
                dimensions.width
              )}
            >
              <Icon name={'AntDesign/arrowleft'} size={24} />
            </View>
          </Touchable>
          {/* View bill and make payment */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Roboto_700Bold',
                fontSize: 18,
                marginLeft: 10,
              },
              dimensions.width
            )}
          >
            {'Update Email'}
          </Text>
        </View>
        {/* amblock */}
        <View
          style={StyleSheet.applyWidth(
            {
              justifyContent: 'flex-start',
              marginTop: 40,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {/* error message */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                alignSelf: 'flex-start',
                color: theme.colors['Error'],
                fontFamily: 'Roboto_400Regular',
                paddingBottom: 20,
              }),
              dimensions.width
            )}
          >
            {processErrorMessage(Constants['ERROR_MESSAGE'])}
          </Text>
          {/* Service connection number */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['user name'], {
                height: 50,
                paddingLeft: 20,
                paddingRight: 20,
              }),
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Medium']}
              name={'Ionicons/mail'}
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
                    setNewemail(newTextInputValue);
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
                value={newemail}
                placeholder={'New Email'}
                editable={true}
                placeholderTextColor={theme.colors['Medium']}
              />
            </View>
          </View>
          {/* Email Error message */}
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
            {emailErrorMsg}
          </Text>
          {/* Meter Number */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['user name'], {
                height: 50,
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
              }),
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Medium']}
              name={'Ionicons/mail'}
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
                    setGlobalVariableValue({
                      key: 'email',
                      value: newTextInputValue,
                    });
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
                value={Constants['email']}
                editable={false}
                placeholder={'Old Email'}
                placeholderTextColor={theme.colors['Medium']}
              />
            </View>
          </View>
          {/* Old email Error mgs */}
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
            {emailErrorMsg2}
          </Text>
          {/* Submit */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const newEmailErrorMgs = validateNewEmail(newemail);
                  const oldemailErrorMsg = updateOldpassword(
                    Constants['email']
                  );
                  setEmailErrorMsg(newEmailErrorMgs);
                  setEmailErrorMsg2(oldemailErrorMsg);
                  if (newEmailErrorMgs?.length) {
                    return;
                  }
                  if (oldemailErrorMsg?.length) {
                    return;
                  }
                  const adsercondetresult = (
                    await CISAPPApi.updateEmailPOST(Constants, {
                      accno: (() => {
                        const e = Constants['name'];
                        console.log(e);
                        return e;
                      })(),
                      newEmail: (() => {
                        const e = newemail;
                        console.log(e);
                        return e;
                      })(),
                      oldEmail: (() => {
                        const e = Constants['email'];
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
                  console.log(adsercondetresult);
                  const messagejson =
                    adsercondetresult?.[0].data?.error?.message;
                  setGlobalVariableValue({
                    key: 'ERROR_MESSAGE',
                    value: messagejson,
                  });
                  const test = setGlobalVariableValue({
                    key: 'OTP_ACK_NUMBER',
                    value: JSON.parse(
                      (adsercondetresult && adsercondetresult[0])?.data[0]?.data
                    )?.id,
                  });
                  setGlobalVariableValue({
                    key: 'new_acc',
                    value: newAcct,
                  });
                  setGlobalVariableValue({
                    key: 'exi_acc',
                    value: existAcct,
                  });
                  if (messagejson?.length) {
                    return;
                  }
                  navigation.navigate('ConfirmOTPEmailUpdateScreen', {
                    oldEmail: Constants['email'],
                    newEmail: newemail,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Submit'], {
                borderRadius: 14,
                fontSize: 16,
              }),
              dimensions.width
            )}
            title={'Submit'}
          />
        </View>
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-around' },
            dimensions.width
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(UpdateEmailScreen);
