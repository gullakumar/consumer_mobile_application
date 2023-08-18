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

const HelpScreen = props => {
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
    <ScreenContainer hasSafeArea={true} scrollable={false}>
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
          {'Help'}
        </Text>
      </View>
      {/* FAQs */}
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* FAQs */}
        <ScrollView
          contentContainerStyle={StyleSheet.applyWidth(
            { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
            dimensions.width
          )}
          bounces={true}
          showsVerticalScrollIndicator={true}
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
              const fetchData = data?.json;
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
                          expanded={true}
                          iconSize={24}
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
                  listKey={'8lZQPtco'}
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
          </CISAPPApi.FetchFaqsPOST>
        </ScrollView>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HelpScreen);
