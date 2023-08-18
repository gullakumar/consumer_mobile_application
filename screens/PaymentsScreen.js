import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
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
import * as WebBrowser from 'expo-web-browser';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

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
    //const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    const formattedDate = `${day < 10 ? '0' + day : day}-${
      month < 10 ? '0' + month : month
    }-${year}`;
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

  const rechargeHistoryBuildString = meterNo => {
    console.log(
      `/SPM/getAllSpmBillDetailsByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`
    );
    return `/SPM/getAllSpmBillDetailsByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`;
  };

  const converDateTimeToDate = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
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
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            action: buildConsumerString(Constants['name']),
          })
        )?.json;
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
        setGlobalVariableValue({
          key: 'consumerScNo',
          value: Scno,
        });
        const Name = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.name;
        setConsumerName(Name);
        const Billdetailsjson = await (async () => {
          if (prepaidFlag === 'N') {
            return (
              await CISAPPApi.viewBillDetailsPOST(Constants, {
                action: buildString(Constants['name']),
              })
            )?.json;
          }
        })();
        console.log(Billdetailsjson);
        buildString(Constants['name']);

        const valuePRx6J3RZ =
          Billdetailsjson && Billdetailsjson[0].data.BillDataJson[0];
        setViewBillDetails(valuePRx6J3RZ);
        const Billdetailslog = valuePRx6J3RZ;
        const paymenthistoryjson = (
          await CISAPPApi.paymentHistoryPOST(Constants, {
            action: paymentBuildString(Constants['name']),
          })
        )?.json;
        paymentBuildString(Constants['name']);

        const valueqY5c4IUo = paymenthistoryjson && paymenthistoryjson[0].data;
        setViewPaymentDetails(valueqY5c4IUo);
        const paymentdetailslog = valueqY5c4IUo;
        const prepaidJson = await (async () => {
          if (prepaidFlag === 'Y') {
            return (
              await CISAPPApi.prepaidApiPOST(Constants, { mtrno: meterNo })
            )?.json;
          }
        })();
        console.log(prepaidJson);
        const availableBalance = (prepaidJson && prepaidJson[0])?.data[0]
          ?.avail_balance;
        console.log(availableBalance);
        setAvailableBalance(availableBalance);
        const RechargeHistoryJson = (
          await CISAPPApi.rechargeHistoryPrepaidPOST(Constants, {
            action: rechargeHistoryBuildString(meterNo),
          })
        )?.json;
        rechargeHistoryBuildString(meterNo);
        console.log(RechargeHistoryJson);
        const rechargeData =
          RechargeHistoryJson && RechargeHistoryJson[0].data.data;
        setViewRechargeDetails(rechargeData);
        const ManageAccountDetails = (
          await CISAPPApi.manageAccountsPOST(Constants, {
            accountNumber: Constants['name'],
          })
        )?.json;
        console.log(ManageAccountDetails);
        const result = setGlobalVariableValue({
          key: 'manageaccount_picker',
          value: manageAccountFun(
            ManageAccountDetails && ManageAccountDetails[0].data[0].data
          ),
        });
        console.log(result);
        setServiceConNumber(props.route?.params?.Name ?? '');
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [availableBalance, setAvailableBalance] = React.useState('');
  const [consumerName, setConsumerName] = React.useState('');
  const [consumerScNo, setConsumerScNo] = React.useState('');
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [meterNumber, setMeterNumber] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [serviceConNumber, setServiceConNumber] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);
  const [viewBillDetails, setViewBillDetails] = React.useState({});
  const [viewPaymentDetails, setViewPaymentDetails] = React.useState({});
  const [viewRechargeDetails, setViewRechargeDetails] = React.useState({});
  const [visibleHindi, setVisibleHindi] = React.useState(false);

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
                alignSelf: 'center',
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
                      name={
                        'MaterialCommunityIcons/account-arrow-right-outline'
                      }
                      size={24}
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
                    <Icon name={'Feather/loader'} size={24} />
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
                {/* Load Enhancement */}
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        navigation.navigate('LoadQualityScreen');
                        await WebBrowser.openBrowserAsync(
                          'http://20.192.2.50:9388/cportal/#/bltLec/KUM188'
                        );
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
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
                      name={'MaterialCommunityIcons/alert-outline'}
                      size={24}
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
                      {'Load Enhancement'}
                    </Text>
                  </View>
                </Touchable>
                {/* Load Reduction */}
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        navigation.navigate('LoadQualityScreen');
                        await WebBrowser.openBrowserAsync(
                          'http://20.192.2.50:9388/cportal/#/bltLrc/KUM188'
                        );
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
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
                    <Icon name={'FontAwesome/exclamation-triangle'} size={24} />
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
                      {'Load Reduction'}
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
                {/* Help */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('HelpScreen');
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
                {/* Contact Us */}
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
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'Contact Us'}
                    </Text>
                  </View>
                </Touchable>
                {/* Energy Tips */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('EnergyTipsScreen');
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
                    <Icon name={'SimpleLineIcons/energy'} size={24} />
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
                      {'Energy Tips'}
                    </Text>
                  </View>
                </Touchable>
                {/* Privacy Policy */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('PrivacyPolicyScreen');
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
                    <Icon name={'MaterialCommunityIcons/security'} size={24} />
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
                      {'Privacy Policy'}
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
          color={theme.colors['Custom Color_22']}
          size={32}
          uncheckedColor={theme.colors['Custom Color_22']}
          uncheckedIcon={'Feather/menu'}
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
          <>
            {!hiddenHindi ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setVisibleHindi(true);
                    setHiddenHindi(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
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
            )}
          </>
          <>
            {!visibleHindi ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setHiddenHindi(true);
                    setVisibleHindi(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* HI */}
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      paddingLeft: 5,
                      paddingRight: 2,
                    }),
                    dimensions.width
                  )}
                >
                  {'HI'}
                </Text>
              </Touchable>
            )}
          </>
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
              color={theme.colors['Community_Light_Black']}
              name={'Ionicons/md-notifications-circle-outline'}
              size={24}
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
              color={theme.colors['Community_Light_Black']}
              name={'Ionicons/person-circle-outline'}
              size={24}
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
        <ScrollView
          bounces={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* amblock */}
          <View
            style={StyleSheet.applyWidth(
              {
                justifyContent: 'flex-start',
                paddingLeft: 20,
                paddingRight: 20,
              },
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
                color={theme.colors['Medium']}
                name={'MaterialIcons/house'}
                size={24}
              />
              <Picker
                onValueChange={newPickerValue => {
                  const handler = async () => {
                    const pickerValue = newPickerValue;
                    try {
                      setServiceConNumber(newPickerValue);
                      const consumerDetailsJson = (
                        await CISAPPApi.consumerDetailsPOST(Constants, {
                          action: buildConsumerString(newPickerValue),
                        })
                      )?.json;
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
                      const Scno = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.scno;
                      setGlobalVariableValue({
                        key: 'consumerScNo',
                        value: Scno,
                      });
                      const Name = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.name;
                      setConsumerName(Name);
                      const Billdetailsjson = await (async () => {
                        if (prepaidFlag === 'N') {
                          return (
                            await CISAPPApi.viewBillDetailsPOST(Constants, {
                              action: buildString(newPickerValue),
                            })
                          )?.json;
                        }
                      })();
                      console.log(Billdetailsjson);
                      buildString(newPickerValue);

                      const valuejko4fzFB =
                        Billdetailsjson &&
                        Billdetailsjson[0].data.BillDataJson[0];
                      setViewBillDetails(valuejko4fzFB);
                      const Billdetailslog = valuejko4fzFB;
                      const paymenthistoryjson = (
                        await CISAPPApi.paymentHistoryPOST(Constants, {
                          action: paymentBuildString(newPickerValue),
                        })
                      )?.json;
                      paymentBuildString(newPickerValue);

                      const valueswbjlC9X =
                        paymenthistoryjson && paymenthistoryjson[0].data;
                      setViewPaymentDetails(valueswbjlC9X);
                      const paymentdetailslog = valueswbjlC9X;
                      const prepaidJson = await (async () => {
                        if (prepaidFlag === 'Y') {
                          return (
                            await CISAPPApi.prepaidApiPOST(Constants, {
                              mtrno: meterNo,
                            })
                          )?.json;
                        }
                      })();
                      console.log(prepaidJson);
                      const availableBalance = (prepaidJson && prepaidJson[0])
                        ?.data[0]?.avail_balance;
                      console.log(availableBalance);
                      setAvailableBalance(availableBalance);
                      const RechargeHistoryJson = await (async () => {
                        if (prepaidFlag === 'Y') {
                          return (
                            await CISAPPApi.rechargeHistoryPrepaidPOST(
                              Constants,
                              { action: rechargeHistoryBuildString(meterNo) }
                            )
                          )?.json;
                        }
                      })();
                      rechargeHistoryBuildString(meterNo);
                      console.log(RechargeHistoryJson);
                      const rechargeData =
                        RechargeHistoryJson && RechargeHistoryJson[0].data.data;
                      setViewRechargeDetails(rechargeData);
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
                autoDismissKeyboard={true}
                defaultValue={Constants['name']}
                iconColor={theme.colors['Medium']}
                iconSize={24}
                leftIconMode={'inset'}
                rightIconName={'Feather/chevron-down'}
                type={'solid'}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['postpaid view'],
                  { marginBottom: 5, marginTop: 10 }
                ),
                dimensions.width
              )}
            >
              {/* Prepaid */}
              <>
                {!(prepaidFlag === 'Y') ? null : (
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontFamily: 'Roboto_400Regular', textAlign: 'right' }
                      ),
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontFamily: 'Roboto_400Regular', textAlign: 'right' }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Postpaid'}
                  </Text>
                )}
              </>
            </View>
            {/* Postpaid Card */}
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
                      marginBottom: 15,
                      marginTop: 5,
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
                          fontFamily: 'Roboto_700Bold',
                          fontSize: 14,
                          opacity: 1,
                        },
                        dimensions.width
                      )}
                    >
                      {'₹'}
                      {viewBillDetails?.LEDGERAMT}
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
                          ledgerAmt: viewBillDetails?.LEDGERAMT,
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
                          billYear: viewBillDetails?.BillYear,
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
                          ledgerAmt: viewBillDetails?.LEDGERAMT,
                          billYear: viewBillDetails?.BillYear,
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
                          Billid: viewBillDetails?.BillDetailsId,
                          accno: viewBillDetails?.AccNo,
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
            {/* prepaid */}
            <>
              {!(prepaidFlag === 'Y') ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderColor: theme.colors['Community_Divider'],
                      borderRadius: 8,
                      borderWidth: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 15,
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
                          serviceConNo: Constants['consumerScNo'],
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
            {/* section header */}
            <>
              {!(prepaidFlag === 'N') ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 10,
                      paddingBottom: 12,
                      paddingLeft: 20,
                      paddingRight: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'center',
                          color: theme.colors['ShopAppBlue'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Payment History'}
                  </Text>
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
                        paddingBottom: 12,
                        paddingTop: 12,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {/* List  */}
                  <FlatList
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* card */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingBottom: 10,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            <View>
                              {/* date */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {convertTimestampToDate(listData?.paymentDate)}
                              </Text>
                              {/* purpose */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.paymentMode}
                              </Text>
                            </View>
                            {/* View 2 */}
                            <View>
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'₹'}
                                {listData?.amountPaid}
                              </Text>
                            </View>
                            {/* download */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignSelf: 'center',
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                onPress={() => {
                                  const handler = async () => {
                                    try {
                                      await WebBrowser.openBrowserAsync(
                                        `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.plugin.DynamicServiceReportGenerator/service?name=BILL_PAYMENT_RECEIPT&prno=${listData?.prno}&scno=${listData?.scno}`
                                      );
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  };
                                  handler();
                                }}
                              >
                                <Icon
                                  name={'Feather/arrow-down-circle'}
                                  size={24}
                                />
                              </Touchable>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    data={viewPaymentDetails}
                    listKey={'zhK2f9jS'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </View>
              )}
            </>
            {/* section header */}
            <>
              {!(prepaidFlag === 'Y') ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 10,
                      paddingBottom: 12,
                      paddingLeft: 20,
                      paddingRight: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'center',
                          color: theme.colors['ShopAppBlue'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Recharge History'}
                  </Text>
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
                        paddingBottom: 12,
                        paddingTop: 12,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  <FlatList
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* card */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Custom Color_21'],
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingBottom: 10,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            <View>
                              {/* date */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {converDateTimeToDate(listData?.prstRdgDate)}
                              </Text>
                              {/* purpose */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.billType}
                              </Text>
                            </View>
                            {/* View 2 */}
                            <View>
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'₹'}
                                {listData?.closingBalance}
                              </Text>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    data={viewRechargeDetails}
                    listKey={'xqEtrbYw'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </View>
              )}
            </>
          </View>
        </ScrollView>
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
              setServiceConNumber(props.route?.params?.Name ?? '');
              navigation.navigate('DashboardScreen', {
                name: Constants['name'],
              });
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
              color={theme.colors['Community_Light_Black']}
              name={'Entypo/home'}
              size={24}
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
              setServiceConNumber(props.route?.params?.Name ?? '');
              navigation.navigate('UsageScreen', { name: Constants['name'] });
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
              color={theme.colors['Community_Light_Black']}
              name={'FontAwesome/bar-chart-o'}
              size={24}
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
              setServiceConNumber(props.route?.params?.Name ?? '');
              navigation.navigate('BillingScreen', { name: Constants['name'] });
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
              color={theme.colors['Community_Light_Black']}
              name={'Entypo/text-document-inverted'}
              size={24}
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
              setServiceConNumber(props.route?.params?.Name ?? '');
              navigation.navigate('PaymentsScreen', {
                name: Constants['name'],
              });
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
              color={theme.colors['Community_Dark_UI']}
              name={'MaterialIcons/payments'}
              size={24}
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
              color={theme.colors['Community_Light_Black']}
              name={'MaterialIcons/support-agent'}
              size={24}
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
