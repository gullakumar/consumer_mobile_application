import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Button,
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  Picker,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, Image, Text, View, useWindowDimensions } from 'react-native';

const PaymentsScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const buildString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/getBillDataWss/${Scno}`);
    return `billing/rest/getBillDataWss/${Scno}`;
  };

  const paymentBuildString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(
      `billing/rest/getBillDataWsscollections/rest/PaymentDetailsTService/getPaymentDetails/${Scno}`
    );
    return `collections/rest/PaymentDetailsTService/getPaymentDetails/${Scno}`;
  };

  const convertTimestampToDate = timestamp => {
    const date = new Date(timestamp);
    console.log('timestamp' + timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = date.getDate();
    console.log('month' + month);
    console.log('year' + year);
    console.log('date' + day);
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${
      day < 10 ? '0' + day : day
    }`;

    // Return the formatted date
    return formattedDate;
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

  const manageAccountFun = ManageAccountDetails => {
    return ManageAccountDetails.map(team => {
      return { label: team.new_added_account, value: team.new_added_account };
    });
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        setServiceConNumber(Constants['name']);
        const consumerDetailsJson = await CISAPPApi.consumerDetailsPOST(
          Constants,
          { action: buildConsumerString(Constants['name']) }
        );
        console.log(consumerDetailsJson);
        buildConsumerString(Constants['name']);
        const prepaidFlag = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.prepaidFlag;
        setPrepaidFlag(prepaidFlag);
        const meterNo = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.meterNumber;
        setMeterNumber(meterNo);
        const Scno = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.scno;
        setConsumerScNo(Scno);
        const Name = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.name;
        setConsumerName(Name);
        const Billdetailsjson = await (async () => {
          if (prepaidFlag === 'N') {
            return await CISAPPApi.viewBillDetailsPOST(Constants, {
              action: buildString(Constants['name']),
            });
          }
        })();
        console.log(Billdetailsjson);
        buildString(Constants['name']);

        const valuePRx6J3RZ =
          Billdetailsjson && Billdetailsjson[0].data.BillDataJson[0];
        setViewBillDetails(valuePRx6J3RZ);
        const Billdetailslog = valuePRx6J3RZ;
        const paymenthistoryjson = await CISAPPApi.paymentHistoryPOST(
          Constants,
          { action: paymentBuildString(Constants['name']) }
        );
        paymentBuildString(Constants['name']);

        const valueqY5c4IUo = paymenthistoryjson && paymenthistoryjson[0].data;
        setViewPaymentDetails(valueqY5c4IUo);
        const paymentdetailslog = valueqY5c4IUo;
        const prepaidJson = await (async () => {
          if (prepaidFlag === 'Y') {
            return await CISAPPApi.prepaidApiPOST(Constants, {
              mtrno: meterNo,
            });
          }
        })();
        console.log(prepaidJson);
        const availableBalance = (prepaidJson && prepaidJson[0])?.data[0]
          ?.avail_balance;
        console.log(availableBalance);
        setAvailableBalance(availableBalance);
        const ManageAccountDetails = await CISAPPApi.manageAccountsPOST(
          Constants,
          { accountNumber: Constants['name'] }
        );
        console.log(ManageAccountDetails);
        const result = setGlobalVariableValue({
          key: 'manageaccount_picker',
          value: manageAccountFun(
            ManageAccountDetails && ManageAccountDetails[0].data[0].data
          ),
        });
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  const [availableBalance, setAvailableBalance] = React.useState('');
  const [consumerName, setConsumerName] = React.useState('');
  const [consumerScNo, setConsumerScNo] = React.useState('');
  const [meterNumber, setMeterNumber] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [serviceConNumber, setServiceConNumber] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);
  const [viewBillDetails, setViewBillDetails] = React.useState({});
  const [viewPaymentDetails, setViewPaymentDetails] = React.useState({});

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'column', paddingTop: 40 },
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
                { backgroundColor: theme.colors['Surface'], width: '80%' },
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
                          color: theme.colors['Strong'],
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
                      size={24}
                      name={
                        'MaterialCommunityIcons/account-arrow-right-outline'
                      }
                    />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
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
                {/* On Demand Reading */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      navigation.navigate('UsageScreen');
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
                    <Icon size={24} name={'Ionicons/speedometer-outline'} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'On-Demand Reading'}
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
                      size={24}
                      name={'Ionicons/ios-notifications-circle-outline'}
                    />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
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
                    <Icon size={24} name={'Feather/loader'} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
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
                    <Icon size={24} name={'Feather/download'} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
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
                      navigation.navigate('HelpCenterScreen');
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
                    <Icon size={24} name={'Feather/help-circle'} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
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
                    <Icon size={24} name={'MaterialIcons/feedback'} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
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
                      navigation.navigate('HelpCenterScreen');
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
                    <Icon size={24} name={'Ionicons/md-help-buoy-outline'} />
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
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
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        <Checkbox
          onPress={newCheckboxValue => {
            try {
              setShowNav(newCheckboxValue);
            } catch (err) {
              console.error(err);
            }
          }}
          status={showNav}
          checkedIcon={'Feather/x'}
          uncheckedIcon={'Feather/menu'}
          size={32}
          color={theme.colors['Custom Color_22']}
          uncheckedColor={theme.colors['Custom Color_22']}
        />
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                fontFamily: 'Roboto_700Bold',
                fontSize: 18,
                marginLeft: 6,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Payments'}
          </Text>

          <Touchable>
            {/* EN */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  paddingRight: 2,
                }),
                dimensions.width
              )}
            >
              {'EN'}
            </Text>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('NotificationsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              name={'Ionicons/md-notifications-circle-outline'}
              color={theme.colors['Community_Light_Black']}
            />
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ProfileOptionsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              name={'Ionicons/person-circle-outline'}
              color={theme.colors['Community_Light_Black']}
            />
          </Touchable>
        </View>
      </View>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'flex-start' },
          dimensions.width
        )}
      >
        {/* amblock */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'flex-start', paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Service connection number */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['category'], {
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                height: 50,
                paddingLeft: 20,
                paddingRight: 20,
              }),
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Custom Color_20']}
              name={'MaterialIcons/house'}
            />
            <Picker
              onValueChange={newPickerValue => {
                const handler = async () => {
                  const pickerValue = newPickerValue;
                  try {
                    setServiceConNumber(newPickerValue);
                    const consumerDetailsJson =
                      await CISAPPApi.consumerDetailsPOST(Constants, {
                        action: buildConsumerString(newPickerValue),
                      });
                    console.log(consumerDetailsJson);
                    buildConsumerString(newPickerValue);
                    const prepaidFlag = (
                      consumerDetailsJson && consumerDetailsJson[0]
                    )?.data?.prepaidFlag;
                    setPrepaidFlag(prepaidFlag);
                    const meterNo = (
                      consumerDetailsJson && consumerDetailsJson[0]
                    )?.data?.meterNumber;
                    setMeterNumber(meterNo);
                    console.log(meterNo);
                    const Scno = (consumerDetailsJson && consumerDetailsJson[0])
                      ?.data?.scno;
                    setConsumerScNo(Scno);
                    const Name = (consumerDetailsJson && consumerDetailsJson[0])
                      ?.data?.name;
                    setConsumerName(Name);
                    const Billdetailsjson = await (async () => {
                      if (prepaidFlag === 'N') {
                        return await CISAPPApi.viewBillDetailsPOST(Constants, {
                          action: buildString(newPickerValue),
                        });
                      }
                    })();
                    console.log(Billdetailsjson);
                    buildString(newPickerValue);

                    const valuejko4fzFB =
                      Billdetailsjson &&
                      Billdetailsjson[0].data.BillDataJson[0];
                    setViewBillDetails(valuejko4fzFB);
                    const Billdetailslog = valuejko4fzFB;
                    const paymenthistoryjson =
                      await CISAPPApi.paymentHistoryPOST(Constants, {
                        action: paymentBuildString(newPickerValue),
                      });
                    paymentBuildString(newPickerValue);

                    const valueswbjlC9X =
                      paymenthistoryjson && paymenthistoryjson[0].data;
                    setViewPaymentDetails(valueswbjlC9X);
                    const paymentdetailslog = valueswbjlC9X;
                    const prepaidJson = await (async () => {
                      if (prepaidFlag === 'Y') {
                        return await CISAPPApi.prepaidApiPOST(Constants, {
                          mtrno: meterNo,
                        });
                      }
                    })();
                    console.log(prepaidJson);
                    const availableBalance = (prepaidJson && prepaidJson[0])
                      ?.data[0]?.avail_balance;
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
                  borderColor: theme.colors['Background'],
                  borderWidth: 1,
                  fontFamily: 'Roboto_400Regular',
                  marginTop: -5,
                },
                dimensions.width
              )}
              options={Constants['manageaccount_picker']}
              leftIconMode={'inset'}
              type={'solid'}
              iconSize={24}
              autoDismissKeyboard={true}
              rightIconName={'Feather/chevron-down'}
              placeholder={' '}
              defaultValue={Constants['name']}
            />
          </View>
          {/* card */}
          <>
            {!(prepaidFlag === 'N') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(199, 198, 198)',
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
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
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 14,
                        opacity: 1,
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
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 14,
                        opacity: 1,
                      },
                      dimensions.width
                    )}
                  >
                    {'₹'}
                    {viewBillDetails?.BillAmount}
                  </Text>
                  {/* Sub title */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 12,
                        marginTop: 5,
                        opacity: 1,
                      },
                      dimensions.width
                    )}
                  >
                    {'Due Date: '}
                    {viewBillDetails?.BillDueDate}
                  </Text>
                </View>
                {/* View */}
                <Button
                  onPress={() => {
                    try {
                      navigation.navigate('ViewBillScreen', {
                        Name: viewBillDetails?.Name,
                        Scno: viewBillDetails?.Scno,
                        BillMonth: viewBillDetails?.BillMonth,
                        BillDame: viewBillDetails?.BillIssueDate,
                        BillNo: viewBillDetails?.BillNo,
                        BillDueDate: viewBillDetails?.BillDueDate,
                        BillAmount: viewBillDetails?.BillAmount,
                        Arrear: viewBillDetails?.Arrear,
                        RebateGiven: viewBillDetails?.RebateGiven,
                        netcurrbill: viewBillDetails?.netcurrbill,
                        BillIssueDate: viewBillDetails?.BillIssueDate,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['GetFit Orange'],
                      borderRadius: 8,
                      fontFamily: 'Roboto_400Regular',
                      height: 36,
                      marginTop: 5,
                      textAlign: 'center',
                      width: '23%',
                    },
                    dimensions.width
                  )}
                  title={'View'}
                />
                {/* Pay Now */}
                <Button
                  onPress={() => {
                    try {
                      navigation.navigate('MakePaymentScreen', {
                        Name: viewBillDetails?.Name,
                        Scno: viewBillDetails?.Scno,
                        BillMonth: viewBillDetails?.BillMonth,
                        BillDame: viewBillDetails?.BillIssueDate,
                        BillNo: viewBillDetails?.BillNo,
                        BillDueDate: viewBillDetails?.BillDueDate,
                        BillAmount: viewBillDetails?.BillAmount,
                        Arrear: viewBillDetails?.Arrear,
                        RebateGiven: viewBillDetails?.RebateGiven,
                        netcurrbill: viewBillDetails?.netcurrbill,
                        BillIssueDate: viewBillDetails?.BillIssueDate,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['GetFit Orange'],
                      borderRadius: 8,
                      fontFamily: 'Roboto_400Regular',
                      height: 36,
                      marginTop: 5,
                      textAlign: 'center',
                      width: '30%',
                    },
                    dimensions.width
                  )}
                  title={'Pay Now'}
                />
              </View>
            )}
          </>
          {/* Advance Payment */}
          <>
            {!(prepaidFlag === 'N') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                    alignItems: 'stretch',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(199, 198, 198)',
                    borderWidth: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: 30,
                    marginTop: 30,
                    paddingBottom: 10,
                    paddingTop: 10,
                  }),
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingTop: 2,
                    },
                    dimensions.width
                  )}
                >
                  {/* Advance Payment */}
                  <Button
                    onPress={() => {
                      try {
                        navigation.navigate('AdvancePayemntScreen', {
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
                        borderRadius: 8,
                        fontFamily: 'Roboto_400Regular',
                        height: 36,
                        paddingBottom: 3,
                        textAlign: 'center',
                        width: '45%',
                      },
                      dimensions.width
                    )}
                    title={'Advance Payment'}
                  />
                </View>
              </View>
            )}
          </>
          {/* prepaid */}
          <>
            {!(prepaidFlag === 'Y') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: theme.colors['Community_Divider'],
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
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
                      paddingTop: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Available balance  ₹'}
                  {availableBalance}
                </Text>
                {/* Recharge Now */}
                <Button
                  onPress={() => {
                    try {
                      navigation.navigate('RechargeScreen', {
                        Name: consumerName,
                        ServiceConNo: consumerScNo,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.primary,
                      borderRadius: 8,
                      fontFamily: 'Roboto_400Regular',
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
          {/* postpaid */}
          <>
            {!(prepaidFlag === 'N') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['accordion'],
                    {
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderColor: theme.colors['Community_Border'],
                      borderRadius: 12,
                      borderWidth: 1,
                      marginTop: 20,
                      paddingBottom: 12,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 12,
                    }
                  ),
                  dimensions.width
                )}
              >
                <AccordionGroup
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'auto',
                      color: theme.colors['ShopAppBlue'],
                      fontFamily: 'Roboto_500Medium',
                      fontSize: 16,
                    },
                    dimensions.width
                  )}
                  label={'Payment History'}
                  caretSize={24}
                  iconSize={24}
                  expanded={true}
                >
                  {/* Details */}
                  <View
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['Details'],
                        {
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Date */}
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRightWidth: 1, flex: 1 },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors.viewBG,
                            height: 40,
                            justifyContent: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Roboto_700Bold',
                              fontSize: 14,
                              textAlign: 'center',
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {'Date'}
                        </Text>
                      </View>
                    </View>
                    {/* Amount */}
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRightWidth: 1, flex: 1 },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors.viewBG,
                            height: 40,
                            justifyContent: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Roboto_700Bold',
                              fontSize: 14,
                              textAlign: 'center',
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {'Amount'}
                        </Text>
                      </View>
                    </View>
                    {/* Purpose */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors.viewBG,
                            height: 40,
                            justifyContent: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Roboto_700Bold',
                              fontSize: 14,
                              textAlign: 'center',
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {'Purpose'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <FlatList
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* Details */}
                          <View
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ViewStyles(theme)['Details'],
                                {
                                  borderBottomWidth: 1,
                                  borderLeftWidth: 1,
                                  borderRightWidth: 1,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {/* Date */}
                            <View
                              style={StyleSheet.applyWidth(
                                { borderRightWidth: 1, flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  { height: 40, justifyContent: 'center' },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 14,
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {(() => {
                                    const e = convertTimestampToDate(
                                      listData?.paymentDate
                                    );
                                    console.log(e);
                                    return e;
                                  })()}
                                </Text>
                              </View>
                            </View>
                            {/* Amount */}
                            <View
                              style={StyleSheet.applyWidth(
                                { borderRightWidth: 1, flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  { height: 40, justifyContent: 'center' },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 14,
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'₹'}
                                  {listData?.amountPaid}
                                </Text>
                              </View>
                            </View>
                            {/* Purpose */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  { height: 40, justifyContent: 'center' },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 14,
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.paymentMode}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    data={viewPaymentDetails}
                    listKey={'ab97FAva'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </AccordionGroup>
              </View>
            )}
          </>
          {/* prepaid */}
          <>
            {!(prepaidFlag === 'Y') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['accordion'],
                    {
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderColor: theme.colors['Community_Border'],
                      borderRadius: 12,
                      borderWidth: 1,
                      marginTop: 20,
                      paddingBottom: 12,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 12,
                    }
                  ),
                  dimensions.width
                )}
              >
                <AccordionGroup
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'auto',
                      color: theme.colors['ShopAppBlue'],
                      fontFamily: 'Roboto_500Medium',
                      fontSize: 16,
                    },
                    dimensions.width
                  )}
                  label={'Recharge History'}
                  caretSize={24}
                  iconSize={24}
                  expanded={true}
                >
                  <FlatList
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignContent: 'stretch',
                              backgroundColor: 'rgb(255, 255, 255)',
                              flexDirection: 'column',
                              justifyContent: 'flex-start',
                              paddingTop: 8,
                            },
                            dimensions.width
                          )}
                        >
                          <Touchable>
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'flex-start',
                                  borderBottomWidth: 1,
                                  borderColor:
                                    theme.colors['Community_Divider'],
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                },
                                dimensions.width
                              )}
                            >
                              <Icon
                                size={24}
                                name={'Foundation/page-export-pdf'}
                              />
                              <View
                                style={StyleSheet.applyWidth(
                                  { flex: 1, paddingLeft: 16 },
                                  dimensions.width
                                )}
                              >
                                {/* Title */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 14,
                                      lineHeight: 20,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Advance  Paid: ₹ '}
                                  {listData?.amountPaid} {listData?.paymentMode}
                                  {'\n'}
                                  {listData?.paymentDate}
                                </Text>
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  { alignItems: 'flex-end', width: 40 },
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  size={24}
                                  name={'SimpleLineIcons/arrow-down-circle'}
                                />
                              </View>
                            </View>
                          </Touchable>
                        </View>
                      );
                    }}
                    data={[]}
                    listKey={'QNnMvTpF'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </AccordionGroup>
              </View>
            )}
          </>
        </View>
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-around' },
            dimensions.width
          )}
        />
      </View>
      {/* botem tab1 */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['botem tab'], {
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
          }),
          dimensions.width
        )}
      >
        {/* Home */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('DashboardScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              name={'Entypo/home'}
              color={theme.colors['Community_Light_Black']}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Home'}
            </Text>
          </View>
        </Touchable>
        {/* Usage */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('UsageScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              name={'FontAwesome/bar-chart-o'}
              color={theme.colors['Community_Light_Black']}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Usage'}
            </Text>
          </View>
        </Touchable>
        {/* Billing */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BillingScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Community_Light_Black']}
              name={'Entypo/text-document-inverted'}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Billing'}
            </Text>
          </View>
        </Touchable>
        {/* Payments */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('PaymentsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 65,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Community_Dark_UI']}
              name={'MaterialIcons/payments'}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Dark_UI'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Payments'}
            </Text>
          </View>
        </Touchable>
        {/* Support */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('CheckTicketStatusScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 55,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              name={'MaterialIcons/support-agent'}
              color={theme.colors['Community_Light_Black']}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Support'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PaymentsScreen);
