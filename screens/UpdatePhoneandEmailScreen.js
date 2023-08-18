import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  Checkbox,
  Icon,
  Picker,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const UpdatePhoneandEmailScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const manageAccountFun = ManageAccountDetails => {
    return ManageAccountDetails.map(team => {
      return { label: team.new_added_account, value: team.new_added_account };
    });
  };

  const buildConsumerString = Scno => {
    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        setServiceConNo(Constants['name']);
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            action: buildConsumerString(Constants['name']),
          })
        )?.json;
        console.log(consumerDetailsJson);
        buildConsumerString(Constants['name']);

        const valuebeyRstba = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.name;
        setConsumerName(valuebeyRstba);
        const nameData = valuebeyRstba;
        const valueeOut98xC = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.address1;
        setConsumerAddress(valueeOut98xC);
        const consumerAddressData = valueeOut98xC;
        const mobileNoData = setGlobalVariableValue({
          key: 'mobileNumber',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data?.mobile,
        });
        const emailData = setGlobalVariableValue({
          key: 'emailValue',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data?.emailId,
        });

        const valuezsIVXeGE = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.prepaidFlag;
        setPrepaidFlag(valuezsIVXeGE);
        const prepaidFlagData = valuezsIVXeGE;
        const loadType = setGlobalVariableValue({
          key: 'loadType',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data
            ?.loadType,
        });
        const connectedLoad = setGlobalVariableValue({
          key: 'connectedLoad',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data
            ?.connectedLoad,
        });
        const contractedLoad = setGlobalVariableValue({
          key: 'contractedLoad',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data
            ?.contractedLoad,
        });
        const category = setGlobalVariableValue({
          key: 'category',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data
            ?.category,
        });
        const ManageAccountDetails = (
          await CISAPPApi.manageAccountsPOST(Constants, {
            accountNumber: Constants['name'],
          })
        )?.json;
        console.log(ManageAccountDetails);
        const result = setGlobalVariableValue({
          key: 'manageaccount_picker',
          value: manageAccountFun(
            ManageAccountDetails && ManageAccountDetails[0].data[0].data
          ),
        });
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [ShowNav, setShowNav] = React.useState(false);
  const [consumerAddress, setConsumerAddress] = React.useState('');
  const [consumerDetails, setConsumerDetails] = React.useState({});
  const [consumerName, setConsumerName] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('dashboard');
  const [serviceConNo, setServiceConNo] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'column' },
        dimensions.width
      )}
      hasTopSafeArea={false}
    >
      {/* headerp */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['headerp'], {
            height: 50,
            marginTop: 25,
          }),
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
          {'Account Summary'}
        </Text>
      </View>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'flex-start' },
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
                paddingBottom: 25,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 15,
              },
              dimensions.width
            )}
          >
            {/* serviceconectionno */}
            <View
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['user name'],
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Medium']}
                name={'MaterialIcons/house'}
                size={24}
              />
              <Picker
                onValueChange={newPickerValue => {
                  const handler = async () => {
                    try {
                      setServiceConNo(newPickerValue);
                      const consumerDetailsJson = (
                        await CISAPPApi.consumerDetailsPOST(Constants, {
                          action: buildConsumerString(newPickerValue),
                        })
                      )?.json;
                      console.log(consumerDetailsJson);

                      const valueaSX4XMzR = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.name;
                      setConsumerName(valueaSX4XMzR);
                      const nameData = valueaSX4XMzR;
                      const valueaZeONaJn = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.address1;
                      setConsumerAddress(valueaZeONaJn);
                      const consumerAddressData = valueaZeONaJn;
                      const mobileNoData = setGlobalVariableValue({
                        key: 'mobileNumber',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.mobile,
                      });
                      const emailData = setGlobalVariableValue({
                        key: 'emailValue',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.emailId,
                      });

                      const value87VfVq4A = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.prepaidFlag;
                      setPrepaidFlag(value87VfVq4A);
                      const prepaidFlagData = value87VfVq4A;
                      const loadType = setGlobalVariableValue({
                        key: 'loadType',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.loadType,
                      });
                      const connectedLoad = setGlobalVariableValue({
                        key: 'connectedLoad',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.connectedLoad,
                      });
                      const contractedLoad = setGlobalVariableValue({
                        key: 'contractedLoad',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.contractedLoad,
                      });
                      const category = setGlobalVariableValue({
                        key: 'category',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.category,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Background'],
                    borderWidth: 1,
                    fontFamily: 'Roboto_400Regular',
                    marginTop: -5,
                  },
                  dimensions.width
                )}
                options={Constants['manageaccount_picker']}
                autoDismissKeyboard={true}
                defaultValue={Constants['name']}
                iconColor={theme.colors['Medium']}
                iconSize={24}
                leftIconMode={'inset'}
                placeholder={' '}
                placeholderTextColor={theme.colors['Medium']}
                rightIconName={'Feather/chevron-down'}
                type={'solid'}
              />
            </View>
            {/* Name */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
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
                {'Name : '}
                {consumerName}
              </Text>
            </View>
            {/* Service Connection No */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              {/* Service connection no */}
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
                {'Service connection number: '}
                {serviceConNo}
              </Text>
            </View>
            {/* Address */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
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
                {'Address : '}
                {consumerAddress}
              </Text>
            </View>
            {/* Mobile */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
            </View>
            {/* Email */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
                {Constants['emailValue']}
              </Text>
            </View>
            {/* Load Type */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
                {'Load type: '}
                {Constants['loadType']}
              </Text>
            </View>
            {/* Connected Load */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
                {'Connected load: '}
                {Constants['connectedLoad']}
              </Text>
            </View>
            {/* Contracted Load */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
                {'Contracted load: '}
                {Constants['contractedLoad']}
              </Text>
            </View>
            {/* Category */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
                {'Category: '}
                {Constants['category']}
              </Text>
            </View>
            {/* Account type */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  alignSelf: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: -5,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'flex-start', justifyContent: 'center' },
                  dimensions.width
                )}
              >
                {/* Postpaid */}
                <>
                  {!(prepaidFlag === 'N') ? null : (
                    <Button
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Submit 2'],
                          {
                            backgroundColor: theme.colors['Custom #ffffff'],
                            color: theme.colors['NFT_TIME_Primary_Black'],
                            marginLeft: -5,
                            paddingLeft: 30,
                            paddingRight: 30,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'Account type : Postpaid'}
                    />
                  )}
                </>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'flex-start', justifyContent: 'center' },
                  dimensions.width
                )}
              >
                {/* Prepaid */}
                <>
                  {!(prepaidFlag === 'Y') ? null : (
                    <Button
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Submit 2'],
                          {
                            backgroundColor: theme.colors['Custom #ffffff'],
                            color: theme.colors['NFT_TIME_Primary_Black'],
                            marginLeft: -5,
                            paddingLeft: 30,
                            paddingRight: 30,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'Account type: Prepaid'}
                    />
                  )}
                </>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* botem tab1 */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['botem tab'], {
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
          }),
          dimensions.width
        )}
      >
        {/* Home */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('DashboardScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Community_Light_Black']}
              name={'Entypo/home'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Home'}
            </Text>
          </View>
        </Touchable>
        {/* Usage */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('UsageScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Community_Light_Black']}
              name={'FontAwesome/bar-chart-o'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Usage'}
            </Text>
          </View>
        </Touchable>
        {/* Billing */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BillingScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Community_Light_Black']}
              name={'Entypo/text-document-inverted'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Billing'}
            </Text>
          </View>
        </Touchable>
        {/* Payments */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('PaymentsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 65,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Community_Light_Black']}
              name={'MaterialIcons/payments'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Payments'}
            </Text>
          </View>
        </Touchable>
        {/* Support */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('CheckTicketStatusScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 55,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Community_Light_Black']}
              name={'MaterialIcons/support-agent'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Community_Light_Black'],
                  fontFamily: 'Roboto_400Regular',
                }),
                dimensions.width
              )}
            >
              {'Support'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(UpdatePhoneandEmailScreen);
