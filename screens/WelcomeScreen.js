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
                      name={
                        'MaterialCommunityIcons/contactless-payment-circle-outline'
                      }
                      size={24}
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
                {/* New Service Connection */}
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        await WebBrowser.openBrowserAsync(
                          'http://20.192.2.50:9388/cportal/#/ltReg'
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
                    <Icon name={'Ionicons/person-add-outline'} size={24} />
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
                      {'New Service Connection'}
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
                      name={'MaterialCommunityIcons/sticker-check-outline'}
                      size={24}
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
                    <Icon name={'MaterialIcons/work-outline'} size={24} />
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
                    <Icon name={'Feather/download'} size={24} />
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
                {/* Help */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('HelpGuestScreen');
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
                    <Icon name={'MaterialIcons/feedback'} size={24} />
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
                {/* Contact Us */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('ContactUsGuestScreen');
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
                          color: theme.colors.strong,
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
                      navigation.navigate('EnergyTipsGuestScreen');
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
                          color: theme.colors.strong,
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
                      navigation.navigate('PrivacyPolicyGuestScreen');
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
                          color: theme.colors.strong,
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
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-around',
            paddingBottom: 60,
            paddingTop: 30,
          },
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
              marginTop: 12,
              paddingLeft: 20,
              paddingRight: 20,
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
            size={30}
            uncheckedColor={theme.colors['Custom Color_22']}
            uncheckedIcon={'Feather/menu'}
          />
        </View>
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-around' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', marginBottom: 50, marginTop: -20 },
              dimensions.width
            )}
          >
            <Image
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['banner 3'],
                  { height: 90, width: 245 }
                ),
                dimensions.width
              )}
              resizeMode={'cover'}
              source={Images.FluentgridLogoGray}
            />
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', marginTop: 10 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Roboto_700Bold',
                    fontSize: 18,
                  }),
                  dimensions.width
                )}
              >
                {'Utility Self Service '}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 16,
                    marginTop: 10,
                  }),
                  dimensions.width
                )}
              >
                {'Consumer Mobile App'}
              </Text>
            </View>
          </View>
          {/* Home buttons */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Home buttons'],
                { marginBottom: 50 }
              ),
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
                {
                  borderRadius: 14,
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 16,
                  marginBottom: 30,
                },
                dimensions.width
              )}
              title={'Login'}
              type={'solid'}
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
                  borderRadius: 14,
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 16,
                  marginBottom: 10,
                },
                dimensions.width
              )}
              title={'Quick Pay'}
              type={'solid'}
            >
              {'Sign up'}
            </Button>
          </View>
          {/* Announcements */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Announcements'],
                { marginBottom: 50 }
              ),
              dimensions.width
            )}
          >
            <CISAPPApi.FetchANNOUNCEMENTSPOST>
              {({ loading, error, data, refetchANNOUNCEMENTS }) => {
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
                              <ScrollView
                                contentContainerStyle={StyleSheet.applyWidth(
                                  { paddingBottom: 5, paddingTop: 5 },
                                  dimensions.width
                                )}
                                bounces={true}
                                showsHorizontalScrollIndicator={true}
                                showsVerticalScrollIndicator={true}
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
                                      paddingBottom: 8,
                                      paddingLeft: 8,
                                      paddingRight: 8,
                                      paddingTop: 8,
                                      textAlign: 'justify',
                                      whiteSpace: 'pre-line',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {swiperData?.description}
                                </Text>
                              </ScrollView>
                            </SwiperItem>
                          )}
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
                    dotActiveColor={theme.colors.primary}
                    dotColor={theme.colors.light}
                    dotsTouchable={true}
                  />
                );
              }}
            </CISAPPApi.FetchANNOUNCEMENTSPOST>
          </View>
          {/* Promotions 2 */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['Promotions'], {
                marginBottom: 50,
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
                                      {
                                        borderRadius: 8,
                                        height: 108,
                                        width: '100%',
                                      }
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
        {/* Bottom line */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['bottom'], {
              alignItems: 'flex-end',
              borderColor: theme.colors['Custom #d8d8d8'],
              borderTopWidth: 1,
              justifyContent: 'center',
              paddingTop: 20,
            }),
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(0,0,0)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {'Powered by Fluentgrid '}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
