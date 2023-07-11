import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Button,
  Icon,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  TextInput,
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

const MakePaymentScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [numberInputValue3, setNumberInputValue3] = React.useState('');
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
                  {'\n'}
                </Text>
              </View>
            </AccordionGroup>
          </View>
          {/* Enter details */}
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
              label={'Enter details'}
              caretSize={24}
              iconSize={24}
              expanded={true}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    opacity: 1,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Amount */}
                <View
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['uname'],
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={theme.colors['Custom Color_20']}
                    name={'FontAwesome/rupee'}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, paddingLeft: 10, paddingRight: 10 },
                      dimensions.width
                    )}
                  >
                    <TextInput
                      onChangeText={newTextInputValue => {
                        try {
                          setTextInputValue(newTextInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          borderRadius: 8,
                          fontFamily: 'Roboto_400Regular',
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        },
                        dimensions.width
                      )}
                      placeholder={'Amount'}
                      editable={true}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                    />
                  </View>
                </View>
                {/* Mobile */}
                <View
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['uname'],
                      { marginTop: 8 }
                    ),
                    dimensions.width
                  )}
                >
                  <>
                    {!'+91' ? null : (
                      <Icon
                        size={24}
                        color={theme.colors['Custom Color_20']}
                        name={'Entypo/phone'}
                      />
                    )}
                  </>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      try {
                        setTextInputValue(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      {
                        borderRadius: 8,
                        fontFamily: 'Roboto_400Regular',
                        paddingBottom: 8,
                        paddingLeft: 5,
                        paddingRight: 2,
                        paddingTop: 8,
                        width: '14%',
                      },
                      dimensions.width
                    )}
                    disabled={true}
                    editable={false}
                    placeholder={'+91'}
                    placeholderTextColor={theme.colors['Custom Color_20']}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, paddingLeft: 10, paddingRight: 10 },
                      dimensions.width
                    )}
                  >
                    <NumberInput
                      onChangeText={newNumberInputValue => {
                        const numberInputValue = newNumberInputValue;
                        try {
                          setNumberInputValue3(newNumberInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.NumberInputStyles(theme)['Number Input'],
                          { borderRadius: 8, fontFamily: 'Roboto_400Regular' }
                        ),
                        dimensions.width
                      )}
                      value={numberInputValue3}
                      changeTextDelay={500}
                      editable={true}
                      maxLength={10}
                      placeholder={'1234567890'}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                    />
                  </View>
                </View>
                {/* Mail */}
                <View
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['uname'],
                      { marginTop: 8 }
                    ),
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={theme.colors['Custom Color_20']}
                    name={'MaterialCommunityIcons/email'}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, paddingLeft: 10, paddingRight: 10 },
                      dimensions.width
                    )}
                  >
                    <TextInput
                      onChangeText={newTextInputValue => {
                        try {
                          setTextInputValue(newTextInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          borderRadius: 8,
                          fontFamily: 'Roboto_400Regular',
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        },
                        dimensions.width
                      )}
                      placeholder={'abcdefgh@gmail.com'}
                      editable={true}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                    />
                  </View>
                </View>
              </View>
              {/* Section Header */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                    marginTop: 20,
                  },
                  dimensions.width
                )}
              >
                {/* Heading */}
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
                  {'Select Payment Method'}
                </Text>
              </View>
              {/* Payment Methods */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'column' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { borderRadius: 12, overflow: 'hidden' },
                    dimensions.width
                  )}
                >
                  <RadioButtonGroup
                    onValueChange={newRadioButtonGroupValue => {
                      const radioButtonGroupValue = newRadioButtonGroupValue;
                      try {
                        setRadioButtonGroupValue(newRadioButtonGroupValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    value={radioButtonGroupValue}
                  >
                    {/* Payment Methods */}
                    <CISAPPApi.FetchPaymentGatewayPOST>
                      {({ loading, error, data, refetchPaymentGateway }) => {
                        const paymentMethodsData = data;
                        if (!paymentMethodsData || loading) {
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
                          <FlashList
                            renderItem={({ item }) => {
                              const flashListData = item;
                              return (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      height: 64,
                                      justifyContent: 'space-between',
                                      paddingBottom: 10,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                      paddingTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Image
                                    style={StyleSheet.applyWidth(
                                      { height: 18, width: 60 },
                                      dimensions.width
                                    )}
                                    resizeMode={'cover'}
                                    source={{
                                      uri: `${flashListData?.attachment}`,
                                    }}
                                  />
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { flex: 1 },
                                      dimensions.width
                                    )}
                                  >
                                    <RadioButtonRow
                                      style={StyleSheet.applyWidth(
                                        { fontFamily: 'Inter_500Medium' },
                                        dimensions.width
                                      )}
                                      value={flashListData?.name}
                                      label={flashListData?.name}
                                      color={theme.colors.primary}
                                      unselectedColor={theme.colors.primary}
                                    />
                                  </View>
                                </View>
                              );
                            }}
                            data={
                              paymentMethodsData && paymentMethodsData[0].data
                            }
                            listKey={'oEfZPQP1'}
                            keyExtractor={flashListData =>
                              flashListData?.id ||
                              flashListData?.uuid ||
                              JSON.stringify(flashListData)
                            }
                            contentContainerStyle={StyleSheet.applyWidth(
                              {
                                borderRadius: 12,
                                overflow: 'hidden',
                                paddingBottom: 10,
                                paddingTop: 10,
                              },
                              dimensions.width
                            )}
                            estimatedItemSize={50}
                            numColumns={1}
                          />
                        );
                      }}
                    </CISAPPApi.FetchPaymentGatewayPOST>
                  </RadioButtonGroup>
                </View>
              </View>
            </AccordionGroup>
          </View>
        </View>
        {/* Pay */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('PaymentConfirmationScreen', {
                name: props.route?.params?.Name ?? '',
                Scno: props.route?.params?.Scno ?? '',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['GetFit Orange'],
              fontFamily: 'Roboto_400Regular',
              fontSize: 14,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 35,
            },
            dimensions.width
          )}
          title={'Make Payment'}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MakePaymentScreen);
