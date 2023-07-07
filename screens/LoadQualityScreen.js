import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import * as Load from '../custom-files/Load';
import * as Power from '../custom-files/Power';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const LoadQualityScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [ShowNav, setShowNav] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState('dashboard');

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
                      size={24}
                      name={
                        'MaterialCommunityIcons/account-arrow-right-outline'
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
                      {'Manage Account'}
                    </Text>
                  </View>
                </Touchable>
                {/* On Demand Reading */}
                <Touchable
                  onPress={() => {
                    try {
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
                          color: theme.colors.strong,
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
                          color: theme.colors.strong,
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
                          color: theme.colors.strong,
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
              {'Load & Quality'}
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
            {/* section header */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['section header 2'],
                  {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingBottom: 12,
                    paddingTop: 15,
                  }
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
                {'Load Pattern'}
              </Text>
            </View>
            {/* Dashboard */}
            <>
              {!(selectedTab === 'dashboard') ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Dashboard'],
                      { paddingTop: 15 }
                    ),
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flex: 1,
                        paddingTop: 5,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Utils.CustomCodeErrorBoundary>
                      <Load.LineChartComponent2 />
                    </Utils.CustomCodeErrorBoundary>
                  </View>
                </View>
              )}
            </>
            {/* section header */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['section header 2'],
                  {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingBottom: 20,
                    paddingTop: 15,
                  }
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
                {'Power Quality'}
              </Text>
            </View>
            {/* Tabs */}
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
                {/* Dahboard */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Selected */}
                  <>
                    {!(selectedTab === 'dashboard') ? null : (
                      <Touchable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 3,
                              borderColor: theme.colors['Primary'],
                              height: 25,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom Color'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Voltage'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                  {/* Unselected */}
                  <>
                    {!(selectedTab !== 'dashboard') ? null : (
                      <Touchable
                        onPress={() => {
                          try {
                            setSelectedTab('dashboard');
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
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Light'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Voltage'}
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
                {/* content */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Selected */}
                  <>
                    {!(selectedTab === 'content') ? null : (
                      <Touchable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 3,
                              borderColor: theme.colors['Primary'],
                              height: 25,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom Color'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Current'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                  {/* Unselected */}
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
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Light'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Current'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                </View>
              </View>
              {/* tab3 */}
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
                {/* content2 */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Selected */}
                  <>
                    {!(selectedTab === 'content2') ? null : (
                      <Touchable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 3,
                              borderColor: theme.colors['Primary'],
                              height: 25,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Custom Color'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Power Factor'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                  {/* Unselected */}
                  <>
                    {!(selectedTab !== 'content2') ? null : (
                      <Touchable
                        onPress={() => {
                          try {
                            setSelectedTab('content2');
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
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Light'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Power Factor'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                </View>
              </View>
            </View>
            {/* Dashboard */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Dashboard'],
                  { paddingTop: 15 }
                ),
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flex: 1,
                    paddingTop: 15,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Utils.CustomCodeErrorBoundary>
                  <Power.BarChartExample />
                </Utils.CustomCodeErrorBoundary>
              </View>
            </View>
          </View>
        </View>
        {/* botem tab1 */}
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['botem tab'],
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
                color={theme.colors['Community_Light_Black']}
                size={24}
                name={'Entypo/home'}
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
                color={theme.colors['Community_Light_Black']}
                size={24}
                name={'MaterialIcons/payments'}
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
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoadQualityScreen);
