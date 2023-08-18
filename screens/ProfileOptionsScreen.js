import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const ProfileOptionsScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [ShowNav, setShowNav] = React.useState(false);
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [selectedTab, setSelectedTab] = React.useState('dashboard');
  const [visibleHindi, setVisibleHindi] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'column' },
        dimensions.width
      )}
      hasTopSafeArea={false}
    >
      {/* headerr */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['fef hed'], {
            marginTop: 45,
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
          {'My Details'}
        </Text>
      </View>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'flex-start', marginTop: 12 },
          dimensions.width
        )}
      >
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          {/* amblock */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: theme.colors['Community_Heather_Gray'],
                borderRadius: 12,
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 30,
                paddingBottom: 25,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 15,
              },
              dimensions.width
            )}
          >
            {/* Service Connection No */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'auto',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {'Service Connection No : '}
                {Constants['name']}
                {'\n'}
              </Text>
            </View>
            {/* Mobile */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingLeft: 10,
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'auto',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {'Mobile : '}
                {Constants['mobileNumber']}
              </Text>
              {/* Edit */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('UpdatePhonenumberScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Primary'],
                      borderRadius: 100,
                      flexDirection: 'row',
                      paddingLeft: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom #ffffff']}
                    name={'AntDesign/edit'}
                    size={15}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom #ffffff'],
                        fontFamily: 'Inter_500Medium',
                        paddingBottom: 8,
                        paddingLeft: 10,
                        paddingRight: 15,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Edit'}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* Email */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingLeft: 10,
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'auto',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {'Email : '}
                {Constants['email']}
              </Text>
              {/* Edit */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('UpdateEmailScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Primary'],
                      borderRadius: 100,
                      flexDirection: 'row',
                      paddingLeft: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom #ffffff']}
                    name={'AntDesign/edit'}
                    size={15}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom #ffffff'],
                        fontFamily: 'Inter_500Medium',
                        paddingBottom: 8,
                        paddingLeft: 10,
                        paddingRight: 15,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Edit'}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* Change password */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingLeft: 10,
                },
                dimensions.width
              )}
            >
              {/* Change password */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangePasswordScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Primary'],
                      borderRadius: 100,
                      flexDirection: 'row',
                      paddingLeft: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom #ffffff']}
                    name={'AntDesign/edit'}
                    size={15}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom #ffffff'],
                        fontFamily: 'Inter_500Medium',
                        paddingBottom: 8,
                        paddingLeft: 10,
                        paddingRight: 15,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {'Change password'}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* Logout */}
            <Button
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'name',
                    value: '',
                  });
                  navigation.navigate('WelcomeScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Submit 2'],
                  { borderRadius: 14, fontSize: 16, marginTop: 20 }
                ),
                dimensions.width
              )}
              title={'Logout'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfileOptionsScreen);
