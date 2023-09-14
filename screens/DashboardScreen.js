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
  Icon,
  Picker,
  ScreenContainer,
  Surface,
  Swiper,
  SwiperItem,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const DashboardScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const buildString = Scno => {
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
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

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
        console.log('on focus');
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
        const Scno = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.scno;
        setConsumerScNo(Scno);
        console.log(Scno);
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
        buildString(Constants['name']);

        const value0Ldb8r2G =
          Billdetailsjson && Billdetailsjson[0].data.BillDataJson[0];
        setViewbilldetails(value0Ldb8r2G);
        const Billdetailslog = value0Ldb8r2G;
        const prepaiddetailsJson = await (async () => {
          if (prepaidFlag === 'Y') {
            return (
              await CISAPPApi.prepaidApiPOST(Constants, { mtrno: meterNo })
            )?.json;
          }
        })();
        console.log(prepaiddetailsJson);
        const availableBalance = (prepaiddetailsJson && prepaiddetailsJson[0])
          ?.data[0]?.avail_balance;
        console.log(availableBalance);
        setAvailableBalance(availableBalance);
        const TodayDetailsJson = (
          await CISAPPApi.todayDetailsPOST(Constants, { mtrno: meterNo })
        )?.json;
        console.log(TodayDetailsJson);
        const LateastDate = (TodayDetailsJson && TodayDetailsJson[0])?.data[0]
          ?.READ_DATE;
        setLateastDate(LateastDate);
        const Todayusage = (TodayDetailsJson && TodayDetailsJson[0])?.data[0]
          ?.KVA_EXP;
        setTodayusage(Todayusage);
        const Currentload = (TodayDetailsJson && TodayDetailsJson[0])?.data[0]
          ?.L1_CURRENT;
        setCurrentload(Currentload);
        const Currentread = (TodayDetailsJson && TodayDetailsJson[0])?.data[0]
          ?.L1_VOLTAGE;
        setCurrentread(Currentread);
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
        setTextInputValue(props.route?.params?.name ?? '');
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [Currentload, setCurrentload] = React.useState('');
  const [Currentread, setCurrentread] = React.useState('');
  const [LateastDate, setLateastDate] = React.useState('');
  const [Todayusage, setTodayusage] = React.useState('');
  const [accountno, setAccountno] = React.useState('');
  const [availableBalance, setAvailableBalance] = React.useState('');
  const [consumerName, setConsumerName] = React.useState('');
  const [consumerScNo, setConsumerScNo] = React.useState('');
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [meterNumber, setMeterNumber] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [viewPrepaidDetails, setViewPrepaidDetails] = React.useState({});
  const [viewbilldetails, setViewbilldetails] = React.useState({});
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
            {'Home'}
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
          { flex: 1, flexBasis: 1, justifyContent: 'flex-start' },
          dimensions.width
        )}
      >
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'flex-start' },
            dimensions.width
          )}
        >
          {/* amblock */}
          <View
            style={StyleSheet.applyWidth(
              { paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            {/* viewbilldetails */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['viewbilldetails'],
                  { justifyContent: 'flex-start' }
                ),
                dimensions.width
              )}
            >
              {/* Enter customer service number */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['user name'],
                    { paddingLeft: 20, paddingRight: 20 }
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
                        setPrepaidFlag(prepaidFlag);
                        console.log(prepaidFlag);
                        const meterNo = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.meterNumber;
                        setMeterNumber(meterNo);
                        console.log(meterNo);
                        const Scno = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.scno;
                        setConsumerScNo(Scno);
                        console.log(Scno);
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
                        buildString(newPickerValue);

                        const valueDVb0aZQS =
                          Billdetailsjson &&
                          Billdetailsjson[0].data.BillDataJson[0];
                        setViewbilldetails(valueDVb0aZQS);
                        const Billdetailslog = valueDVb0aZQS;
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
                        const TodayDetailsJson = (
                          await CISAPPApi.todayDetailsPOST(Constants, {
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(TodayDetailsJson);
                        const LateastDate = (
                          TodayDetailsJson && TodayDetailsJson[0]
                        )?.data[0]?.READ_DATE;
                        setLateastDate(LateastDate);
                        const Todayusage = (
                          TodayDetailsJson && TodayDetailsJson[0]
                        )?.data[0]?.KVA_EXP;
                        setTodayusage(Todayusage);
                        const Currentload = (
                          TodayDetailsJson && TodayDetailsJson[0]
                        )?.data[0]?.L1_CURRENT;
                        setCurrentload(Currentload);
                        const Currentread = (
                          TodayDetailsJson && TodayDetailsJson[0]
                        )?.data[0]?.L1_VOLTAGE;
                        setCurrentread(Currentread);
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Background'],
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
            </View>

            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['postpaid view 2'],
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
            {/* postpaid */}
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
                      {viewbilldetails?.LEDGERAMT}
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
                      {'Due date: '}
                      {viewbilldetails?.BillDueDate}
                    </Text>
                  </View>
                  {/* View */}
                  <Button
                    onPress={() => {
                      try {
                        navigation.navigate('ViewBillScreen', {
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
                          ledgerAmt: viewbilldetails?.LEDGERAMT,
                          billYear: viewbilldetails?.BillYear,
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
            {/* Prepaid */}
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
                    {availableBalance}
                  </Text>
                  {/* Recharge Now */}
                  <Button
                    onPress={() => {
                      try {
                        navigation.navigate('RechargeScreen', {
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
            <>
              {!(prepaidFlag === 'Y') ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: 30,
                      paddingRight: 8,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    style={StyleSheet.applyWidth(
                      { marginBottom: 3 },
                      dimensions.width
                    )}
                    color={theme.colors['Medium']}
                    name={'Ionicons/refresh'}
                    size={20}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontFamily: 'Roboto_400Regular', fontSize: 13 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Last updated on: '}
                    {LateastDate}
                  </Text>
                </View>
              )}
            </>
            {/* card */}
            <>
              {!(prepaidFlag === 'Y') ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderColor: 'rgb(199, 198, 198)',
                      borderRadius: 8,
                      borderWidth: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 30,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingTop: 10,
                    }),
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { alignSelf: 'auto', justifyContent: 'flex-start' },
                      dimensions.width
                    )}
                  >
                    {/* Todays Usage */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 12,
                          opacity: 1,
                        },
                        dimensions.width
                      )}
                    >
                      {"Today's Usage"}
                    </Text>
                    {/* Amount  */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'center',
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 14,
                          lineHeight: 23,
                          opacity: 1,
                        },
                        dimensions.width
                      )}
                    >
                      {Todayusage}
                    </Text>
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      { alignSelf: 'auto' },
                      dimensions.width
                    )}
                  >
                    {/* Current Load */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 12,
                          opacity: 1,
                        },
                        dimensions.width
                      )}
                    >
                      {'Current Load'}
                    </Text>
                    {/* KW */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'center',
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_700Bold',
                          fontSize: 14,
                          lineHeight: 23,
                          opacity: 1,
                        },
                        dimensions.width
                      )}
                    >
                      {Currentload}
                    </Text>
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      { alignSelf: 'auto' },
                      dimensions.width
                    )}
                  >
                    {/* Current Reading */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 12,
                          opacity: 1,
                        },
                        dimensions.width
                      )}
                    >
                      {'Current Reading'}
                    </Text>
                    {/* KW */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'center',
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_700Bold',
                          fontSize: 14,
                          lineHeight: 23,
                          opacity: 1,
                        },
                        dimensions.width
                      )}
                    >
                      {Currentread}
                    </Text>
                  </View>
                </View>
              )}
            </>
          </View>
          {/* Promotions */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['Promotions'], {
                marginTop: 10,
                paddingLeft: 16,
                paddingRight: 16,
              }),
              dimensions.width
            )}
          >
            <CISAPPApi.FetchBANNERSPOST>
              {({ loading, error, data, refetchBANNERS }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <Swiper
                    renderItem={({ item }) => {
                      const swiperData = item;
                      return (
                        <>
                          <>
                            {!swiperData ? null : (
                              <SwiperItem
                                style={StyleSheet.applyWidth(
                                  {
                                    alignSelf: 'stretch',
                                    height: 108,
                                    width: '100%',
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* banner */}
                                <Image
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['banner'],
                                      { borderRadius: 8, height: 108 }
                                    ),
                                    dimensions.width
                                  )}
                                  resizeMode={'cover'}
                                  source={{ uri: `${swiperData?.attachment}` }}
                                />
                              </SwiperItem>
                            )}
                          </>
                        </>
                      );
                    }}
                    data={fetchData && fetchData[0].data}
                    listKey={'AauH4ysw'}
                    keyExtractor={swiperData =>
                      swiperData?.id ||
                      swiperData?.uuid ||
                      JSON.stringify(swiperData)
                    }
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.SwiperStyles(theme)['Swiper'],
                        {
                          alignSelf: 'auto',
                          backgroundColor: 'rgb(255, 255, 255)',
                          borderColor: 'rgb(222, 221, 221)',
                          height: 108,
                          position: 'relative',
                        }
                      ),
                      dimensions.width
                    )}
                    dotActiveColor={theme.colors.primary}
                    dotColor={theme.colors.light}
                    dotsTouchable={true}
                  />
                );
              }}
            </CISAPPApi.FetchBANNERSPOST>
          </View>
        </View>
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
              setTextInputValue(Constants['name']);
              navigation.navigate('DashboardScreen', {
                name: Constants['name'],
                Name: props.route?.params?.Name ?? '',
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
              color={theme.colors['Community_Dark_UI']}
              name={'Entypo/home'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: 'rgb(0,0,0)',
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
              setTextInputValue(Constants['name']);
              navigation.navigate('UsageScreen', {
                name: Constants['name'],
                Name: props.route?.params?.Name ?? '',
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
              name={'FontAwesome/bar-chart-o'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
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
              setTextInputValue(Constants['name']);
              navigation.navigate('BillingScreen', {
                name: Constants['name'],
                Name: props.route?.params?.Name ?? '',
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
              name={'Entypo/text-document-inverted'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
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
              setTextInputValue(Constants['name']);
              navigation.navigate('PaymentsScreen', {
                name: Constants['name'],
                Name: props.route?.params?.Name ?? '',
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

export default withTheme(DashboardScreen);
