import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as BillingHistory from '../custom-files/BillingHistory';
import * as CustomCode from '../custom-files/CustomCode';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
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

const BillingScreen = props => {
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

  const buildBillingString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/getBillDataService/${Scno}`);
    return `billing/rest/getBillDataService/${Scno}`;
  };

  const convertMonthNoToMonthName = monthNo => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthName = monthNames[monthNo - 1];
    console.log(monthName);
    return monthName;
  };

  const convertDateTimeToDate = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
  };

  const prepaidBillingString = meterNo => {
    console.log(
      `/SPM/getAllSpmMonthlyBillDetailsTByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`
    );
    return `/SPM/getAllSpmMonthlyBillDetailsTByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`;
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
        setTextInputValue(Constants['name']);
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            accno: Constants['name'],
          })
        )?.json;
        console.log(consumerDetailsJson);
        buildConsumerString(Constants['name']);
        const prepaidFlag = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.prepaidFlag;
        console.log(prepaidFlag);
        setPrepaidFlag(prepaidFlag);
        const meterNo = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.meterNumber;
        console.log(meterNo);
        setMeterNumber(meterNo);
        const Billdetailsjson = await (async () => {
          if (prepaidFlag === 'N') {
            return (
              await CISAPPApi.viewBillDetailsPOST(Constants, {
                action: buildString(Constants['name']),
              })
            )?.json;
          }
        })();
        buildString(Constants['name']);
        console.log(Billdetailsjson);

        const valuexIxNMeaF =
          Billdetailsjson && Billdetailsjson[0].data.BillDataJson[0];
        setViewBillDetails(valuexIxNMeaF);
        const Billdetailslog = valuexIxNMeaF;
        const BillingHistoryJson = (
          await CISAPPApi.billingHistoryPOST(Constants, {
            action: buildBillingString(Constants['name']),
          })
        )?.json;
        buildBillingString(Constants['name']);
        console.log(BillingHistoryJson);

        const valueyUz2DmB7 =
          BillingHistoryJson && BillingHistoryJson[0].data.BillDataJson;
        setBillingHistoryScreen(valueyUz2DmB7);
        const billHistory = valueyUz2DmB7;
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
        const prepaidBillingHistoryJson = await (async () => {
          if (prepaidFlag === 'Y') {
            return (
              await CISAPPApi.billingHistoryPrepaidPOST(Constants, {
                action: prepaidBillingString(meterNo),
              })
            )?.json;
          }
        })();
        prepaidBillingString(meterNo);
        const prepaidBillingHistoryResult =
          prepaidBillingHistoryJson && prepaidBillingHistoryJson[0].data.data;
        setPrepaidBillingHistory(prepaidBillingHistoryResult);
        console.log(prepaidBillingHistoryResult);
        const ManageAccountDetails = (
          await CISAPPApi.manageAccountsPOST(Constants, {
            accountNumber: Constants['name'],
          })
        )?.json;
        console.log(ManageAccountDetails);

        const value488AdB8R =
          ManageAccountDetails && ManageAccountDetails[0].data[0].data;
        setManageAccount(value488AdB8R);
        const result = value488AdB8R;
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [ShowNav, setShowNav] = React.useState(false);
  const [availableBalance, setAvailableBalance] = React.useState('');
  const [billingHistoryScreen, setBillingHistoryScreen] = React.useState({});
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [manageAccount, setManageAccount] = React.useState({});
  const [meterNumber, setMeterNumber] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [prepaidBillingHistory, setPrepaidBillingHistory] = React.useState({});
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('Dashboard');
  const [selectedTab2, setSelectedTab2] = React.useState('prepaidchart');
  const [serviceConNumber, setServiceConNumber] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [viewBillDetails, setViewBillDetails] = React.useState({});
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
        {!ShowNav ? null : (
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
                <>
                  {!(prepaidFlag === 'N') ? null : (
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
                  )}
                </>
                {/* Load Reduction */}
                <>
                  {!(prepaidFlag === 'N') ? null : (
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
                        <Icon
                          name={'FontAwesome/exclamation-triangle'}
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
                          {'Load Reduction'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
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
                    setShowNav(!ShowNav);
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
          { flex: 1, justifyContent: 'space-around' },
          dimensions.width
        )}
      >
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
            status={ShowNav}
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
              {'Billing'}
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { paddingRight: 2 }
                      ),
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { paddingLeft: 5, paddingRight: 2 }
                      ),
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

        <ScrollView
          bounces={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* Body */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, justifyContent: 'space-around' },
              dimensions.width
            )}
          >
            {/* amblock */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              {/* Service connection number */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['category'],
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 16,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      paddingLeft: 20,
                      paddingRight: 20,
                    }
                  ),
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
                      try {
                        setTextInputValue(newPickerValue);
                        const consumerDetailsJson = (
                          await CISAPPApi.consumerDetailsPOST(Constants, {
                            accno: Constants['name'],
                          })
                        )?.json;
                        console.log(consumerDetailsJson);
                        buildConsumerString(newPickerValue);
                        const prepaidFlag = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.prepaidFlag;
                        console.log(prepaidFlag);
                        setPrepaidFlag(prepaidFlag);
                        const meterNo = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.meterNumber;
                        console.log(meterNo);
                        const Billdetailsjson = await (async () => {
                          if (prepaidFlag === 'N') {
                            return (
                              await CISAPPApi.viewBillDetailsPOST(Constants, {
                                action: buildString(newPickerValue),
                              })
                            )?.json;
                          }
                        })();
                        setMeterNumber(meterNo);
                        buildString(newPickerValue);
                        console.log(Billdetailsjson);

                        const valueXRLuuwU9 =
                          Billdetailsjson &&
                          Billdetailsjson[0].data.BillDataJson[0];
                        setViewBillDetails(valueXRLuuwU9);
                        const Billdetailslog = valueXRLuuwU9;
                        const BillingHistoryJson = (
                          await CISAPPApi.billingHistoryPOST(Constants, {
                            action: buildBillingString(newPickerValue),
                          })
                        )?.json;
                        buildBillingString(newPickerValue);
                        console.log(BillingHistoryJson);

                        const valueKQgEfMtz =
                          BillingHistoryJson &&
                          BillingHistoryJson[0].data.BillDataJson;
                        setBillingHistoryScreen(valueKQgEfMtz);
                        const billHistory = valueKQgEfMtz;
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
                        const prepaidBillingHistoryJson = await (async () => {
                          if (prepaidFlag === 'Y') {
                            return (
                              await CISAPPApi.billingHistoryPrepaidPOST(
                                Constants,
                                { action: prepaidBillingString(meterNo) }
                              )
                            )?.json;
                          }
                        })();
                        prepaidBillingString(meterNo);
                        console.log(prepaidBillingHistoryJson);
                        const prepaidBillingHistoryResult =
                          prepaidBillingHistoryJson &&
                          prepaidBillingHistoryJson[0].data.data;
                        setPrepaidBillingHistory(prepaidBillingHistoryResult);
                        console.log(prepaidBillingHistoryResult);
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
                      width: '95%',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                  options={Constants['manageaccount_picker']}
                  autoDismissKeyboard={true}
                  iconColor={theme.colors['Medium']}
                  iconSize={24}
                  leftIconMode={'inset'}
                  rightIconName={'Feather/chevron-down'}
                  type={'solid'}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'stretch', marginBottom: 5, marginTop: 10 },
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
                          {
                            fontFamily: 'Roboto_400Regular',
                            textAlign: 'right',
                          }
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
                          {
                            fontFamily: 'Roboto_400Regular',
                            textAlign: 'right',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Postpaid'}
                    </Text>
                  )}
                </>
              </View>
              {/* postpaid */}
              <>
                {!(prepaidFlag === 'N') ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['card'],
                        {
                          borderColor: theme.colors['Community_Border'],
                          borderRadius: 8,
                          borderWidth: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 15,
                          marginTop: 5,
                          paddingBottom: 10,
                          paddingLeft: 20,
                          paddingTop: 10,
                        }
                      ),
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
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['card'],
                        {
                          borderColor: theme.colors['Community_Border'],
                          borderRadius: 8,
                          borderWidth: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 15,
                          marginTop: 5,
                          paddingBottom: 10,
                          paddingLeft: 20,
                          paddingTop: 10,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { alignSelf: 'auto' },
                        dimensions.width
                      )}
                    >
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
                        {'Available balance: ₹'}
                        {availableBalance}
                      </Text>
                    </View>
                  </View>
                )}
              </>
              {/* Prepaid View */}
              <>
                {!(prepaidFlag === 'Y') ? null : (
                  <View>
                    {/* Prepaid Section header */}
                    <>
                      {!(prepaidFlag === 'Y') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)[
                                'section header 2'
                              ],
                              { justifyContent: 'center', paddingBottom: 12 }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Heading */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                alignSelf: 'center',
                                color: theme.colors['ShopAppBlue'],
                                fontFamily: 'Roboto_400Regular',
                                fontSize: 16,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'Billing History'}
                          </Text>
                        </View>
                      )}
                    </>
                    {/* prepaidtabs */}
                    <>
                      {!(prepaidFlag === 'Y') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            },
                            dimensions.width
                          )}
                        >
                          {/* chart */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* prepaidchart */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab2 === 'prepaidchart') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ],
                                            {
                                              color:
                                                theme.colors['Custom Color'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'Chart'}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab2 !== 'prepaidchart') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab2('prepaidchart');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ],
                                            {
                                              color: theme.colors['Light'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'Chart'}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                          {/* table */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* prepaidtable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab2 === 'prepaidtable') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ],
                                            {
                                              color:
                                                theme.colors['Custom Color'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'Table'}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab2 !== 'prepaidtable') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab2('prepaidtable');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ],
                                            {
                                              color: theme.colors['Light'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'Table'}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* prepaidchart */}
                    <>
                      {!(selectedTab2 === 'prepaidchart') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['Dashboard'],
                              { paddingRight: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          <>
                            {!prepaidBillingHistory?.length ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flex: 1,
                                    justifyContent: 'center',
                                    paddingRight: 10,
                                    width: '100%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <>
                                  {!(prepaidFlag === 'Y') ? null : (
                                    <Utils.CustomCodeErrorBoundary>
                                      <CustomCode.LineChartComponent1
                                        prepaidBillingHistory={
                                          prepaidBillingHistory
                                        }
                                      />
                                    </Utils.CustomCodeErrorBoundary>
                                  )}
                                </>
                              </View>
                            )}
                          </>
                        </View>
                      )}
                    </>
                    {/* prepaidtable */}
                    <>
                      {!(selectedTab2 === 'prepaidtable') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['Details'],
                              {
                                backgroundColor: 'rgb(211, 211, 211)',
                                borderBottomWidth: 1,
                                borderColor: theme.colors['White'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderTopWidth: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Bill Month */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Bill Month'}
                              </Text>
                            </View>
                          </View>
                          {/* Bill Amount */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Bill Amount'}
                              </Text>
                            </View>
                          </View>
                          {/* Download */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Download'}
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* PrepaidList */}
                    <FlatList
                      renderItem={({ item }) => {
                        const prepaidListData = item;
                        return (
                          <>
                            {/* prepaidtable */}
                            <>
                              {!(selectedTab2 === 'prepaidtable') ? null : (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderBottomWidth: 1,
                                      borderColor: 'rgb(211, 211, 211)',
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
                                  {/* Bill Month */}
                                  <View>
                                    {/* text */}
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text'
                                          ],
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {convertMonthNoToMonthName(
                                        prepaidListData?.billmonth
                                      )}
                                      {' - '}
                                      {prepaidListData?.billyear}
                                    </Text>
                                  </View>
                                  {/* Bill Amount */}
                                  <View>
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text'
                                          ],
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {'₹'}
                                      {(() => {
                                        const e =
                                          prepaidListData?.closingBalanceTemp;
                                        console.log(e);
                                        return e;
                                      })()}
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
                                              `http://20.192.2.50:9388/fgweb/web/json/plugin/com.fluentgrid.cp.plugin.DynamicServiceReportGenerator/service?name=JBVNL_PREPAID_BILL&month=${(() => {
                                                const e =
                                                  prepaidListData?.billmonth;
                                                console.log(e);
                                                return e;
                                              })()}&year=${(() => {
                                                const e =
                                                  prepaidListData?.billyear;
                                                console.log(e);
                                                return e;
                                              })()}&accountno=${(() => {
                                                const e =
                                                  prepaidListData?.accountNo;
                                                console.log(e);
                                                return e;
                                              })()}`
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
                              )}
                            </>
                          </>
                        );
                      }}
                      data={prepaidBillingHistory}
                      listKey={'F82OyDDI'}
                      keyExtractor={prepaidListData =>
                        prepaidListData?.id ||
                        prepaidListData?.uuid ||
                        JSON.stringify(prepaidListData)
                      }
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    />
                  </View>
                )}
              </>
              {/* Postpaid View */}
              <>
                {!(prepaidFlag === 'N') ? null : (
                  <View>
                    {/* section header */}
                    <>
                      {!(prepaidFlag === 'N') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)[
                                'section header 2'
                              ],
                              { justifyContent: 'center', paddingBottom: 12 }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Heading */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                alignSelf: 'center',
                                color: theme.colors['ShopAppBlue'],
                                fontFamily: 'Roboto_400Regular',
                                fontSize: 16,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'Billing History'}
                          </Text>
                        </View>
                      )}
                    </>
                    {/* Tabs */}
                    <>
                      {!(prepaidFlag === 'N') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)['Tabs'],
                            dimensions.width
                          )}
                        >
                          {/* tab1 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Dashboard */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab === 'Dashboard') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors['Custom Color'],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'Chart'}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab !== 'Dashboard') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab('Dashboard');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors['Light'],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'Chart'}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                          {/* tab2 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Content */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab === 'content') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors['Custom Color'],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'Table'}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab !== 'content') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab('content');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors['Light'],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'Table'}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* Dashboard */}
                    <>
                      {!(selectedTab === 'Dashboard') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)['Dashboard'],
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flex: 1, width: '100%' },
                              dimensions.width
                            )}
                          >
                            {/* View 2 */}
                            <>
                              {!billingHistoryScreen?.length ? null : (
                                <View>
                                  <>
                                    {!(prepaidFlag === 'N') ? null : (
                                      <Utils.CustomCodeErrorBoundary>
                                        <BillingHistory.LineChartComponent1
                                          billingHistoryScreen={
                                            billingHistoryScreen
                                          }
                                        />
                                      </Utils.CustomCodeErrorBoundary>
                                    )}
                                  </>
                                </View>
                              )}
                            </>
                          </View>
                        </View>
                      )}
                    </>
                    {/* Details */}
                    <>
                      {!(selectedTab === 'content') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['Details'],
                              {
                                backgroundColor: 'rgb(211, 211, 211)',
                                borderBottomWidth: 1,
                                borderColor: theme.colors['White'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderTopWidth: 1,
                                flex: 0,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Bill Month */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
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
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_700Bold',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Bill Month'}
                              </Text>
                            </View>
                          </View>
                          {/* Bill Amount */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
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
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_700Bold',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Bill Amount'}
                              </Text>
                            </View>
                          </View>
                          {/* Download */}
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
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_700Bold',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Download'}
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* PostpaidList */}
                    <FlatList
                      renderItem={({ item }) => {
                        const postpaidListData = item;
                        return (
                          <>
                            {/* Details */}
                            <>
                              {!(selectedTab === 'content') ? null : (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderBottomWidth: 1,
                                      borderColor: 'rgb(211, 211, 211)',
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
                                  {/* Bill Month */}
                                  <View>
                                    {/* text */}
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text'
                                          ],
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {(() => {
                                        const e = convertMonthNoToMonthName(
                                          postpaidListData?.BillMonth
                                        );
                                        console.log(e);
                                        return e;
                                      })()}
                                      {' - '}
                                      {postpaidListData?.BillYear}
                                    </Text>
                                  </View>
                                  {/* Bill Amount */}
                                  <View>
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text'
                                          ],
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {'₹'}
                                      {postpaidListData?.BillAmount}
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
                                              `http://20.192.2.50:9388/fgweb/web/json/plugin/com.fluentgrid.cp.plugin.DynamicServiceReportGenerator/service?name=POSTPAID_BILL&month=${postpaidListData?.BillMonth}&year=${postpaidListData?.BillYear}&scno=${serviceConNumber}`
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
                              )}
                            </>
                          </>
                        );
                      }}
                      data={billingHistoryScreen}
                      listKey={'5zILbKEZ'}
                      keyExtractor={postpaidListData =>
                        postpaidListData?.id ||
                        postpaidListData?.uuid ||
                        JSON.stringify(postpaidListData)
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
          </View>
        </ScrollView>
      </View>
      {/* botem tab1 */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
          },
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
              color={theme.colors['Community_Dark_UI']}
              name={'Entypo/text-document-inverted'}
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
              color={theme.colors['Community_Light_Black']}
              name={'MaterialIcons/payments'}
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
              {'Payments'}
            </Text>
          </View>
        </Touchable>
        {/* Support */}
        <>
          {!(prepaidFlag === 'N') ? null : (
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('CheckTicketStatusScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              disabled={false}
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
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(BillingScreen);
