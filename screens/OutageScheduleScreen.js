import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Circle,
  DatePicker,
  Icon,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const OutageScheduleScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [date, setDate] = React.useState(new Date());
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [noContent, setNoContent] = React.useState(false);

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
          {'Outage Schedule'}
        </Text>
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
                        {'My Locations'}
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
                        {'My Locations'}
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
                        {'All locations'}
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
                        setListMissing(true);
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
                        {'All locations'}
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
          <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
            {/* Content Frame Tab 1 */}
            <>
              {!menuTab1 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexGrow: 1, flexShrink: 0 },
                    dimensions.width
                  )}
                >
                  <>
                    {!2 ? null : (
                      <DraftbitApi.FetchPostsGET limit={2}>
                        {({ loading, error, data, refetchPosts }) => {
                          const fetchData = data?.json;
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
                                                borderColor:
                                                  theme.colors.communityBorder,
                                                flexDirection: 'row',
                                                flexGrow: 0,
                                                flexShrink: 0,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Left Side Frame */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                { paddingTop: 12 },
                                                dimensions.width
                                              )}
                                            >
                                              {/* Date Frame */}
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    alignItems: 'center',
                                                    marginBottom: 6,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityTrueOption,
                                                      fontFamily:
                                                        'Roboto_400Regular',
                                                      fontSize: 12,
                                                      lineHeight: 18,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {'Tuesday'}
                                                </Text>
                                              </View>

                                              <Circle
                                                bgColor={
                                                  theme.colors.communityPrimary
                                                }
                                                size={36}
                                              >
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityWhite,
                                                      fontFamily:
                                                        'Roboto_400Regular',
                                                      fontSize: 15,
                                                      lineHeight: 21,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {'12'}
                                                </Text>
                                              </Circle>
                                            </View>
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
                                                {/* Rubik Text Style 12/18 Regular */}
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors
                                                          .communityTrueOption,
                                                      flexGrow: 0,
                                                      flexShrink: 0,
                                                      fontFamily:
                                                        'Roboto_700Bold',
                                                      fontSize: 12,
                                                      lineHeight: 18,
                                                    },
                                                    dimensions.width
                                                  )}
                                                  ellipsizeMode={'tail'}
                                                  numberOfLines={3}
                                                >
                                                  {'HH:MM To HH:MM'}
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
                                                        theme.colors
                                                          .communityTrueOption,
                                                      flexGrow: 0,
                                                      flexShrink: 0,
                                                      fontFamily:
                                                        'Rubik_400Regular',
                                                      fontSize: 12,
                                                      lineHeight: 18,
                                                      marginBottom: 6,
                                                    },
                                                    dimensions.width
                                                  )}
                                                  ellipsizeMode={'tail'}
                                                  numberOfLines={3}
                                                >
                                                  {
                                                    'Area Names to be displayed Area Names some dummy content here'
                                                  }
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
                              data={fetchData}
                              listKey={'bM1ReIdg'}
                              keyExtractor={listData =>
                                listData?.id ||
                                listData?.uuid ||
                                JSON.stringify(listData)
                              }
                              contentContainerStyle={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                              numColumns={1}
                            />
                          );
                        }}
                      </DraftbitApi.FetchPostsGET>
                    )}
                  </>
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
                />
              )}
            </>
            {/* Content Frame Tab 3 */}
            <>{!menuTab3 ? null : <View />}</>
            {/* sh */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['sh'], {
                  marginTop: 10,
                }),
                dimensions.width
              )}
            >
              {/* Heading */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['ShopAppBlue'],
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Outage Map'}
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
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
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
                    style={StyleSheet.applyWidth(
                      {
                        borderRadius: 8,
                        color: theme.colors.strong,
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 14,
                        height: 48,
                        paddingLeft: 24,
                        paddingRight: 8,
                        width: '90%',
                      },
                      dimensions.width
                    )}
                    placeholder={'Area Search'}
                    placeholderTextColor={theme.colors.textPlaceholder}
                  />
                  <Icon
                    color={theme.colors.textPlaceholder}
                    name={'Feather/search'}
                    size={24}
                  />
                </Surface>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      alignSelf: 'center',
                      paddingRight: 5,
                    }),
                    dimensions.width
                  )}
                >
                  {'12-03-23'}
                </Text>

                <Touchable>
                  <Icon name={'MaterialIcons/date-range'} size={30} />
                </Touchable>
              </View>
            </View>
            {/* map view */}
            <View
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['map view'],
                dimensions.width
              )}
            >
              <MapView
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 12,
                    flex: 1,
                    height: 220,
                    overflow: 'hidden',
                    width: '100%',
                  },
                  dimensions.width
                )}
                latitude={26.2389}
                longitude={73.0243}
                apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
                followsUserLocation={true}
                loadingEnabled={true}
                loadingIndicatorColor={theme.colors.appGreen}
                provider={'google'}
                rotateEnabled={true}
                scrollEnabled={true}
                showsCompass={true}
                showsPointsOfInterest={true}
                showsUserLocation={true}
                zoom={5}
                zoomEnabled={true}
              >
                <MapMarker
                  longitude={73.0243}
                  title={'Arvind Limba'}
                  description={'My Test Address'}
                  latitude={26.2389}
                  flat={true}
                  pinColor={theme.colors.custom_rgb255_0_0}
                />
                <MapMarker
                  longitude={75.7873}
                  title={'Arvind Limba'}
                  description={'My Test Address'}
                  latitude={26.9124}
                  flat={true}
                  pinColor={theme.colors.appGreen}
                />
              </MapView>
            </View>
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
                        'Your Events inbox is \ncurrently empty. \nNew events will appear here.'
                      }
                    </Text>
                  </View>
                </View>
              )}
            </>
            {/* System Notification Tab 3 */}
            <>
              {!menuTab3 ? null : (
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
                      name={'Ionicons/md-notifications-off'}
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
                        'Your Notifications inbox is \ncurrently empty. \nNew events will appear here.'
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

export default withTheme(OutageScheduleScreen);
