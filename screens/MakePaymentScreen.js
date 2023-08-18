import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Button,
  Icon,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const MakePaymentScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const convertMonthNoToMonthNumber = monthNo => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthName = monthNames[monthNo - 1];
    console.log(monthName);
    return monthName;
  };

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

  const validateEmail = email => {
    var errorMessage = null;
    if (!email.trim()) {
      errorMessage = 'Email is required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        errorMessage = 'Invalid email';
      }
    }
    return errorMessage;
  };

  const validateAmount = amount => {
    var errorMessage = null;
    var amountValue = null;
    amountValue = amount.toString();
    console.log('amount' + amountValue);
    if (amountValue.length == 0) {
      errorMessage = 'Amount is required';
    }
    return errorMessage;
  };

  const buildConsumerString = Scno => {
    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const { theme } = props;
  const { navigation } = props;

  const [amount, setAmount] = React.useState('');
  const [amountErrorMsg, setAmountErrorMsg] = React.useState('');
  const [consumerId, setConsumerId] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [mobilenoErrorMsg, setMobilenoErrorMsg] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [office, setOffice] = React.useState('');
  const [officeId, setOfficeId] = React.useState('');
  const [radioButtonGroup2Value, setRadioButtonGroup2Value] =
    React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [ucode, setUcode] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
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
          {'Make Payment'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingTop: 20 },
          dimensions.width
        )}
        bounces={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Payment summary */}
        <View>
          {/* pr1 */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['pr1'], {
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 3,
                paddingTop: 3,
              }),
              dimensions.width
            )}
          >
            {/* card */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderColor: 'rgb(199, 198, 198)',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                }),
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 14,
                    textAlign: 'left',
                  },
                  dimensions.width
                )}
              >
                {'Name'}
              </Text>
              {/* cname */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 14,
                    opacity: 1,
                    textAlign: 'auto',
                  },
                  dimensions.width
                )}
              >
                {props.route?.params?.Name ?? ''}
              </Text>
            </View>
            {/* card */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderColor: 'rgb(199, 198, 198)',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                }),
                dimensions.width
              )}
            >
              {/* Service connection no */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 14,
                    textAlign: 'left',
                  },
                  dimensions.width
                )}
              >
                {'Service connection number'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 14,
                    opacity: 1,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {props.route?.params?.Scno ?? ''}
              </Text>
            </View>
          </View>
          {/* pr2 */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['accordion'], {
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 3,
              }),
              dimensions.width
            )}
          >
            <AccordionGroup
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'stretch',
                  color: theme.colors['ShopAppBlue'],
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 16,
                  paddingBottom: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              label={'Bill details'}
              caretSize={24}
              expanded={true}
              iconSize={24}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Bill month */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Bill month'}
                </Text>
                {/* Bill date */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {convertMonthNoToMonthNumber(
                    props.route?.params?.BillMonth ?? ''
                  )}
                  {' - '}
                  {props.route?.params?.billYear ?? ''}
                </Text>
              </View>
              {/* view */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Bill date */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Bill date'}
                </Text>
                {/* Date */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {props.route?.params?.BillDame ?? ''}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Bill number */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Bill number'}
                </Text>
                {/* Date */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {props.route?.params?.BillNo ?? ''}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Due Date */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Due date'}
                </Text>
                {/* last date */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {props.route?.params?.BillDueDate ?? ''}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Bill amount */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Bill amount'}
                </Text>
                {/* amount */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'₹'}
                  {props.route?.params?.BillAmount ?? ''}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Arrears */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Arrears'}
                </Text>
                {/* amount */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'₹'}
                  {props.route?.params?.Arrear ?? ''}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Rebate amount */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Rebate amount'}
                </Text>
                {/* amount */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'₹'}
                  {props.route?.params?.RebateGiven ?? ''}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 1,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Net payable amount */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Net payable amount'}
                </Text>
                {/* amount */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'₹'}
                  {props.route?.params?.ledgerAmt ?? ''}
                  {'\n'}
                </Text>
              </View>
            </AccordionGroup>
          </View>
          {/* Enter details */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['accordion'], {
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 3,
              }),
              dimensions.width
            )}
          >
            <AccordionGroup
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'stretch',
                  color: theme.colors['ShopAppBlue'],
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 16,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              label={'Enter details'}
              caretSize={24}
              expanded={true}
              iconSize={24}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    opacity: 1,
                    paddingLeft: 20,
                    paddingRight: 20,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Amount */}
                <View
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['uname'],
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Medium']}
                    name={'FontAwesome/rupee'}
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
                        const numberInputValue = newNumberInputValue;
                        try {
                          setAmount(newNumberInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.NumberInputStyles(theme)['Number Input'],
                        dimensions.width
                      )}
                      value={numberInputValue2}
                      changeTextDelay={500}
                      editable={true}
                      placeholder={'Amount'}
                      placeholderTextColor={theme.colors['Medium']}
                    />
                  </View>
                </View>
                {/* Amount valid message */}
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
                  {amountErrorMsg}
                </Text>
                {/* Mobile */}
                <View
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['uname'],
                      { marginTop: 8 }
                    ),
                    dimensions.width
                  )}
                >
                  <>
                    {!'+91' ? null : (
                      <Icon
                        color={theme.colors['Medium']}
                        name={'Entypo/phone'}
                        size={24}
                      />
                    )}
                  </>
                  <TextInput
                    style={StyleSheet.applyWidth(
                      {
                        borderRadius: 8,
                        fontFamily: 'Roboto_400Regular',
                        paddingBottom: 8,
                        paddingLeft: 5,
                        paddingRight: 2,
                        paddingTop: 8,
                        width: '14%',
                      },
                      dimensions.width
                    )}
                    disabled={true}
                    editable={false}
                    placeholder={'+91'}
                    placeholderTextColor={theme.colors['Medium']}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, paddingLeft: 10, paddingRight: 10 },
                      dimensions.width
                    )}
                  >
                    <NumberInput
                      onChangeText={newNumberInputValue => {
                        const numberInputValue = newNumberInputValue;
                        try {
                          setMobileNumber(newNumberInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.NumberInputStyles(theme)['Number Input'],
                          { fontFamily: 'Roboto_400Regular' }
                        ),
                        dimensions.width
                      )}
                      value={mobileNumber}
                      changeTextDelay={500}
                      editable={true}
                      maxLength={10}
                      placeholder={'1234567890'}
                      placeholderTextColor={theme.colors['Medium']}
                    />
                  </View>
                </View>
                {/* Mobile valid message */}
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Error'],
                      fontFamily: 'Roboto_400Regular',
                    }),
                    dimensions.width
                  )}
                >
                  {mobilenoErrorMsg}
                </Text>
                {/* Mail */}
                <View
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['uname'],
                      { marginTop: 8 }
                    ),
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Medium']}
                    name={'MaterialCommunityIcons/email'}
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
                          setEmail(newTextInputValue);
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
                      placeholder={'abcdefgh@gmail.com'}
                      editable={true}
                      placeholderTextColor={theme.colors['Medium']}
                    />
                  </View>
                </View>
                {/* Email Error message */}
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Error'],
                      fontFamily: 'Roboto_400Regular',
                    }),
                    dimensions.width
                  )}
                >
                  {emailErrorMsg}
                </Text>
              </View>
              {/* Section Header */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                    marginTop: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                  },
                  dimensions.width
                )}
              >
                {/* Heading */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      fontSize: 14,
                    },
                    dimensions.width
                  )}
                >
                  {'Select Payment Method'}
                </Text>
              </View>
              {/* Payment Methods */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'column' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { borderRadius: 12, overflow: 'hidden' },
                    dimensions.width
                  )}
                >
                  <RadioButtonGroup
                    onValueChange={newRadioButtonGroupValue => {
                      const radioButtonGroupValue = newRadioButtonGroupValue;
                      try {
                        setRadioButtonGroupValue(newRadioButtonGroupValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    value={radioButtonGroupValue}
                  >
                    {/* Payment Methods */}
                    <CISAPPApi.FetchPaymentGatewayPOST>
                      {({ loading, error, data, refetchPaymentGateway }) => {
                        const paymentMethodsData = data?.json;
                        if (loading) {
                          return <ActivityIndicator />;
                        }

                        if (
                          error ||
                          data?.status < 200 ||
                          data?.status >= 300
                        ) {
                          return <ActivityIndicator />;
                        }

                        return (
                          <FlashList
                            renderItem={({ item }) => {
                              const flashListData = item;
                              return (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      height: 64,
                                      justifyContent: 'space-between',
                                      paddingBottom: 10,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                      paddingTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Image
                                    style={StyleSheet.applyWidth(
                                      { height: 18, width: 60 },
                                      dimensions.width
                                    )}
                                    resizeMode={'cover'}
                                    source={{
                                      uri: `${flashListData?.attachment}`,
                                    }}
                                  />
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { flex: 1 },
                                      dimensions.width
                                    )}
                                  >
                                    <RadioButtonRow
                                      style={StyleSheet.applyWidth(
                                        { fontFamily: 'Inter_500Medium' },
                                        dimensions.width
                                      )}
                                      value={flashListData?.id}
                                      label={flashListData?.name}
                                      color={theme.colors.primary}
                                      unselectedColor={theme.colors.primary}
                                    />
                                  </View>
                                </View>
                              );
                            }}
                            data={
                              paymentMethodsData && paymentMethodsData[0].data
                            }
                            listKey={'5YvXe2Eo'}
                            keyExtractor={flashListData => flashListData?.id}
                            contentContainerStyle={StyleSheet.applyWidth(
                              {
                                borderRadius: 12,
                                overflow: 'hidden',
                                paddingBottom: 10,
                                paddingTop: 10,
                              },
                              dimensions.width
                            )}
                            estimatedItemSize={50}
                            numColumns={1}
                          />
                        );
                      }}
                    </CISAPPApi.FetchPaymentGatewayPOST>
                  </RadioButtonGroup>
                </View>
              </View>
            </AccordionGroup>
          </View>
        </View>
        {/* Pay */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const amountErrorMsg = validateAmount(amount);
                const mobilenoErrorMsg = validateMobileNo(mobileNumber);
                const emailErrorMsg = validateEmail(email);
                setAmountErrorMsg(amountErrorMsg);
                setMobilenoErrorMsg(mobilenoErrorMsg);
                setEmailErrorMsg(emailErrorMsg);
                if (false) {
                  return;
                }
                if (mobilenoErrorMsg?.length) {
                  return;
                }
                if (emailErrorMsg?.length) {
                  return;
                }
                const consumerDetailsJson = (
                  await CISAPPApi.consumerDetailsPOST(Constants, {
                    action: buildConsumerString(
                      props.route?.params?.Scno ?? ''
                    ),
                  })
                )?.json;
                buildConsumerString(props.route?.params?.Scno ?? '');
                console.log(consumerDetailsJson);
                const officeData = (
                  consumerDetailsJson && consumerDetailsJson[0]
                )?.data?.office;
                setOffice(officeData);
                const officeIdData = (
                  consumerDetailsJson && consumerDetailsJson[0]
                )?.data?.officeId;
                const ucodeData = (
                  consumerDetailsJson && consumerDetailsJson[0]
                )?.data?.ucode;
                setUcode(ucodeData);
                const consumerIdData = (
                  consumerDetailsJson && consumerDetailsJson[0]
                )?.data?.consumerId;
                setConsumerId(consumerIdData);
                const paymentJson = (
                  await CISAPPApi.payemntServicePOST(Constants, {
                    accno: (() => {
                      const e = props.route?.params?.accno ?? '';
                      console.log(e);
                      return e;
                    })(),
                    amount: (() => {
                      const e = amount;
                      console.log(e);
                      return e;
                    })(),
                    billid: (() => {
                      const e = props.route?.params?.Billid ?? '';
                      console.log(e);
                      return e;
                    })(),
                    consid: (() => {
                      const e = consumerIdData;
                      console.log(e);
                      return e;
                    })(),
                    from: (() => {
                      const e = 'MOBILE';
                      console.log(e);
                      return e;
                    })(),
                    gateway: (() => {
                      const e = radioButtonGroupValue;
                      console.log(e);
                      return e;
                    })(),
                    mobile: (() => {
                      const e = mobileNumber;
                      console.log(e);
                      return e;
                    })(),
                    name: (() => {
                      const e = props.route?.params?.Name ?? '';
                      console.log(e);
                      return e;
                    })(),
                    officeName: (() => {
                      const e = officeData;
                      console.log(e);
                      return e;
                    })(),
                    officeid: (() => {
                      const e = officeIdData;
                      console.log(e);
                      return e;
                    })(),
                    scno: (() => {
                      const e = props.route?.params?.Scno ?? '';
                      console.log(e);
                      return e;
                    })(),
                    ucode: (() => {
                      const e = ucodeData;
                      console.log(e);
                      return e;
                    })(),
                  })
                )?.json;
                console.log(paymentJson);
                const url = setGlobalVariableValue({
                  key: 'payemntfinalurl',
                  value: (paymentJson && paymentJson[0].data)?.data,
                });
                console.log(url);
                await WebBrowser.openBrowserAsync(`${url}`);
                navigation.navigate('DashboardScreen', {
                  name: props.route?.params?.Name ?? '',
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['GetFit Orange'],
              borderRadius: 14,
              fontFamily: 'Roboto_400Regular',
              fontSize: 16,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 35,
            },
            dimensions.width
          )}
          title={'Make Payment'}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MakePaymentScreen);
