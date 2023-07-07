import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Button,
  Icon,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const ViewBillGuestScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [radioButtonGroup2Value, setRadioButtonGroup2Value] =
    React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 44,
                justifyContent: 'center',
                width: 44,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </View>
        </Touchable>
        {/* View bill and make payment */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 10,
            },
            dimensions.width
          )}
        >
          {'View Bill '}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingTop: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Payment summary */}
        <View>
          {/* pr1 */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['pr1'], {
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 3,
                paddingTop: 3,
              }),
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
                {props.route?.params?.Name ?? ''}
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
                {'Service connection no.'}
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
          {/* pr2 */}
          <View
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['accordion'], {
                marginLeft: 20,
                marginRight: 20,
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
              label={'Bill details'}
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
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Bill month */}
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
                  {'Bill month'}
                </Text>
                {/* Bill date */}
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
                  {props.route?.params?.BillMonth ?? ''}
                </Text>
              </View>
              {/* view */}
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
                {/* Bill date */}
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
                  {'Bill date'}
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
                  {props.route?.params?.BillDame ?? ''}
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
                {/* Bill number */}
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
                  {'Bill number'}
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
                  {props.route?.params?.BillNo ?? ''}
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
                {/* Due Date */}
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
                  {'Due date'}
                </Text>
                {/* last date */}
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
                  {props.route?.params?.BillDueDate ?? ''}
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
                {/* Bill amount */}
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
                  {'Bill amount'}
                </Text>
                {/* amount */}
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
                  {props.route?.params?.BillAmount ?? ''}
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
                {/* Arrears */}
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
                  {'Arrears'}
                </Text>
                {/* amount */}
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
                  {props.route?.params?.Arrear ?? ''}
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
                {/* Rebate amount */}
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
                  {'Rebate amount'}
                </Text>
                {/* amount */}
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
                  {props.route?.params?.RebateGiven ?? ''}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 1,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Net payable amount */}
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
                  {'Net payable amount'}
                </Text>
                {/* amount */}
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
                  {props.route?.params?.netcurrbill ?? ''}
                </Text>
              </View>
            </AccordionGroup>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ViewBillGuestScreen);
