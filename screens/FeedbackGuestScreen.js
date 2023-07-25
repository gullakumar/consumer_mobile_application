import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  Icon,
  ScreenContainer,
  StarRating,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const FeedbackGuestScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const startTimer = () => {
    const intervalId = setInterval(() => {
      if (seconds) {
        setSeconds(prev =>
          prev > 0 ? prev - 1 : (setSeconds(0), clearInterval(intervalId))
        );
      }
    }, 1000);

    return seconds;
  };

  const processErrorMessage = msg => {
    const scheme = {
      msg1: 'Password Changed Successfully',
      msg2: 'Problem while Sending OTP SMS',
      msg3: 'OTP send SuccessFully TO the existing Mobile',
      msg4: 'Input password details not same as in DB !',
      msg5: 'The user is already registered',
      msg6: 'You are not smart meter consumer',
      msg7: 'Invalid OTP',
      msg8: 'Problem while creating an user',
      msg9: 'User Creation Done Successfully',
      msg10: 'Mobile Number Doesnot exist for this consumer!',
      msg11: 'Problem while generating OTP!',
      msg12: 'Email ID Doesnot exist for this consumer in registration Table',
      msg13: 'OTP sent to your Registred Email Address',
      msg14: 'The OTP has expired!',
      msg15: 'Problem while updating password!',
      msg16: 'Existing email not Found',
      msg17: 'password details not found in the input data!',
      msg18: 'Old password and New Password must not be same !',
      msg19: 'Problem while updating password',
      msg20: 'OTP sent SuccessFully',
      msg21: 'Phone Number Changed Successfully',
      msg22: 'Logical Error',
      msg23: 'Entered consumer number is already registered',
      msg24: 'Entered consumer number already mapped',
      msg26: 'Accounts added for the existing consumer limit is exceeded',
      msg27: 'Should not same login account and entered account',
      msg28: '* Invalid Consumer Number',
      msg29: '* Invalid Credentials',
      msg30: 'Invalid Password',
      msg31: 'OTP Limit Exceeded, Please Try Again!',
      msg32: "Account Dosen't Have SmartMeter",
      msg: 'Your Feedback Successfully Submitted',
    };

    return scheme[msg];
  };

  const DisplayFun = display => {
    /*const myTimeout = setTimeout(messageFun,10000);

function messageFun() {
var msg = null;
msg = message;
console.log("message"+msg);
return msg;
}*/

    /*setDisplay(true);
const delayPromise = new Promise(r => setTimeout(r, 2000)).then(() => {
setDisplay(false); 
props.navigation.navigate('Welcome'); 
console.log("i came here"); 
} )*/

    setDisplay(false);
    new Promise(r => setTimeout(r, 5000)).then(() => {
      setDisplay(true);
      //props.navigation.navigate('BlankCopyScreen');
      console.log('i came here');
    });
  };

  const { theme } = props;
  const { navigation } = props;

  const [Email, setEmail] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Response, setResponse] = React.useState('');
  const [Suggestion, setSuggestion] = React.useState('');
  const [display, setDisplay] = React.useState(true);
  const [feedBackMsg, setFeedBackMsg] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [seconds, setSeconds] = React.useState(5);
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [timerResult, setTimerResult] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      scrollable={true}
      hasBottomSafeArea={false}
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
              size={24}
              name={'Ionicons/arrow-back-sharp'}
              color={theme.colors['Custom Color_2']}
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
          {'Feedback'}
        </Text>
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderRadius: 21,
            marginTop: 16,
            overflow: 'hidden',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Feedback Msg */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              alignSelf: 'center',
              color: theme.colors['Custom Color_9'],
              fontFamily: 'Roboto_400Regular',
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {feedBackMsg}
        </Text>
        <>
          {!feedBackMsg?.length ? null : (
            <Text
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'],
                dimensions.width
              )}
            >
              {seconds}
            </Text>
          )}
        </>
        {/* s1 */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['user name'], {
              marginBottom: 20,
              marginTop: 20,
            }),
            dimensions.width
          )}
        >
          <Icon
            size={24}
            name={'MaterialIcons/house'}
            color={theme.colors['Medium']}
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
                  setName(newTextInputValue);
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
              value={Name}
              placeholder={'Enter service connection number'}
              editable={true}
              placeholderTextColor={theme.colors['Medium']}
            />
          </View>
        </View>
        {/* s1 */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['user name'], {
              marginBottom: 20,
              marginTop: 20,
            }),
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Medium']}
            size={24}
            name={'Entypo/email'}
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
                  setEmail(newTextInputValue);
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
              value={Email}
              placeholder={'Enter your email'}
              placeholderTextColor={theme.colors['Medium']}
              editable={true}
            />
          </View>
        </View>
        {/* s1 */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['user name'], {
              marginBottom: 20,
              marginTop: 20,
            }),
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Medium']}
            size={24}
            name={'MaterialIcons/feedback'}
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
                  setSuggestion(newTextInputValue);
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
              value={Suggestion}
              placeholder={'Suggestion'}
              editable={true}
              placeholderTextColor={theme.colors['Medium']}
            />
          </View>
        </View>
        {/* Feedback View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.viewBG,
              borderRadius: 12,
              marginTop: 25,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <TextInput
            onChangeText={newTextAreaValue => {
              try {
                setResponse(newTextAreaValue);
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
            value={Response}
            placeholder={'Please leave your feedback here...'}
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
                setSeconds('');
                const feedbackvalues = (
                  await CISAPPApi.feedbackPOSTStatusAndText(Constants, {
                    email: Email,
                    name: Name,
                    response: Response,
                    suggestion: Suggestion,
                  })
                )?.json;
                console.log(feedbackvalues);
                const messageResult =
                  feedbackvalues && feedbackvalues[0].data[0].msg;
                setFeedBackMsg(messageResult);
                const seconds = startTimer();
                setSeconds(seconds);
                if (seconds === 0) {
                  navigation.navigate('WelcomeScreen');
                }
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
          title={'Send Feedback'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(FeedbackGuestScreen);
