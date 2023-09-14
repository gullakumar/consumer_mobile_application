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
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const QuickPayScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const buildString = Scno => {
    console.log(`billing/rest/getBillDataWss/${Scno}`);
    return `billing/rest/getBillDataWss/${Scno}`;
  };

  const validateScno = scNo => {
    var errorMessage = null;
    if (!scNo.trim()) {
      errorMessage = 'Service connection number is required';
    }
    return errorMessage;
  };

  const buildConsumerString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const { theme } = props;
  const { navigation } = props;

  const [availableBalance, setAvailableBalance] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [consumerName, setConsumerName] = React.useState('');
  const [consumerScNo, setConsumerScNo] = React.useState('');
  const [meterNumber, setMeterNumber] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [viewbilldetails, setViewbilldetails] = React.useState({});

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Header 2'],
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
          {'Quick Pay'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignItems: 'stretch',
            alignSelf: 'stretch',
            flexWrap: 'nowrap',
            justifyContent: 'space-around',
            paddingBottom: 20,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* Enter custmoer service number */}
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
                  setTextInputValue(newTextInputValue);
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
              value={textInputValue}
              placeholder={'Service connection number'}
              editable={true}
              placeholderTextColor={theme.colors['Medium']}
            />
          </View>
        </View>
        {/* prepaid/post card */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['postpaid view 2'],
              {
                marginBottom: 5,
                marginTop: 10,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              }
            ),
            dimensions.width
          )}
        >
          {/* Prepaid */}
          <>
            {!(prepaidFlag === 'Y') ? null : (
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Roboto_400Regular',
                    textAlign: 'right',
                  }),
                  dimensions.width
                )}
              >
                {'Prepaid'}
              </Text>
            )}
          </>
          {/* Postpaid */}
          <>
            {!(prepaidFlag === 'N') ? null : (
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Roboto_400Regular',
                    textAlign: 'right',
                  }),
                  dimensions.width
                )}
              >
                {'Postpaid'}
              </Text>
            )}
          </>
        </View>
        {/* Service connection error message */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Error'],
              fontFamily: 'Roboto_400Regular',
              textAlign: 'left',
            }),
            dimensions.width
          )}
        >
          {scnoErrorMsg}
        </Text>
        {/* Send OTP  Submit */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const scnoErrorMsg = validateScno(textInputValue);
                setScnoErrorMsg(scnoErrorMsg);
                if (scnoErrorMsg?.length) {
                  return;
                }
                const consumerDetailsJson = (
                  await CISAPPApi.consumerDetailsPOST(Constants, {
                    accno: textInputValue,
                  })
                )?.json;
                buildConsumerString(Constants['name']);
                const prepaidFlag = (
                  consumerDetailsJson && consumerDetailsJson[0]
                )?.data?.prepaidFlag;
                console.log(prepaidFlag);
                setPrepaidFlag(prepaidFlag);
                const meterNo = (consumerDetailsJson && consumerDetailsJson[0])
                  ?.data?.meterNumber;
                console.log(meterNo);
                setMeterNumber(meterNo);
                const Scno = (consumerDetailsJson && consumerDetailsJson[0])
                  ?.data?.scno;
                console.log(Scno);
                setConsumerScNo(Scno);
                const Name = (consumerDetailsJson && consumerDetailsJson[0])
                  ?.data?.name;
                setConsumerName(Name);
                const Viewbilldetailsjson = (
                  await CISAPPApi.viewBillDetailsPOST(Constants, {
                    action: buildString(textInputValue),
                  })
                )?.json;
                buildString(textInputValue);

                const valueaueixQRY =
                  Viewbilldetailsjson &&
                  Viewbilldetailsjson[0].data.BillDataJson[0];
                setViewbilldetails(valueaueixQRY);
                const Viewbilldetailslog = valueaueixQRY;
                console.log(Viewbilldetailslog);
                const prepaiddetailsJson = await (async () => {
                  if (prepaidFlag === 'Y') {
                    return (
                      await CISAPPApi.prepaidApiPOST(Constants, {
                        mtrno: meterNo,
                      })
                    )?.json;
                  }
                })();
                console.log(prepaiddetailsJson);
                const availableBalance = (
                  prepaiddetailsJson && prepaiddetailsJson[0]
                )?.data[0]?.avail_balance;
                console.log(availableBalance);
                setAvailableBalance(availableBalance);
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
              marginTop: 30,
              width: '100%',
            },
            dimensions.width
          )}
          title={'View Details'}
        />
      </View>
      {/* Details fetaching */}
      <View>
        {/* card */}
        <>
          {!(prepaidFlag === 'N') ? null : (
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                  backgroundColor: theme.colors['Background'],
                  borderColor: 'rgb(199, 198, 198)',
                  borderRadius: 8,
                  borderWidth: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingTop: 10,
                }),
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_700Bold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {(() => {
                  const e = viewbilldetails?.Name;
                  console.log(e);
                  return e;
                })()}
              </Text>
              {/* Sub title */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_700Bold',
                    fontSize: 12,
                    marginTop: 5,
                    opacity: 0.83,
                  },
                  dimensions.width
                )}
              >
                {viewbilldetails?.AccNo}
              </Text>
            </View>
          )}
        </>
        {/* card */}
        <>
          {!(prepaidFlag === 'N') ? null : (
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderColor: 'rgb(199, 198, 198)',
                  borderRadius: 8,
                  borderWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 25,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingTop: 10,
                }),
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignSelf: 'auto' },
                  dimensions.width
                )}
              >
                {/* Amount due */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_700Bold',
                      fontSize: 16,
                      opacity: 0.64,
                    },
                    dimensions.width
                  )}
                >
                  {'Amount due'}
                </Text>
                {/* Amount  */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_700Bold',
                      fontSize: 16,
                      opacity: 0.96,
                    },
                    dimensions.width
                  )}
                >
                  {viewbilldetails?.LEDGERAMT}
                </Text>
                {/* Sub title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_300Light',
                      fontSize: 12,
                      marginTop: 5,
                      opacity: 0.5,
                    },
                    dimensions.width
                  )}
                >
                  {'Due date: '}
                  {viewbilldetails?.BillDueDate}
                </Text>
              </View>
              {/* Pay Now */}
              <Button
                onPress={() => {
                  try {
                    navigation.navigate('MakePaymentGuestScreen', {
                      ledgerAmt: viewbilldetails?.LEDGERAMT,
                      Name: viewbilldetails?.Name,
                      Scno: viewbilldetails?.Scno,
                      BillMonth: viewbilldetails?.BillMonth,
                      BillDame: viewbilldetails?.BillIssueDate,
                      BillNo: viewbilldetails?.BillNo,
                      BillDueDate: viewbilldetails?.BillDueDate,
                      BillAmount: viewbilldetails?.BillAmount,
                      Arrear: viewbilldetails?.Arrear,
                      RebateGiven: viewbilldetails?.RebateGiven,
                      netcurrbill: viewbilldetails?.netcurrbill,
                      BillIssueDate: viewbilldetails?.BillIssueDate,
                      billYear: viewbilldetails?.BillYear,
                      Billid: viewbilldetails?.BillDetailsId,
                      accno: viewbilldetails?.AccNo,
                    });
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
                    height: 36,
                    marginTop: 20,
                    textAlign: 'center',
                    width: '45%',
                  },
                  dimensions.width
                )}
                title={'Pay Now'}
              />
            </View>
          )}
        </>
        {/* prepaid card */}
        <>
          {!(prepaidFlag === 'Y') ? null : (
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                  alignItems: 'center',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderColor: 'rgb(199, 198, 198)',
                  borderRadius: 8,
                  borderWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 5,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingTop: 10,
                }),
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    opacity: 1,
                  },
                  dimensions.width
                )}
              >
                {'Available balance  ₹'}
                {null}
              </Text>
              {/* Recharge Now */}
              <Button
                onPress={() => {
                  try {
                    navigation.navigate('RechargeGuestScreen', {
                      Name: consumerName,
                      serviceConNo: consumerScNo,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.primary,
                    borderRadius: 14,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 16,
                    height: 36,
                    textAlign: 'center',
                    width: '45%',
                  },
                  dimensions.width
                )}
                title={'Recharge Now'}
              />
            </View>
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(QuickPayScreen);
