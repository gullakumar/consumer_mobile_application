import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
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

const AdvancePayemntScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const advanceAmountFun = (buttonValue, amountInput, updatedAmountValue) => {
    console.log('Amount' + amountInput);
    let updatedValue = 0;
    if (updatedAmountValue == 0) {
      updatedValue = amountInput + buttonValue + updatedAmountValue;
    } else {
      updatedValue = buttonValue + updatedAmountValue;
    }
    console.log('updatedValue' + updatedValue);

    return updatedValue;
  };

  const amountDisplayFun = amount => {
    console.log('amount' + amount);
    if (amount != null) {
      setrechargeAmount(amount);
    }
  };

  const { theme } = props;
  const { navigation } = props;

  const [addAmount1, setAddAmount1] = React.useState(100);
  const [addAmount2, setAddAmount2] = React.useState(250);
  const [addAmountt3, setAddAmountt3] = React.useState(450);
  const [amount1, setAmount1] = React.useState(100);
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [radioButtonGroup2Value, setRadioButtonGroup2Value] =
    React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [rechargeAmount, setRechargeAmount] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [updatedAmount, setUpdatedAmount] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
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
            <Icon name={'AntDesign/arrowleft'} size={24} />
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
          {'Advance Payment Now'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { marginTop: 40, paddingBottom: 20, paddingTop: 20 },
          dimensions.width
        )}
        bounces={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Payment summary */}
        <View>
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
            {/* Service connection number */}
            <View
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ViewStyles(theme)['category'], {
                  marginTop: 20,
                }),
                dimensions.width
              )}
            >
              {/* Service1 */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['uname'],
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Medium']}
                  name={'MaterialIcons/house'}
                  size={24}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 10, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <TextInput
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
                    placeholder={'Service Connection No'}
                    defaultValue={props.route?.params?.serviceConNo ?? ''}
                    editable={true}
                    placeholderTextColor={theme.colors['Medium']}
                  />
                </View>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  marginTop: 20,
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
                  color={theme.colors['Medium']}
                  name={'FontAwesome/rupee'}
                  size={24}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 10, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <NumberInput
                    onChangeText={newNumberInputValue => {
                      try {
                        setUpdatedAmount(newNumberInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.NumberInputStyles(theme)['Number Input'],
                        { fontFamily: 'Roboto_400Regular' }
                      ),
                      dimensions.width
                    )}
                    value={updatedAmount}
                    changeTextDelay={500}
                    editable={true}
                    placeholder={'Amount'}
                    placeholderTextColor={theme.colors['Medium']}
                  />
                </View>
              </View>
              {/* Mobile */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ViewStyles(theme)['uname'], {
                    marginTop: 20,
                  }),
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    onPress={() => {
                      try {
                        setAddAmount1(100);
                        const amountResult = advanceAmountFun(
                          addAmount1,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'],
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹100'}
                  />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    onPress={() => {
                      try {
                        setAddAmount2(250);
                        const amountResult = advanceAmountFun(
                          addAmount2,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'],
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹250'}
                  />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    onPress={() => {
                      try {
                        setAddAmountt3(450);
                        const amountResult = advanceAmountFun(
                          addAmountt3,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'],
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹450'}
                  />
                </View>
              </View>
            </View>
            {/* Section Header */}
            <View
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Section Header'],
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
                GlobalStyles.ViewStyles(theme)['Payment Methods 2'],
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
                      setRadioButtonGroupValue(radioButtonGroupValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={radioButtonGroupValue}
                >
                  {/* Payment Methods */}
                  <CISAPPApi.FetchPaymentGatewayPOST>
                    {({ loading, error, data, refetchPaymentGateway }) => {
                      const paymentMethodsData = data?.json;
                      if (loading) {
                        return <ActivityIndicator />;
                      }

                      if (error || data?.status < 200 || data?.status >= 300) {
                        return <ActivityIndicator />;
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
                          listKey={'iBgG2YLD'}
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
          </View>
        </View>
        {/* Pay */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('AdvancePayemntConfirmationScreen', {
                Name: props.route?.params?.Name ?? '',
                serviceConnectionNo: props.route?.params?.serviceConNo ?? '',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['GetFit Orange'],
              borderRadius: 14,
              fontFamily: 'Roboto_400Regular',
              fontSize: 16,
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

export default withTheme(AdvancePayemntScreen);
