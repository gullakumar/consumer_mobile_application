import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openShareUtil from '../utils/openShare';
import {
  AccordionGroup,
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
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

const NotificationsScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [ShowNav, setShowNav] = React.useState(false);
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [notifications, setNotifications] = React.useState({});
  const [selectedTab, setSelectedTab] = React.useState('dashboard');
  const [visibleHindi, setVisibleHindi] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'row' },
        dimensions.width
      )}
      hasTopSafeArea={false}
    >
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-around', marginTop: 12 },
          dimensions.width
        )}
      >
        {/* headerr */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['fef hed'], {
              marginTop: 33,
            }),
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
            {'Notifications'}
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={StyleSheet.applyWidth(
            { marginTop: 20 },
            dimensions.width
          )}
          bounces={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* notifications */}
          <CISAPPApi.FetchNotificationsPOST>
            {({ loading, error, data, refetchNotifications }) => {
              const notificationsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlatList
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <>
                        {/* view-n */}
                        <View
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['view-n'],
                              { paddingLeft: 8, paddingRight: 8 }
                            ),
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flex: 1,
                                marginLeft: 20,
                                paddingLeft: 10,
                                paddingRight: 10,
                              },
                              dimensions.width
                            )}
                          >
                            <AccordionGroup
                              style={StyleSheet.applyWidth(
                                GlobalStyles.AccordionGroupStyles(theme)[
                                  'Accordion'
                                ],
                                dimensions.width
                              )}
                              label={listData?.title}
                              caretColor={theme.colors['Strong']}
                              caretSize={24}
                              closedColor={theme.colors['Strong']}
                              iconSize={24}
                              openColor={theme.colors['Strong']}
                            >
                              {/* Title */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Roboto_300Light',
                                    fontSize: 14,
                                    lineHeight: 21,
                                    paddingTop: 5,
                                    textAlign: 'justify',
                                    whiteSpace: 'pre-line',
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.description}
                              </Text>
                            </AccordionGroup>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', width: 40 },
                              dimensions.width
                            )}
                          >
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    console.log();
                                    await openShareUtil(
                                      `${listData?.attachment}`
                                    );
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            ></Touchable>
                          </View>
                        </View>
                      </>
                    );
                  }}
                  data={(notificationsData && notificationsData[0])?.data}
                  listKey={'xwvcxUab'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                />
              );
            }}
          </CISAPPApi.FetchNotificationsPOST>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
