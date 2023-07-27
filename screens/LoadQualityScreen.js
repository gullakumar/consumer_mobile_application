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
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { Image, Text, View, useWindowDimensions } from 'react-native';

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
        setServiceConNumber(Constants['name']);
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            action: buildConsumerString(Constants['name']),
          })
        )?.json;
        console.log(consumerDetailsJson);
        const meterNo = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.meterNumber;
        setMeterNumber(meterNo && meterNo[0].data);
        console.log(meterNo);
        const loadpatternJson = (
          await CISAPPApi.loadPatternPOST(Constants, { mtrno: 3821550 })
        )?.json;
        console.log(loadpatternJson);

        const valuevqg27cj9 = loadpatternJson && loadpatternJson[0].data.data;
        setLoadpatterndeatils(valuevqg27cj9);
        const loadpattern = valuevqg27cj9;
        const voltageJson = (
          await CISAPPApi.powerQualityVoltagePOST(Constants, {
            mtrno: 'GP1120814',
          })
        )?.json;
        console.log(voltageJson);
        setVoltageScreen(voltageJson && voltageJson[0].data);
        const currentJson = (
          await CISAPPApi.powerQualityCurrentPOST(Constants, {
            mtrno: 'GP1120814',
          })
        )?.json;
        console.log(currentJson);

        const valueOMzPNd1B = currentJson && currentJson[0].data;
        setCurrentScreen(valueOMzPNd1B);
        const current = valueOMzPNd1B;
        const powerfactorJson = (
          await CISAPPApi.powerQualityPowerFactorPOST(Constants, {
            mtrno: 'GP1120814',
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
  const [selectedTab, setSelectedTab] = React.useState('content');
  const [serviceConNumber, setServiceConNumber] = React.useState('');
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
              <Icon size={24} name={'AntDesign/arrowleft'} />
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
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Dashboard'],
                  { paddingTop: 15 }
                ),
                dimensions.width
              )}
            >
              <>
                {!loadpatterndeatils?.length ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flex: 1,
                        paddingTop: 5,
                        width: '100%',
                      },
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
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Dashboard'],
                      { paddingTop: 15 }
                    ),
                    dimensions.width
                  )}
                >
                  <>
                    {!voltageScreen?.length ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flex: 1,
                            paddingTop: 15,
                            width: '100%',
                          },
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
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Dashboard'],
                      { paddingTop: 15 }
                    ),
                    dimensions.width
                  )}
                >
                  <>
                    {!currentScreen?.length ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flex: 1,
                            paddingTop: 15,
                            width: '100%',
                          },
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
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['Dashboard'],
                      { paddingTop: 15 }
                    ),
                    dimensions.width
                  )}
                >
                  <>
                    {!powerfactorScreen?.length ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flex: 1,
                            paddingTop: 15,
                            width: '100%',
                          },
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
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoadQualityScreen);
