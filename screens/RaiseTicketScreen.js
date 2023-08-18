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
  Picker,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RaiseTicketScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const category = cat => {
    return cat.map(team => {
      return { label: team.Type, value: team.id };
    });
  };

  const subCategoryOptions = subCatFun => {
    return subCatFun.map(team => {
      return { label: team.RequestNature, value: team.id };
    });
  };

  const subcategoryAPIAction = categoryId => {
    return 'csc/rest/RequestMWhr/' + categoryId + '/';

    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };

  const complaintCategory = comcat => {
    return comcat.map(team => {
      return { label: team.Type, value: team.id };
    });
  };

  const complaintSubCategoryOptions = subCategoryJson => {
    return subCategoryJson.map(team => {
      return { label: team.RequestNature, value: team.id };
    });
  };

  const buildSubCategory = categoryValue => {
    console.log(`csc/rest/RequestMWhr/${categoryValue}`);
    return `csc/rest/RequestMWhr/${categoryValue}`;
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
        const cat = (await CISAPPApi.serviceRequestCategoryPOST(Constants))
          ?.json;
        console.log(cat);
        setGlobalVariableValue({
          key: 'picker_option1',
          value: category(cat && cat[0].data.RequestTypeMJson),
        });
        const comcat = (await CISAPPApi.complaintCategoryPOST(Constants))?.json;
        console.log(comcat);
        setGlobalVariableValue({
          key: 'picker_option2',
          value: complaintCategory(comcat && comcat[0].data.RequestTypeMJson),
        });
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [comid, setComid] = React.useState('');
  const [consumerNo, setConsumerNo] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickerValue3, setPickerValue3] = React.useState('');
  const [pickerValue4, setPickerValue4] = React.useState('');
  const [raiseTicketCompMsg, setRaiseTicketCompMsg] = React.useState('');
  const [raiseTicketMsg, setRaiseTicketMsg] = React.useState('');
  const [requestDetails, setRequestDetails] = React.useState('');
  const [requestDetails1, setRequestDetails1] = React.useState('');
  const [requestnatureId, setRequestnatureId] = React.useState('');
  const [requestnatureId1, setRequestnatureId1] = React.useState('');
  const [saveid, setSaveid] = React.useState('');
  const [scNo, setScNo] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('faq');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [subCatJson, setSubCatJson] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textareacomplint, setTextareacomplint] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
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
          {'Raise Ticket'}
        </Text>
      </View>
      {/* tabs */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['tabs 2'],
          dimensions.width
        )}
      >
        {/* FAQ */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(selectedTab === 'faq') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Service request'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(selectedTab !== 'faq') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('faq');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_20'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Service request'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* contact */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(selectedTab === 'contact') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Complaint'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(selectedTab !== 'contact') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('contact');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_20'],
                      height: 41,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_20'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Complaint'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
      </View>
      {/* faq */}
      <>
        {!(selectedTab === 'faq') ? null : (
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'never'}
            showsVerticalScrollIndicator={true}
          >
            {/* FAQs */}
            <ScrollView
              contentContainerStyle={StyleSheet.applyWidth(
                { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
                dimensions.width
              )}
              bounces={true}
              showsVerticalScrollIndicator={true}
            >
              {/* Service connection number */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['user name'],
                    { marginBottom: 10, marginTop: 3 }
                  ),
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
                    onChangeText={newTextInputValue => {
                      try {
                        setGlobalVariableValue({
                          key: 'name',
                          value: newTextInputValue,
                        });
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
                    value={Constants['name']}
                    placeholder={'Service connection number'}
                    editable={true}
                    placeholderTextColor={theme.colors['Medium']}
                  />
                </View>
              </View>
              {/* category */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['category'],
                  dimensions.width
                )}
              >
                <Picker
                  onValueChange={newPickerValue => {
                    const handler = async () => {
                      try {
                        setPickerValue(newPickerValue);
                        const subCategoryJson = (
                          await CISAPPApi.serviceRequestSubCategoryPOST(
                            Constants,
                            { action: buildSubCategory(newPickerValue) }
                          )
                        )?.json;
                        console.log(subCategoryJson);
                        buildSubCategory(newPickerValue);
                        subCategoryOptions(subCategoryJson);
                        const subid = setGlobalVariableValue({
                          key: 'sub_category',
                          value: subCategoryOptions(
                            subCategoryJson &&
                              subCategoryJson[0].data.RequestMWhereJson
                          ),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  style={StyleSheet.applyWidth(
                    { height: 50 },
                    dimensions.width
                  )}
                  options={Constants['picker_option1']}
                  autoDismissKeyboard={true}
                  iconColor={theme.colors['Medium']}
                  iconSize={24}
                  leftIconMode={'inset'}
                  placeholder={'Select Category'}
                  placeholderTextColor={theme.colors['Medium']}
                  rightIconName={'Entypo/chevron-down'}
                  type={'solid'}
                />
              </View>
              {/* Sub category */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['category'],
                    { marginTop: 10 }
                  ),
                  dimensions.width
                )}
              >
                <Picker
                  onValueChange={newPickerValue => {
                    try {
                      setSaveid(
                        (() => {
                          const e = newPickerValue;
                          console.log(e);
                          return e;
                        })()
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { height: 50 },
                    dimensions.width
                  )}
                  options={Constants['sub_category']}
                  autoDismissKeyboard={true}
                  iconColor={theme.colors['Medium']}
                  iconSize={24}
                  leftIconMode={'inset'}
                  placeholder={'Select Sub Category'}
                  placeholderTextColor={theme.colors['Medium']}
                  rightIconName={'Entypo/chevron-down'}
                  type={'solid'}
                />
              </View>
              {/* Description */}
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 12, marginTop: 25, width: '100%' },
                  dimensions.width
                )}
              >
                <TextInput
                  onChangeText={newTextAreaValue => {
                    try {
                      setTextAreaValue(newTextAreaValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      fontFamily: 'Roboto_400Regular',
                      height: 100,
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 16,
                    },
                    dimensions.width
                  )}
                  value={textAreaValue}
                  placeholder={'Description'}
                  multiline={true}
                  numberOfLines={4}
                  placeholderTextColor={theme.colors['Medium']}
                />
              </View>
              {/* Button Solid */}
              <Button
                onPress={() => {
                  const handler = async () => {
                    try {
                      const servicerequestsave = (
                        await CISAPPApi.serviceRequestSavePOST(Constants, {
                          requestDetails: (() => {
                            const e = textAreaValue;
                            console.log(e);
                            return e;
                          })(),
                          requestnatureId: (() => {
                            const e = saveid;
                            console.log(e);
                            return e;
                          })(),
                          scNo: (() => {
                            const e = Constants['name'];
                            console.log(e);
                            return e;
                          })(),
                        })
                      )?.json;
                      console.log(servicerequestsave);
                      const raiseTicketMsg =
                        servicerequestsave &&
                        servicerequestsave[0].data.RequestMJson[0].message;
                      setRaiseTicketMsg(raiseTicketMsg);
                      console.log(raiseTicketMsg);
                      navigation.navigate('RaiseTicketSuccessScreen', {
                        raiseTicketMsg: raiseTicketMsg,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 14,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 16,
                    marginTop: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                title={'Submit'}
              />
            </ScrollView>
          </KeyboardAwareScrollView>
        )}
      </>
      {/* contact */}
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* contact */}
        <>
          {!(selectedTab === 'contact') ? null : (
            <View
              style={StyleSheet.applyWidth(
                { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
                dimensions.width
              )}
            >
              {/* Service connection number */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['user name'],
                    { marginBottom: 10, marginTop: 3 }
                  ),
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
                    onChangeText={newTextInputValue => {
                      try {
                        setGlobalVariableValue({
                          key: 'name',
                          value: newTextInputValue,
                        });
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
                    value={Constants['name']}
                    placeholder={'Enter service connection number'}
                    editable={true}
                    placeholderTextColor={theme.colors['Medium']}
                  />
                </View>
              </View>
              {/* category */}
              <View
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['category'],
                  dimensions.width
                )}
              >
                <Picker
                  onValueChange={newPickerValue => {
                    const handler = async () => {
                      const pickerValue = newPickerValue;
                      try {
                        setPickerValue3(newPickerValue);
                        const comsubcat = (
                          await CISAPPApi.complaintSubCategoryPOST(Constants, {
                            action: buildSubCategory(newPickerValue),
                          })
                        )?.json;
                        console.log(comsubcat);
                        buildSubCategory(newPickerValue);
                        complaintSubCategoryOptions(comsubcat);
                        setGlobalVariableValue({
                          key: 'sub_category2',
                          value: complaintSubCategoryOptions(
                            (() => {
                              const e =
                                comsubcat &&
                                comsubcat[0].data.RequestMWhereJson;
                              console.log(e);
                              return e;
                            })()
                          ),
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  style={StyleSheet.applyWidth(
                    { height: 50 },
                    dimensions.width
                  )}
                  options={Constants['picker_option2']}
                  autoDismissKeyboard={true}
                  iconColor={theme.colors['Medium']}
                  iconSize={24}
                  leftIconMode={'inset'}
                  placeholder={'Select Category'}
                  placeholderTextColor={theme.colors['Medium']}
                  rightIconName={'Entypo/chevron-down'}
                  type={'solid'}
                  value={pickerValue}
                />
              </View>
              {/* Sub category */}
              <View
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['category'],
                    { marginTop: 10 }
                  ),
                  dimensions.width
                )}
              >
                <Picker
                  onValueChange={newPickerValue => {
                    const pickerValue = newPickerValue;
                    try {
                      setComid(
                        (() => {
                          const e = newPickerValue;
                          console.log(e);
                          return e;
                        })()
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { height: 50 },
                    dimensions.width
                  )}
                  options={Constants['sub_category2']}
                  autoDismissKeyboard={true}
                  iconColor={theme.colors['Medium']}
                  iconSize={24}
                  leftIconMode={'inset'}
                  placeholder={'Select Sub Category'}
                  placeholderTextColor={theme.colors['Medium']}
                  rightIconName={'Entypo/chevron-down'}
                  type={'solid'}
                  value={pickerValue}
                />
              </View>
              {/* Description */}
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 12, marginTop: 25, width: '100%' },
                  dimensions.width
                )}
              >
                <TextInput
                  onChangeText={newTextAreaValue => {
                    try {
                      setTextareacomplint(newTextAreaValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors.divider,
                      borderLeftWidth: 1,
                      borderRadius: 8,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      fontFamily: 'Roboto_400Regular',
                      height: 100,
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 16,
                    },
                    dimensions.width
                  )}
                  value={textareacomplint}
                  placeholder={'Description'}
                  multiline={true}
                  numberOfLines={4}
                  placeholderTextColor={theme.colors.textPlaceholder}
                />
              </View>
              {/* Button Solid */}
              <Button
                onPress={() => {
                  const handler = async () => {
                    try {
                      const complaintsave = (
                        await CISAPPApi.complaintSavePOST(Constants, {
                          consumerNo: Constants['name'],
                          requestDetails1: textareacomplint,
                          requestnatureId1: comid,
                        })
                      )?.json;
                      console.log(complaintsave);
                      const complaintMsg =
                        complaintsave &&
                        complaintsave[0].data.RequestMJson[0].message;
                      console.log(complaintMsg);
                      setRaiseTicketCompMsg(complaintMsg);
                      navigation.navigate('RaiseTicketSuccessScreen', {
                        raiseTicketMsg: complaintMsg,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 14,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 16,
                    marginTop: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                title={'Submit'}
              />
            </View>
          )}
        </>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RaiseTicketScreen);
