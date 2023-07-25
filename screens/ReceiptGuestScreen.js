import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Button,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const ReceiptGuestScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(196, 189, 189)',
          justifyContent: 'center',
          opacity: 1,
        },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={false}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Background'],
            borderColor: 'rgb(207, 204, 204)',
            borderRadius: 12,
            borderWidth: 1,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 22,
          },
          dimensions.width
        )}
      >
        {/* Messages */}
        <View
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
        >
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['ShopAppBlue'],
                fontFamily: 'Roboto_500Medium',
                fontSize: 18,
                lineHeight: 25,
                opacity: 1,
                paddingBottom: 3,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Payment Receipt'}
          </Text>
        </View>
        {/* Messages */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              alignSelf: 'stretch',
              borderBottomWidth: 1,
              borderColor: 'rgb(182, 179, 179)',
              borderStyle: 'dashed',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 3,
              paddingTop: 3,
            },
            dimensions.width
          )}
        >
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
          {/* Uitility name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_500Medium',
                lineHeight: 18,
                opacity: 0.96,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Utility Name'}
          </Text>
        </View>
        {/* amount-black */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'space-between',
              alignItems: 'stretch',
              alignSelf: 'stretch',
              paddingBottom: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
        >
          {/* card */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(199, 198, 198)',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
              }),
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 14,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {'Name'}
            </Text>
            {/* cname */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 14,
                  opacity: 1,
                  textAlign: 'auto',
                },
                dimensions.width
              )}
            >
              {props.route?.params?.name ?? ''}
            </Text>
          </View>
          {/* card */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'], {
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(199, 198, 198)',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
              }),
              dimensions.width
            )}
          >
            {/* Service connection no */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 14,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {'Service connection no'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 14,
                  opacity: 1,
                  textAlign: 'right',
                },
                dimensions.width
              )}
            >
              {props.route?.params?.Scno ?? ''}
            </Text>
          </View>
        </View>
        {/* accordion */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['accordion'], {
              alignSelf: 'stretch',
              paddingBottom: 3,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 3,
            }),
            dimensions.width
          )}
        >
          <AccordionGroup
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                color: theme.colors['ShopAppBlue'],
                fontFamily: 'Roboto_500Medium',
                fontSize: 16,
                paddingBottom: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            label={'Payment details'}
            caretSize={24}
            iconSize={24}
            expanded={true}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Paid */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'Amount paid'}
              </Text>
              {/* Bill amount */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'₹550.00'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  opacity: 0.8,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Paid on */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'Paid on'}
              </Text>
              {/* Date */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'12-05-2023 | 12:12 AM'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  opacity: 0.8,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Payment mode */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'Payment mode'}
              </Text>
              {/* Date */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'Online'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  opacity: 0.8,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Payment type */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'Payment type'}
              </Text>
              {/* UPI */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'UPI'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Permanent receipt number */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Permanent receipt number\nxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Transaction ID */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Transaction ID\nxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
              </Text>
            </View>
          </AccordionGroup>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              marginBottom: 20,
              marginTop: 20,
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Download print */}
          <Button
            style={StyleSheet.applyWidth(
              {
                borderRadius: 14,
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            activeOpacity={0.8}
            disabledOpacity={0.8}
            title={'Print'}
          />
          {/* Cancel */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('WelcomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Error'],
                borderColor: 'rgb(215, 213, 213)',
                borderRadius: 14,
                borderWidth: 1,
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                marginTop: 20,
                textAlign: 'center',
              },
              dimensions.width
            )}
            activeOpacity={0.8}
            disabledOpacity={0.8}
            title={'Close'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ReceiptGuestScreen);
