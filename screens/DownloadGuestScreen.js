import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const DownloadGuestScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [applePayValue, setApplePayValue] = React.useState(false);
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [debitCard1, setDebitCard1] = React.useState(false);
  const [debitCardFlowCompleted, setDebitCardFlowCompleted] =
    React.useState(false);
  const [downloadLink, setDownloadLink] = React.useState({});
  const [googlePayValue, setGooglePayValue] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [payPalValue, setPayPalValue] = React.useState(false);
  const [stepperValue, setStepperValue] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [ticketTypeA, setTicketTypeA] = React.useState(true);

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
          {'Download'}
        </Text>
      </View>
      {/* Content Frame */}
      <View
        style={StyleSheet.applyWidth(
          { justifyContent: 'center', paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        <CISAPPApi.FetchDownloadPOST>
          {({ loading, error, data, refetchDownload }) => {
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
              <FlatList
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* sort op */}
                      <View
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['sort op'],
                          dimensions.width
                        )}
                      >
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingBottom: 12,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              size={24}
                              name={'Foundation/page-export-pdf'}
                            />
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
                                    fontFamily: 'Roboto_700Bold',
                                    fontSize: 14,
                                    lineHeight: 21,
                                    paddingTop: 5,
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.name}
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
                                  try {
                                    const valueRbmcXdFK = listData?.attachment;
                                    setDownloadLink(valueRbmcXdFK);
                                    const attachment = valueRbmcXdFK;
                                    console.log(attachment);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                <Icon
                                  size={24}
                                  name={'SimpleLineIcons/arrow-down-circle'}
                                />
                              </Touchable>
                            </View>
                          </View>
                        </Touchable>
                      </View>
                    </>
                  );
                }}
                data={(fetchData && fetchData[0])?.data}
                listKey={'Nah52LG5'}
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
        </CISAPPApi.FetchDownloadPOST>
      </View>
      {/* Footer Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: 'flex-end',
            paddingBottom: 24,
          },
          dimensions.width
        )}
      >
        {/* Flex Touchable */}
        <View
          style={StyleSheet.applyWidth(
            { flexGrow: 0, flexShrink: 0 },
            dimensions.width
          )}
        >
          <Touchable>
            {/* Button Frame */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'auto',
                  backgroundColor: theme.colors['Community_Highlight_Blue'],
                  flexDirection: 'row',
                  flexGrow: 1,
                  flexShrink: 0,
                  justifyContent: 'center',
                  marginLeft: 12,
                  marginRight: 6,
                },
                dimensions.width
              )}
            >
              {/* Button Label */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.internalWhite,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    lineHeight: 18,
                    paddingBottom: 12,
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 12,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Download All'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DownloadGuestScreen);
