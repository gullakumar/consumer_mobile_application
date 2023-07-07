import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const CheckTicketStatusforGuestScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const getticketdeatils = consId => {
    console.log(`${consId}`);
    return `${consId}`;
  };

  const { theme } = props;
  const { navigation } = props;

  const [consId, setConsId] = React.useState('');
  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [noContent, setNoContent] = React.useState(false);
  const [tableData, setTableData] = React.useState([]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
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
              size={24}
              name={'Ionicons/arrow-back-sharp'}
              color={theme.colors['Custom Color_2']}
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
          GlobalStyles.ViewStyles(theme)['search and Add'],
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              justifyContent: 'center',
              marginLeft: 3,
              marginRight: 3,
            },
            dimensions.width
          )}
        >
          <Surface
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 16,
              },
              dimensions.width
            )}
            elevation={3}
          >
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setConsId(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 15,
                  height: 48,
                  paddingBottom: 5,
                  paddingLeft: 24,
                  paddingRight: 8,
                  paddingTop: 5,
                  width: '90%',
                },
                dimensions.width
              )}
              value={consId}
              placeholder={'Enter your consumer Id'}
              placeholderTextColor={theme.colors.textPlaceholder}
            />
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const gettickerdata = await CISAPPApi.getticketdeatilsPOST(
                      Constants,
                      { consId: consId }
                    );
                    console.log(gettickerdata);
                    setTableData(
                      (
                        (gettickerdata && gettickerdata[0])?.data &&
                        ((gettickerdata && gettickerdata[0])?.data)[0]
                      )?.data
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Icon
                name={'Feather/search'}
                size={24}
                color={theme.colors.textPlaceholder}
              />
            </Touchable>
          </Surface>
        </View>

        <View
          style={StyleSheet.applyWidth({ marginLeft: 16 }, dimensions.width)}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('AddTicketProcessGuestScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon size={30} name={'Ionicons/add-circle-outline'} />
          </Touchable>
        </View>
      </View>
      {/* Second Navigation Frame */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 15, paddingLeft: 12, paddingRight: 12 },
          dimensions.width
        )}
      >
        {/* 3 Options Frame */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', paddingBottom: 12, paddingTop: 12 },
            dimensions.width
          )}
        >
          {/* Option 1 Frame */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.communityIconBGColor,
                borderBottomLeftRadius: 64,
                borderTopLeftRadius: 64,
                flex: 1,
                flexGrow: 1,
                flexShrink: 0,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            {/* Flex Frame for Touchable */}
            <>
              {!menuTab1 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.communityIconBGColor,
                      borderBottomLeftRadius: 64,
                      borderTopLeftRadius: 64,
                    },
                    dimensions.width
                  )}
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
                          backgroundColor: theme.colors.communityTrueOption,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityDarkUI,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityWhite,
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
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
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.communityIconBGColor,
                      borderBottomLeftRadius: 64,
                      borderTopLeftRadius: 64,
                    },
                    dimensions.width
                  )}
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
                          backgroundColor: theme.colors.communityIconBGColor,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityIconBGColor,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityDarkUI,
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
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
              { flex: 1, flexGrow: 1, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* Flex Frame for Touchable */}
            <>
              {!menuTab2 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    { backgroundColor: theme.colors.communityIconBGColor },
                    dimensions.width
                  )}
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
                          backgroundColor: theme.colors.communityTrueOption,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityDarkUI,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityWhite,
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
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
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.communityIconBGColor,
                      paddingBottom: 1,
                      paddingTop: 1,
                    },
                    dimensions.width
                  )}
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
                          backgroundColor: theme.colors.communityIconBGColor,
                          borderBottomWidth: 2,
                          borderColor: theme.colors.communityIconBGColor,
                          borderLeftWidth: 2,
                          borderRadius: 64,
                          borderRightWidth: 2,
                          borderTopWidth: 2,
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'center',
                          paddingBottom: 9,
                          paddingLeft: 9,
                          paddingRight: 9,
                          paddingTop: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Label */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.communityDarkUI,
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 12,
                            lineHeight: 18,
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
            showsVerticalScrollIndicator={true}
            bounces={true}
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
                            {!(listData?.RequestStatus === undefined) ? null : (
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
                                                color:
                                                  theme.colors[
                                                    'Community_Dark_UI'
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
                                            numberOfLines={3}
                                            ellipsizeMode={'tail'}
                                          >
                                            {listData?.RequestNature}
                                          </Text>
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
                    listKey={'D00g0mgU'}
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
                                            color:
                                              theme.colors['Community_Dark_UI'],
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
                                        numberOfLines={3}
                                        ellipsizeMode={'tail'}
                                      >
                                        {listData?.RequestNature}
                                      </Text>
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
                    listKey={'TP6MKrM6'}
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
                      name={'MaterialIcons/event-busy'}
                      size={48}
                      color={theme.colors.communityIconFill}
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

export default withTheme(CheckTicketStatusforGuestScreen);
