import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openShareUtil from '../utils/openShare';
import {
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
            {'Notifications'}
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={StyleSheet.applyWidth(
            { marginTop: 20 },
            dimensions.width
          )}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          {/* notifications */}
          <CISAPPApi.FetchNotificationsPOST>
            {({ loading, error, data, refetchNotifications }) => {
              const notificationsData = data;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error) {
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
                              {
                                marginLeft: 20,
                                marginRight: 20,
                                paddingLeft: 8,
                                paddingRight: 8,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, paddingLeft: 16 },
                              dimensions.width
                            )}
                          >
                            {/* Title */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Roboto_500Medium',
                                  fontSize: 14,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.title}
                            </Text>
                            {/* Title */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Roboto_300Light',
                                  fontSize: 14,
                                  lineHeight: 21,
                                  paddingTop: 5,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.description}
                            </Text>
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
                                    const valuer8om8VVs = listData?.attachment;
                                    setNotifications(valuer8om8VVs);
                                    const notification = valuer8om8VVs;
                                    console.log(notification);
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
