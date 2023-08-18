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

const ContactUsScreen = props => {
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
          {'Contact Us'}
        </Text>
      </View>
      {/* Contact us */}
      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { marginTop: 50, paddingLeft: 24, paddingRight: 24 },
          dimensions.width
        )}
        bounces={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Customer Service */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
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
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
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
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
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
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
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
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
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
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
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
    </ScreenContainer>
  );
};

export default withTheme(ContactUsScreen);
