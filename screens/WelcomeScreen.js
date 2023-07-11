import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const WelcomeScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [showNav, setShowNav] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'row' },
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
                      navigation.navigate('WelcomeScreen');
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
                {/* Quick Pay */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      navigation.navigate('QuickPayScreen');
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
                        'MaterialCommunityIcons/contactless-payment-circle-outline'
                      }
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
                      {'Quick Pay'}
                    </Text>
                  </View>
                </Touchable>
                {/* Raise Ticket */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      navigation.navigate('AddTicketProcessGuestScreen');
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
                      name={'MaterialCommunityIcons/sticker-check-outline'}
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
                      {'Raise Ticket'}
                    </Text>
                  </View>
                </Touchable>
                {/* Check Ticket Status */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      navigation.navigate('CheckTicketStatusforGuestScreen');
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
                    <Icon size={24} name={'MaterialIcons/work-outline'} />
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
                      {'Check Ticket Status'}
                    </Text>
                  </View>
                </Touchable>
                {/* Downloads */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('DownloadGuestScreen');
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
                      navigation.navigate('HelpCenterGuestScreen');
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
                      navigation.navigate('FeedbackGuestScreen');
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
                      navigation.navigate('HelpCenterGuestScreen');
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
              marginTop: 15,
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
              {'Uitility Name'}
            </Text>
            <Image
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 40,
                  width: 140,
                }),
                dimensions.width
              )}
              resizeMode={'cover'}
              source={Images.Uitilitycislogo}
            />
          </View>
        </View>
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, justifyContent: 'space-around' },
            dimensions.width
          )}
        >
          {/* Announcements */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Announcements'],
              dimensions.width
            )}
          >
            <CISAPPApi.FetchANNOUNCEMENTSPOST>
              {({ loading, error, data, refetchANNOUNCEMENTS }) => {
                const fetchData = data;
                if (!fetchData || loading) {
                  return <ActivityIndicator />;
                }

                if (error) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      There was a problem fetching this data
                    </Text>
                  );
                }

                return (
                  <>
                    <Swiper
                      renderItem={({ item }) => {
                        const swiperData = item;
                        return (
                          <>
                            <>
                              {!swiperData ? null : (
                                <SwiperItem
                                  style={StyleSheet.applyWidth(
                                    { alignSelf: 'stretch' },
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignSelf: 'stretch',
                                        fontFamily: 'Roboto_700Bold',
                                        fontSize: 15,
                                        paddingBottom: 2,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        paddingTop: 8,
                                        textAlign: 'center',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {swiperData?.news_source}
                                  </Text>

                                  <Text
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignSelf: 'stretch',
                                        fontFamily: 'Roboto_400Regular',
                                        fontSize: 13,
                                        paddingBottom: 2,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        paddingTop: 8,
                                        textAlign: 'center',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {swiperData?.description}
                                  </Text>
                                </SwiperItem>
                              )}
                            </>
                          </>
                        );
                      }}
                      data={fetchData && fetchData[0].data}
                      listKey={'RXtlz9Ta'}
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
                            borderRadius: 5,
                            borderWidth: 1,
                            height: 108,
                            position: 'relative',
                          }
                        ),
                        dimensions.width
                      )}
                      dotColor={theme.colors.light}
                      dotActiveColor={theme.colors.primary}
                      dotsTouchable={true}
                    />
                  </>
                );
              }}
            </CISAPPApi.FetchANNOUNCEMENTSPOST>
          </View>
          {/* Promotions 2 */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Promotions'],
              dimensions.width
            )}
          >
            <CISAPPApi.FetchBANNERSPOST>
              {({ loading, error, data, refetchBANNERS }) => {
                const fetchData = data;
                if (!fetchData || loading) {
                  return <ActivityIndicator />;
                }

                if (error) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      There was a problem fetching this data
                    </Text>
                  );
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
                                  { alignSelf: 'stretch' },
                                  dimensions.width
                                )}
                              >
                                {/* banner */}
                                <Image
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['banner'],
                                      { height: 120 }
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
                    listKey={'NA7Jid6h'}
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
                          height: 120,
                          position: 'relative',
                        }
                      ),
                      dimensions.width
                    )}
                    dotColor={theme.colors.light}
                    dotActiveColor={theme.colors.primary}
                    dotsTouchable={true}
                  />
                );
              }}
            </CISAPPApi.FetchBANNERSPOST>
          </View>
          {/* Home buttons */}
          <View
            style={StyleSheet.applyWidth(
              GlobalStyles.ViewStyles(theme)['Home buttons'],
              dimensions.width
            )}
          >
            {/* Button Solid login sign up */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { fontFamily: 'Roboto_400Regular', marginBottom: 30 },
                dimensions.width
              )}
              type={'solid'}
              title={'Login'}
            >
              {'Sign up'}
            </Button>
            {/* Button Solid Quick Pay */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('QuickPayScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['GetFit Orange'],
                  fontFamily: 'Roboto_400Regular',
                  marginBottom: 30,
                },
                dimensions.width
              )}
              type={'solid'}
              title={'Quick Pay'}
            >
              {'Sign up'}
            </Button>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
