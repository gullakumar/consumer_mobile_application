import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const HelpCenterScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [SelectedTab, setSelectedTab] = React.useState('faq');
  const [selectedtag, setSelectedtag] = React.useState('General');
  const [tags, setTags] = React.useState([
    'General',
    'Account',
    'Service',
    'Payment',
  ]);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
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
          {'Help Center'}
        </Text>
      </View>
      {/* Tabs */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 35,
          },
          dimensions.width
        )}
      >
        {/* FAQ */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(SelectedTab === 'faq') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'FAQ'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(SelectedTab !== 'faq') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('faq');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_20'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'FAQ'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* Contact us */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(SelectedTab === 'contact') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Contact us'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(SelectedTab !== 'contact') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('contact');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_20'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Contact us'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
      </View>
      {/* FAQs */}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* FAQs */}
        <>
          {!(SelectedTab === 'faq') ? null : (
            <ScrollView
              contentContainerStyle={StyleSheet.applyWidth(
                { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
                dimensions.width
              )}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              <CISAPPApi.FetchFaqsPOST
                handlers={{
                  onData: fetchData => {
                    try {
                      console.log(fetchData?.data);
                    } catch (err) {
                      console.error(err);
                    }
                  },
                }}
              >
                {({ loading, error, data, refetchFaqs }) => {
                  const fetchData = data;
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
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['Custom #ffffff'],
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRadius: 20,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                marginBottom: 18,
                                marginTop: 10,
                                paddingBottom: 10,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            <AccordionGroup
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Strong'],
                                  fontFamily: 'Roboto_400Regular',
                                  fontSize: 16,
                                  paddingBottom: 8,
                                  paddingTop: 8,
                                },
                                dimensions.width
                              )}
                              label={listData?.question}
                              caretSize={24}
                              iconSize={24}
                              expanded={true}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    borderColor: theme.colors['Divider'],
                                    borderTopWidth: 1,
                                    paddingTop: 10,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_400Regular',
                                      lineHeight: 20,
                                      paddingBottom: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.answer}
                                </Text>
                              </View>
                            </AccordionGroup>
                          </View>
                        );
                      }}
                      data={(fetchData && fetchData[0])?.data}
                      listKey={'xBaRnPR8'}
                      keyExtractor={listData =>
                        listData?.id ||
                        listData?.uuid ||
                        JSON.stringify(listData)
                      }
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    />
                  );
                }}
              </CISAPPApi.FetchFaqsPOST>
            </ScrollView>
          )}
        </>
      </KeyboardAwareScrollView>
      {/* Contact us */}
      <>
        {!(SelectedTab === 'contact') ? null : (
          <ScrollView
            contentContainerStyle={StyleSheet.applyWidth(
              { paddingLeft: 24, paddingRight: 24 },
              dimensions.width
            )}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            {/* Customer Service */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.HelpCS}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Customer Service'}
                </Text>
              </View>
            </Touchable>
            {/* Whatsapp */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.HelpWA}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'WhatsApp'}
                </Text>
              </View>
            </Touchable>
            {/* Website */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync('https://draftbit.com/');
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.HelpWeb}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Website'}
                </Text>
              </View>
            </Touchable>
            {/* Facebook */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://www.facebook.com/draftbit/'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.HelpFB}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Facebook'}
                </Text>
              </View>
            </Touchable>
            {/* Twitter */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://twitter.com/draftbit'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.HelpTwtr}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Twitter'}
                </Text>
              </View>
            </Touchable>
            {/* Instagram */}
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://www.instagram.com/draftbit/'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 18 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 72,
                    paddingLeft: 24,
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.HelpIG}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginLeft: 12,
                    },
                    dimensions.width
                  )}
                >
                  {'Instagram'}
                </Text>
              </View>
            </Touchable>
          </ScrollView>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(HelpCenterScreen);
