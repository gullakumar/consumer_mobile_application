import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import * as Load from '../custom-files/Load';
import * as PowerQualityCurrent from '../custom-files/PowerQualityCurrent';
import * as PowerQualityPowerFactor from '../custom-files/PowerQualityPowerFactor';
import * as PowerVoltage from '../custom-files/PowerVoltage';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  Picker,
  RadioButton,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const LoadQualityScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const convertDateMonthYearToDateMonth = dateString => {
    const [day, monthIndex, year] = dateString.split(' ');
    const month = months[parseInt(monthIndex) - 1];
    console.log('month' + month);
    const str = '${month};';
    return str;
  };

  const buildConsumerString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

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
        setTextInputValue(Constants['name']);
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            accno: Constants['name'],
          })
        )?.json;
        console.log(consumerDetailsJson);
        const meterNo = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.meterNumber;
        setMeterNumber(meterNo && meterNo[0].data);
        console.log(meterNo);
        const loadpatternJson = (
          await CISAPPApi.loadPatternPOST(Constants, {
            accountno: Constants['name'],
            days: 30,
            mtrno: meterNo,
          })
        )?.json;
        console.log(loadpatternJson);

        const valuevqg27cj9 = loadpatternJson && loadpatternJson[0].data.data;
        setLoadpatterndeatils(valuevqg27cj9);
        const loadpattern = valuevqg27cj9;
        const voltageJson = (
          await CISAPPApi.powerQualityVoltagePOST(Constants, {
            accountno: Constants['name'],
            days: 30,
            mtrno: meterNo,
          })
        )?.json;
        console.log(voltageJson);

        const valueLVYdLx4e = voltageJson && voltageJson[0].data;
        setVoltageScreen(valueLVYdLx4e);
        const voltage = valueLVYdLx4e;
        const currentJson = (
          await CISAPPApi.powerQualityCurrentPOST(Constants, {
            accountno: Constants['name'],
            days: 30,
            mtrno: meterNo,
          })
        )?.json;
        console.log(currentJson);

        const valueOMzPNd1B = currentJson && currentJson[0].data;
        setCurrentScreen(valueOMzPNd1B);
        const current = valueOMzPNd1B;
        const powerfactorJson = (
          await CISAPPApi.powerQualityPowerFactorPOST(Constants, {
            accountno: Constants['name'],
            days: 30,
            mtrno: meterNo,
          })
        )?.json;
        console.log(powerfactorJson);

        const value3TboMYTn = powerfactorJson && powerfactorJson[0].data;
        setPowerfactorScreen(value3TboMYTn);
        const powerfactor = value3TboMYTn;
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [ShowNav, setShowNav] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState({});
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [loadpatterndeatils, setLoadpatterndeatils] = React.useState({});
  const [meterNumber, setMeterNumber] = React.useState({});
  const [powerfactorScreen, setPowerfactorScreen] = React.useState({});
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('content');
  const [serviceConNumber, setServiceConNumber] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [visibleHindi, setVisibleHindi] = React.useState(false);
  const [voltageScreen, setVoltageScreen] = React.useState({});

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'row' },
        dimensions.width
      )}
      hasTopSafeArea={false}
    >
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-around' },
          dimensions.width
        )}
      >
        {/* headerp */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['headerp 3'], {
              marginTop: 45,
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
          {/* Load and quality */}
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
            {'Load and Quality'}
          </Text>
        </View>

        <ScrollView
          bounces={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* Body */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, justifyContent: 'space-around' },
              dimensions.width
            )}
          >
            {/* amblock */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              {/* picker1 */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['category'],
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 16,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      marginBottom: 20,
                      paddingLeft: 20,
                      paddingRight: 20,
                    }
                  ),
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
                      const pickerValue = newPickerValue;
                      try {
                        const consumerDetailsJson = (
                          await CISAPPApi.consumerDetailsPOST(Constants, {
                            accno: Constants['name'],
                          })
                        )?.json;
                        console.log(consumerDetailsJson);
                        const prepaidFlag = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.prepaidFlag;
                        console.log(prepaidFlag);
                        const meterNo = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.meterNumber;
                        console.log(meterNo);
                        const loadpatternJson = (
                          await CISAPPApi.loadPatternPOST(Constants, {
                            accountno: newPickerValue,
                            days: radioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(loadpatternJson);

                        const valueex383bd9 =
                          loadpatternJson && loadpatternJson[0].data.data;
                        setLoadpatterndeatils(valueex383bd9);
                        const loadpattern = valueex383bd9;
                        const voltageJson = (
                          await CISAPPApi.powerQualityVoltagePOST(Constants, {
                            accountno: newPickerValue,
                            days: radioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(voltageJson);

                        const valuefYJVTsbc =
                          voltageJson && voltageJson[0].data;
                        setVoltageScreen(valuefYJVTsbc);
                        const voltage = valuefYJVTsbc;
                        const currentJson = (
                          await CISAPPApi.powerQualityCurrentPOST(Constants, {
                            accountno: newPickerValue,
                            days: radioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(currentJson);

                        const valuew90DNvLC =
                          currentJson && currentJson[0].data;
                        setCurrentScreen(valuew90DNvLC);
                        const current = valuew90DNvLC;
                        const powerfactorJson = (
                          await CISAPPApi.powerQualityPowerFactorPOST(
                            Constants,
                            {
                              accountno: newPickerValue,
                              days: radioButtonGroupValue,
                              mtrno: meterNo,
                            }
                          )
                        )?.json;
                        console.log(powerfactorJson);

                        const value3znV7KYC =
                          powerfactorJson && powerfactorJson[0].data;
                        setPowerfactorScreen(value3znV7KYC);
                        const powerfactor = value3znV7KYC;
                        setServiceConNumber(newPickerValue);
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
                      width: '95%',
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
              {/* Radiobutton view */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ViewStyles(theme)['View11'], {
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }),
                  dimensions.width
                )}
              >
                <RadioButtonGroup
                  onValueChange={newRadioButtonGroupValue => {
                    const handler = async () => {
                      try {
                        console.log(newRadioButtonGroupValue);
                        const consumerDetailsJson = (
                          await CISAPPApi.consumerDetailsPOST(Constants, {})
                        )?.json;
                        console.log(consumerDetailsJson);
                        const prepaidFlag = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.prepaidFlag;
                        console.log(prepaidFlag);
                        const meterNo = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.meterNumber;
                        console.log(meterNo);
                        const loadpatternJson = (
                          await CISAPPApi.loadPatternPOST(Constants, {
                            accountno: serviceConNumber,
                            days: newRadioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(loadpatternJson);

                        const valuelXi1HZc5 =
                          loadpatternJson && loadpatternJson[0].data.data;
                        setLoadpatterndeatils(valuelXi1HZc5);
                        const loadpattern = valuelXi1HZc5;
                        const voltageJson = (
                          await CISAPPApi.powerQualityVoltagePOST(Constants, {
                            accountno: serviceConNumber,
                            days: newRadioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(voltageJson);

                        const valuei0URzzRW =
                          voltageJson && voltageJson[0].data;
                        setVoltageScreen(valuei0URzzRW);
                        const voltage = valuei0URzzRW;
                        console.log(voltageJson);
                        const currentJson = (
                          await CISAPPApi.powerQualityCurrentPOST(Constants, {
                            accountno: serviceConNumber,
                            days: newRadioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(currentJson);

                        const valuebbjtAftO =
                          currentJson && currentJson[0].data;
                        setCurrentScreen(valuebbjtAftO);
                        const current = valuebbjtAftO;
                        const powerfactorJson = (
                          await CISAPPApi.powerQualityPowerFactorPOST(
                            Constants,
                            {
                              accountno: serviceConNumber,
                              days: newRadioButtonGroupValue,
                              mtrno: meterNo,
                            }
                          )
                        )?.json;
                        console.log(powerfactorJson);

                        const valueSfx9brTd =
                          powerfactorJson && powerfactorJson[0].data;
                        setPowerfactorScreen(valueSfx9brTd);
                        const powerfactor = valueSfx9brTd;
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  direction={'horizontal'}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 120,
                      },
                      dimensions.width
                    )}
                  >
                    <RadioButtonRow
                      style={StyleSheet.applyWidth(
                        { fontFamily: 'Roboto_400Regular', fontSize: 14 },
                        dimensions.width
                      )}
                      value={7}
                      label={'7Days'}
                      color={theme.colors.primary}
                      direction={'row-reverse'}
                      unselectedColor={theme.colors.primary}
                    />
                    <RadioButtonRow
                      style={StyleSheet.applyWidth(
                        { fontFamily: 'Roboto_400Regular', fontSize: 14 },
                        dimensions.width
                      )}
                      value={15}
                      label={'15Days'}
                      color={theme.colors.primary}
                      direction={'row-reverse'}
                      unselectedColor={theme.colors.primary}
                    />
                    <RadioButtonRow
                      style={StyleSheet.applyWidth(
                        { fontFamily: 'Roboto_400Regular', fontSize: 14 },
                        dimensions.width
                      )}
                      value={30}
                      label={'30Days'}
                      color={theme.colors.primary}
                      direction={'row-reverse'}
                      unselectedColor={theme.colors.primary}
                    />
                  </View>
                </RadioButtonGroup>
              </View>
              {/* section header */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['section header 2'],
                    {
                      flexDirection: 'column',
                      justifyContent: 'center',
                      paddingBottom: 12,
                      paddingTop: 15,
                    }
                  ),
                  dimensions.width
                )}
              >
                {/* Heading */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'center',
                      color: theme.colors['ShopAppBlue'],
                      fontFamily: 'Roboto_400Regular',
                      fontSize: 16,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'Load Pattern'}
                </Text>
              </View>
              {/* Dashboard */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Dashboard'],
                  dimensions.width
                )}
              >
                <>
                  {!loadpatterndeatils?.length ? null : (
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flex: 1, width: '100%' },
                        dimensions.width
                      )}
                    >
                      <Utils.CustomCodeErrorBoundary>
                        <Load.LineChartComponent2
                          loadpatterndeatils={loadpatterndeatils}
                        />
                      </Utils.CustomCodeErrorBoundary>
                    </View>
                  )}
                </>
              </View>
              {/* section header */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['section header 2'],
                    {
                      flexDirection: 'column',
                      justifyContent: 'center',
                      paddingBottom: 20,
                      paddingTop: 15,
                    }
                  ),
                  dimensions.width
                )}
              >
                {/* Heading */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'center',
                      color: theme.colors['ShopAppBlue'],
                      fontFamily: 'Roboto_400Regular',
                      fontSize: 16,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'Power Quality'}
                </Text>
              </View>
              {/* Tabs */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                {/* tab1 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                    dimensions.width
                  )}
                >
                  {/* content */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Selected */}
                    <>
                      {!(selectedTab === 'content') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 3,
                                borderColor: theme.colors['Primary'],
                                height: 25,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['Custom Color'],
                                    fontFamily: 'Roboto_400Regular',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Voltage'}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Unselected */}
                    <>
                      {!(selectedTab !== 'content') ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedTab('content');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderColor: theme.colors['Light'],
                                height: 25,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['Light'],
                                    fontFamily: 'Roboto_400Regular',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Voltage'}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </View>
                {/* tab2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                    dimensions.width
                  )}
                >
                  {/* content2 */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Selected */}
                    <>
                      {!(selectedTab === 'content2') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 3,
                                borderColor: theme.colors['Primary'],
                                height: 25,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['Custom Color'],
                                    fontFamily: 'Roboto_400Regular',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Current'}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Unselected */}
                    <>
                      {!(selectedTab !== 'content2') ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedTab('content2');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderColor: theme.colors['Light'],
                                height: 25,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['Light'],
                                    fontFamily: 'Roboto_400Regular',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Current'}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </View>
                {/* tab3 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                    dimensions.width
                  )}
                >
                  {/* content3 */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Selected */}
                    <>
                      {!(selectedTab === 'content3') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 3,
                                borderColor: theme.colors['Primary'],
                                height: 25,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['Custom Color'],
                                    fontFamily: 'Roboto_400Regular',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Power Factor'}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Unselected */}
                    <>
                      {!(selectedTab !== 'content3') ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedTab('content3');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderColor: theme.colors['Light'],
                                height: 25,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['Light'],
                                    fontFamily: 'Roboto_400Regular',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Power Factor'}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </View>
              </View>
              {/* content */}
              <>
                {!(selectedTab === 'content') ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Dashboard'],
                      dimensions.width
                    )}
                  >
                    <>
                      {!voltageScreen?.length ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flex: 1, width: '100%' },
                            dimensions.width
                          )}
                        >
                          <Utils.CustomCodeErrorBoundary>
                            <PowerVoltage.BarChartExample
                              voltageScreen={voltageScreen}
                            />
                          </Utils.CustomCodeErrorBoundary>
                        </View>
                      )}
                    </>
                  </View>
                )}
              </>
              {/* content2 */}
              <>
                {!(selectedTab === 'content2') ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Dashboard'],
                      dimensions.width
                    )}
                  >
                    <>
                      {!currentScreen?.length ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flex: 1, width: '100%' },
                            dimensions.width
                          )}
                        >
                          <Utils.CustomCodeErrorBoundary>
                            <PowerQualityCurrent.BarChartExample
                              currentScreen={currentScreen}
                            />
                          </Utils.CustomCodeErrorBoundary>
                        </View>
                      )}
                    </>
                  </View>
                )}
              </>
              {/* content3 */}
              <>
                {!(selectedTab === 'content3') ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Dashboard'],
                      dimensions.width
                    )}
                  >
                    <>
                      {!powerfactorScreen?.length ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flex: 1, width: '100%' },
                            dimensions.width
                          )}
                        >
                          <Utils.CustomCodeErrorBoundary>
                            <PowerQualityPowerFactor.BarChartExample
                              powerfactorScreen={powerfactorScreen}
                            />
                          </Utils.CustomCodeErrorBoundary>
                        </View>
                      )}
                    </>
                  </View>
                )}
              </>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoadQualityScreen);
