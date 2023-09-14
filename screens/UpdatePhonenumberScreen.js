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
  NumberInput,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const UpdatePhonenumberScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const validateMobileNo = mobileNo => {
    var errorMessage = null;
    var mobileNumber = null;
    mobileNumber = mobileNo.toString();
    console.log('mobileNo' + mobileNumber);
    if (mobileNumber.length == 0) {
      // console.log("mobileNumber"+mobileNumber.length);
      errorMessage = 'Mobile number is required';
    } else if (mobileNumber.length == 10) {
      console.log('number' + mobileNumber.length);
      let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
      if (!regex.test(mobileNumber)) {
        errorMessage = 'Invalid mobile number(ex: 987XXXX789)';
      }
    } else if (mobileNumber.length < 10) {
      console.log('less' + mobileNumber.length);
      errorMessage = 'Enter 10 digit mobile number';
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
  const [existAcct, setExistAcct] = React.useState('');
  const [mobilenoErrorMsg, setMobilenoErrorMsg] = React.useState('');
  const [newAcct, setNewAcct] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'column' },
        dimensions.width
      )}
      hasTopSafeArea={false}
    >
      {/* Drawer */}
      <>
        {!showNav ? null : (
          <Surface
            style={StyleSheet.applyWidth(
              {
                backgroundColor: '"rgba(0, 0, 0, 0)"',
                flex: 2,
                flexDirection: 'row',
                height: '100%',
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: 5,
              },
              dimensions.width
            )}
          >
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Surface'],
                  paddingTop: 40,
                  width: '80%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                {/* Home */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      navigation.navigate('DashboardScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'Feather/home'} size={24} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'Home'}
                    </Text>
                  </View>
                </Touchable>
                {/* Manage Account */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      navigation.navigate('ManageAccountScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      name={
                        'MaterialCommunityIcons/account-arrow-right-outline'
                      }
                      size={24}
                    />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'Manage Account'}
                    </Text>
                  </View>
                </Touchable>
                {/* Notifications */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      navigation.navigate('NotificationsScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      name={'Ionicons/ios-notifications-circle-outline'}
                      size={24}
                    />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'Notifications'}
                    </Text>
                  </View>
                </Touchable>
                {/* Load and Quality */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('LoadQualityScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'Feather/loader'} size={24} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'Load & Quality'}
                    </Text>
                  </View>
                </Touchable>
                {/* Downloads */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('DownloadsScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'Feather/download'} size={24} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'Downloads'}
                    </Text>
                  </View>
                </Touchable>
                {/* FAQ */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('ContactUsScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'Feather/help-circle'} size={24} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'FAQ'}
                    </Text>
                  </View>
                </Touchable>
                {/* Feedback */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('FeedbackScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'MaterialIcons/feedback'} size={24} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'Feedback'}
                    </Text>
                  </View>
                </Touchable>
                {/* Help */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('ContactUsScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'Ionicons/md-help-buoy-outline'} size={24} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'Help'}
                    </Text>
                  </View>
                </Touchable>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Background'],
                    marginTop: -20,
                    paddingBottom: 24,
                    paddingLeft: 24,
                    paddingRight: 24,
                  },
                  dimensions.width
                )}
              ></View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { backgroundColor: '"rgba(0, 0, 0, 0)"', flex: 1 },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    setShowNav(!showNav);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { height: '100%', width: '100%' },
                  dimensions.width
                )}
              />
            </View>
          </Surface>
        )}
      </>
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
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['headerp 4'], {
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
          {/* Update Phone Number */}
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
            {'Update Phone Number'}
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
              name={'Entypo/phone'}
              size={24}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 10, paddingRight: 10 },
                dimensions.width
              )}
            >
              <NumberInput
                onChangeText={newNumberInputValue => {
                  try {
                    setNewAcct(newNumberInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'],
                  dimensions.width
                )}
                value={newAcct}
                changeTextDelay={500}
                editable={true}
                maxLength={10}
                placeholder={'New Mobile Number'}
                placeholderTextColor={theme.colors['Medium']}
              />
            </View>
          </View>
          {/* Service connection number message */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                alignSelf: 'flex-start',
                color: theme.colors['Error'],
                fontFamily: 'Roboto_400Regular',
                marginBottom: 30,
                textAlign: 'left',
              }),
              dimensions.width
            )}
          >
            {mobilenoErrorMsg}
          </Text>
          {/* Meter Number */}
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
              name={'Entypo/phone'}
              size={24}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 10, paddingRight: 10 },
                dimensions.width
              )}
            >
              <NumberInput
                onChangeText={newNumberInputValue => {
                  try {
                    setGlobalVariableValue({
                      key: 'mobileNumber',
                      value: newNumberInputValue,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'],
                  dimensions.width
                )}
                value={Constants['mobileNumber']}
                editable={false}
                changeTextDelay={500}
                maxLength={10}
                placeholder={'Old Mobile Number'}
                placeholderTextColor={theme.colors['Medium']}
              />
            </View>
          </View>
          {/* Submit */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const mobilenoErrorMsg = validateMobileNo(newAcct);
                  setMobilenoErrorMsg(mobilenoErrorMsg);
                  if (mobilenoErrorMsg?.length) {
                    return;
                  }
                  const adsercondetresult = (
                    await CISAPPApi.updateProfileMobileNumberPOST(Constants, {
                      accno: (() => {
                        const e = Constants['name'];
                        console.log(e);
                        return e;
                      })(),
                      newMobile: (() => {
                        const e = newAcct;
                        console.log(e);
                        return e;
                      })(),
                      oldMobile: (() => {
                        const e = Constants['mobileNumber'];
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
                  console.log(test);
                  if (messagejson?.length) {
                    return;
                  }
                  navigation.navigate('ConfirmOTPPhonenumberupdateScreen', {
                    oldMobileNumber: Constants['mobileNumber'],
                    newMobileNumber: newAcct,
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

export default withTheme(UpdatePhonenumberScreen);
