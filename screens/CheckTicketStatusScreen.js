import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  Picker,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const CheckTicketStatusScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const getticketstatusGuestFun = regNo => {
    console.log(`csc/rest/RequestTWhr/${regNo}`);
    return `csc/rest/RequestTWhr/${regNo}`;
  };

  const getticketdeatils = consId => {
    console.log(`${consId}`);
    return `${consId}`;
  };

  const colorBasedOnStatus = item => {
    const status = item.RequestStatus;

    switch (status) {
      case 'Rectified':
      case 'Verification':
        return 'red';
      case 'Inspection Pending':
      case 'Pending For Approval AAO':
      case 'Pending':
        return 'green';
      // Add more cases as required
      default:
        return 'black'; // Default color
    }
  };

  const checkticketColorChange = requestStatus => {
    let color = 'black';
    let textStatus = null;
    if (requestStatus === 'Rectified' || requestStatus === 'Verification') {
      textStatus = requestStatus;
      color = 'orange';
    } else if (
      requestStatus === 'Inspection Pending' ||
      requestStatus === 'Pending For Approval AAO' ||
      requestStatus === 'Pending'
    ) {
      textStatus = requestStatus;
      color = 'red';
    } else if (requestStatus === 'Closed') {
      textStatus = requestStatus;
      color = 'green';
    }
    return color;
  };

  const buildConsumerString = Scno => {
    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
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
        const consumerId = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.consumerId;
        setConsumerId(consumerId);
        const getticketdata = (
          await CISAPPApi.getticketdeatilsPOST(Constants, {
            consId: consumerId,
          })
        )?.json;
        console.log(getticketdata);
        setTableData(
          (
            (getticketdata && getticketdata[0])?.data &&
            ((getticketdata && getticketdata[0])?.data)[0]
          )?.data
        );
        console.log();
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [checkticketRegisterNo, setCheckticketRegisterNo] = React.useState('');
  const [consId, setConsId] = React.useState('');
  const [consumerId, setConsumerId] = React.useState('');
  const [consumerName, setConsumerName] = React.useState('');
  const [consumerScNo, setConsumerScNo] = React.useState('');
  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [meterNumber, setMeterNumber] = React.useState('');
  const [noContent, setNoContent] = React.useState(false);
  const [pickerValue, setPickerValue] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [refreshingLaj3UIhC, setRefreshingLaj3UIhC] = React.useState(false);
  const [remarks, setRemarks] = React.useState('');
  const [tableData, setTableData] = React.useState([]);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* header */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['fef hed'],
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
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Check Ticket Status'}
        </Text>
      </View>
      {/* Search and add */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['search and Add'], {
            paddingBottom: 16,
            paddingTop: 16,
            width: '100%',
          }),
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 25,
            },
            dimensions.width
          )}
        >
          <Icon name={'MaterialIcons/house'} size={24} />
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
                  const consumerId = (
                    consumerDetailsJson && consumerDetailsJson[0]
                  )?.data?.consumerId;
                  setTextInputValue(newPickerValue);
                  const getticketdata = (
                    await CISAPPApi.getticketdeatilsPOST(Constants, {
                      consId: consumerId,
                    })
                  )?.json;
                  console.log(getticketdata);
                  setTableData(
                    (
                      (getticketdata && getticketdata[0])?.data &&
                      ((getticketdata && getticketdata[0])?.data)[0]
                    )?.data
                  );
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
            iconSize={24}
            leftIconMode={'inset'}
            placeholder={'Select an option'}
            rightIconName={'Ionicons/chevron-down-outline'}
            type={'solid'}
          />
        </View>

        <View
          style={StyleSheet.applyWidth({ marginLeft: 16 }, dimensions.width)}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('RaiseTicketScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={theme.colors['Medium']}
              name={'Ionicons/add-circle-outline'}
              size={30}
            />
          </Touchable>
        </View>
      </View>
      {/* Second Navigation Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* Option 1 Frame */}
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
          {/* Flex Frame for Touchable */}
          <>
            {!menuTab1 ? null : (
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setMenuTab1(true);
                      setMenuTab2(false);
                      setMenuTab3(false);
                      setListMissing(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Button Frame True */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Primary'],
                        flexGrow: 0,
                        flexShrink: 0,
                        height: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
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
                      {'Open Tickets'}
                    </Text>
                  </View>
                </Touchable>
              </View>
            )}
          </>
          {/* Flex Frame for Touchable */}
          <>
            {menuTab1 ? null : (
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setMenuTab1(true);
                      setMenuTab2(false);
                      setMenuTab3(false);
                      setListMissing(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Button Frame False */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 2,
                        borderColor: theme.colors['Light'],
                        flexGrow: 0,
                        flexShrink: 0,
                        height: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
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
                      {'Open Tickets'}
                    </Text>
                  </View>
                </Touchable>
              </View>
            )}
          </>
        </View>
        {/* Option 2 Frame */}
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
          {/* Flex Frame for Touchable */}
          <>
            {!menuTab2 ? null : (
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setMenuTab1(false);
                      setMenuTab2(true);
                      setMenuTab3(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Button Frame True */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Primary'],
                        flexGrow: 0,
                        flexShrink: 0,
                        height: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
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
                      {'All Tickets'}
                    </Text>
                  </View>
                </Touchable>
              </View>
            )}
          </>
          {/* Flex Frame for Touchable */}
          <>
            {menuTab2 ? null : (
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setMenuTab1(false);
                      setMenuTab3(false);
                      setMenuTab2(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Button Frame False */}
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
                    {/* Label */}
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
                      {'All Tickets'}
                    </Text>
                  </View>
                </Touchable>
              </View>
            )}
          </>
        </View>
      </View>
      {/* Scroll Content View */}
      <>
        {listMissing ? null : (
          <ScrollView
            style={StyleSheet.applyWidth({ flexGrow: 1 }, dimensions.width)}
            contentContainerStyle={StyleSheet.applyWidth(
              { flexShrink: 0 },
              dimensions.width
            )}
            bounces={true}
            showsVerticalScrollIndicator={true}
          >
            {/* Content Frame Tab 1 */}
            <>
              {!menuTab1 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexGrow: 1, flexShrink: 0 },
                    dimensions.width
                  )}
                >
                  <FlatList
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* List View Frame */}
                          <>
                            {!(listData?.RequestStatus !== 'Closed') ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    paddingLeft: 12,
                                    paddingRight: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Flex Frame for Touchable */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      flexGrow: 0,
                                      flexShrink: 0,
                                      marginBottom: 12,
                                      marginTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Touchable>
                                    {/* Record Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 2,
                                          borderColor:
                                            theme.colors.communityBorder,
                                          flexDirection: 'row',
                                          flexGrow: 0,
                                          flexShrink: 0,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* New Right Side */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            flexGrow: 0,
                                            flexShrink: 1,
                                            paddingBottom: 12,
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                            paddingTop: 12,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Second Row Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexGrow: 0,
                                              flexShrink: 1,
                                              paddingBottom: 6,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              {
                                                color: [
                                                  {
                                                    minWidth:
                                                      Breakpoints.Mobile,
                                                    value:
                                                      theme.colors[
                                                        'Community_Dark_UI'
                                                      ],
                                                  },
                                                  {
                                                    minWidth:
                                                      Breakpoints.Mobile,
                                                    value:
                                                      checkticketColorChange(
                                                        listData?.RequestStatus
                                                      ),
                                                  },
                                                ],
                                                fontFamily: 'Roboto_400Regular',
                                                fontSize: 12,
                                                lineHeight: 18,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.RegistrationDate}
                                            {'\n'}
                                            {listData?.RegistrationNo}
                                            {' | '}
                                            {listData?.type}
                                            {' | '}
                                            {(() => {
                                              const e = listData?.RequestStatus;
                                              console.log(e);
                                              return e;
                                            })()}
                                          </Text>
                                        </View>
                                        {/* Text Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexGrow: 0,
                                              flexShrink: 0,
                                              marginTop: 6,
                                              maxWidth: 300,
                                              paddingBottom: 6,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Rubik Text Style 12/18 Regular */}
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              {
                                                color:
                                                  theme.colors[
                                                    'Community_Dark_UI'
                                                  ],
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                fontFamily: 'Rubik_400Regular',
                                                fontSize: 12,
                                                lineHeight: 18,
                                                marginBottom: 6,
                                              },
                                              dimensions.width
                                            )}
                                            ellipsizeMode={'tail'}
                                            numberOfLines={3}
                                          >
                                            {listData?.RequestNature}
                                          </Text>
                                        </View>
                                        {/* Remarks */}
                                        <View>
                                          <Touchable
                                            onPress={() => {
                                              const handler = async () => {
                                                try {
                                                  const valuepryUV7Ys =
                                                    listData?.RegistrationNo;
                                                  setCheckticketRegisterNo(
                                                    valuepryUV7Ys
                                                  );
                                                  const registerNo =
                                                    valuepryUV7Ys;
                                                  const getTicketstatusJson = (
                                                    await CISAPPApi.getticketstatusPOST(
                                                      Constants,
                                                      {
                                                        ticketNumber:
                                                          registerNo,
                                                      }
                                                    )
                                                  )?.json;
                                                  console.log(
                                                    getTicketstatusJson
                                                  );
                                                  const remarks = (
                                                    getTicketstatusJson &&
                                                    getTicketstatusJson[0]
                                                      .data[0]
                                                  )?.data[0]?.Remarks;
                                                  console.log(remarks);
                                                  setRemarks(remarks);
                                                  navigation.navigate(
                                                    'RemarksSuccessScreen',
                                                    { remarksMsg: remarks }
                                                  );
                                                } catch (err) {
                                                  console.error(err);
                                                }
                                              };
                                              handler();
                                            }}
                                          >
                                            <Text
                                              style={StyleSheet.applyWidth(
                                                StyleSheet.compose(
                                                  GlobalStyles.TextStyles(
                                                    theme
                                                  )['Text'],
                                                  {
                                                    fontFamily:
                                                      'Roboto_400Regular',
                                                    textDecorationLine:
                                                      'underline',
                                                  }
                                                ),
                                                dimensions.width
                                              )}
                                            >
                                              {'Remarks'}
                                            </Text>
                                          </Touchable>
                                        </View>
                                      </View>
                                    </View>
                                  </Touchable>
                                </View>
                              </View>
                            )}
                          </>
                        </>
                      );
                    }}
                    data={tableData}
                    listKey={'t8yFhr6N'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    numColumns={1}
                  />
                </View>
              )}
            </>
            {/* Content Frame Tab 2 */}
            <>
              {!menuTab2 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexGrow: 1, flexShrink: 0 },
                    dimensions.width
                  )}
                >
                  <FlatList
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* List View Frame */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexGrow: 0,
                                flexShrink: 0,
                                paddingLeft: 12,
                                paddingRight: 12,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Flex Frame for Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  flexGrow: 0,
                                  flexShrink: 0,
                                  marginBottom: 12,
                                  marginTop: 12,
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                {/* Record Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderBottomWidth: 2,
                                      borderColor: theme.colors.communityBorder,
                                      flexDirection: 'row',
                                      flexGrow: 0,
                                      flexShrink: 0,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* New Right Side */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexGrow: 0,
                                        flexShrink: 1,
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Second Row Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          flexGrow: 0,
                                          flexShrink: 1,
                                          paddingBottom: 6,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: [
                                              {
                                                minWidth: Breakpoints.Mobile,
                                                value:
                                                  theme.colors[
                                                    'Community_Dark_UI'
                                                  ],
                                              },
                                              {
                                                minWidth: Breakpoints.Mobile,
                                                value: checkticketColorChange(
                                                  listData?.RequestStatus
                                                ),
                                              },
                                            ],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 13,
                                            lineHeight: 18,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.RegistrationDate}
                                        {'\n'}
                                        {listData?.RegistrationNo}
                                        {'| '}
                                        {listData?.type}
                                        {'| '}
                                        {listData?.RequestStatus}
                                      </Text>
                                    </View>
                                    {/* Text Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          flexGrow: 0,
                                          flexShrink: 0,
                                          marginTop: 6,
                                          maxWidth: 300,
                                          paddingBottom: 6,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Rubik Text Style 12/18 Regular */}
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors['Community_Dark_UI'],
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            fontFamily: 'Rubik_400Regular',
                                            fontSize: 13,
                                            lineHeight: 18,
                                            marginBottom: 6,
                                          },
                                          dimensions.width
                                        )}
                                        ellipsizeMode={'tail'}
                                        numberOfLines={3}
                                      >
                                        {listData?.RequestNature}
                                      </Text>
                                    </View>
                                    {/* Remarks */}
                                    <View>
                                      <Touchable
                                        onPress={() => {
                                          const handler = async () => {
                                            try {
                                              const valueHVMuFhVH =
                                                listData?.RegistrationNo;
                                              setCheckticketRegisterNo(
                                                valueHVMuFhVH
                                              );
                                              const registerNo = valueHVMuFhVH;
                                              const getTicketstatusJson = (
                                                await CISAPPApi.getticketstatusPOST(
                                                  Constants,
                                                  { ticketNumber: registerNo }
                                                )
                                              )?.json;
                                              console.log(getTicketstatusJson);
                                              const remarks = (
                                                getTicketstatusJson &&
                                                getTicketstatusJson[0].data[0]
                                              )?.data[0]?.Remarks;
                                              console.log(remarks);
                                              setRemarks(remarks);
                                              navigation.navigate(
                                                'RemarksSuccessScreen',
                                                { remarksMsg: remarks }
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          };
                                          handler();
                                        }}
                                      >
                                        <Text
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text'
                                              ],
                                              {
                                                fontFamily: 'Roboto_400Regular',
                                                textDecorationLine: 'underline',
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'Remarks'}
                                        </Text>
                                      </Touchable>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    data={tableData}
                    listKey={'Laj3UIhC'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshingLaj3UIhC}
                        onRefresh={() => {
                          try {
                            setRefreshingLaj3UIhC(true);
                            console.log();
                            setRefreshingLaj3UIhC(false);
                          } catch (err) {
                            console.error(err);
                            setRefreshingLaj3UIhC(false);
                          }
                        }}
                      />
                    }
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    numColumns={1}
                  />
                </View>
              )}
            </>
          </ScrollView>
        )}
      </>
      {/* No Content Frame */}
      <>
        {!listMissing ? null : (
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* System Notification Tab 2 */}
            <>
              {!menuTab2 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexShrink: 0,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {/* Flex Frame for Icons */}
                  <View>
                    <Icon
                      color={theme.colors.communityIconFill}
                      name={'MaterialIcons/event-busy'}
                      size={48}
                    />
                  </View>
                  {/* Headline Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexShrink: 0,
                        justifyContent: 'center',
                        marginLeft: 24,
                        marginRight: 24,
                        marginTop: 24,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Rubik Headline Style 18/24 Bold */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.communityIconFill,
                          fontFamily: 'Rubik_700Bold',
                          fontSize: 18,
                          lineHeight: 24,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Your Tickets inbox is \ncurrently empty. \nNew Tickets will appear here.'
                      }
                    </Text>
                  </View>
                </View>
              )}
            </>
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(CheckTicketStatusScreen);
