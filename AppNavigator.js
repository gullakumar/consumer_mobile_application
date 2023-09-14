import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AddTicketProcessGuestScreen from './screens/AddTicketProcessGuestScreen';
import AdvancePayemntConfirmationScreen from './screens/AdvancePayemntConfirmationScreen';
import AdvancePayemntScreen from './screens/AdvancePayemntScreen';
import BillingScreen from './screens/BillingScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ChangePasswordSuccessScreen from './screens/ChangePasswordSuccessScreen';
import CheckTicketStatusScreen from './screens/CheckTicketStatusScreen';
import CheckTicketStatusforGuestScreen from './screens/CheckTicketStatusforGuestScreen';
import ConfirmOTPAddNewServiceConnectionScreen from './screens/ConfirmOTPAddNewServiceConnectionScreen';
import ConfirmOTPAddTicketprocessScreen from './screens/ConfirmOTPAddTicketprocessScreen';
import ConfirmOTPEmailUpdateScreen from './screens/ConfirmOTPEmailUpdateScreen';
import ConfirmOTPForgotpasswordScreen from './screens/ConfirmOTPForgotpasswordScreen';
import ConfirmOTPLoginScreen from './screens/ConfirmOTPLoginScreen';
import ConfirmOTPPhonenumberupdateScreen from './screens/ConfirmOTPPhonenumberupdateScreen';
import ContactUsGuestScreen from './screens/ContactUsGuestScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import DashboardScreen from './screens/DashboardScreen';
import DeleteServiceConnectionScreen from './screens/DeleteServiceConnectionScreen';
import DownloadGuestScreen from './screens/DownloadGuestScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import EnergyTipsGuestScreen from './screens/EnergyTipsGuestScreen';
import EnergyTipsScreen from './screens/EnergyTipsScreen';
import FeedbackGuestScreen from './screens/FeedbackGuestScreen';
import FeedbackGuestSuccessScreen from './screens/FeedbackGuestSuccessScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import FeedbackSuccessScreen from './screens/FeedbackSuccessScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import HelpGuestScreen from './screens/HelpGuestScreen';
import HelpScreen from './screens/HelpScreen';
import LoadQualityScreen from './screens/LoadQualityScreen';
import LoginOTPScreen from './screens/LoginOTPScreen';
import LoginScreen from './screens/LoginScreen';
import MakePaymentGuestScreen from './screens/MakePaymentGuestScreen';
import MakePaymentScreen from './screens/MakePaymentScreen';
import ManageAccountScreen from './screens/ManageAccountScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OutageScheduleScreen from './screens/OutageScheduleScreen';
import PaymentConfirmationGuestScreen from './screens/PaymentConfirmationGuestScreen';
import PaymentConfirmationScreen from './screens/PaymentConfirmationScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import PrivacyPolicyGuestScreen from './screens/PrivacyPolicyGuestScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import ProfileOptionsScreen from './screens/ProfileOptionsScreen';
import QuickPayScreen from './screens/QuickPayScreen';
import RaiseTicketGuestScreen from './screens/RaiseTicketGuestScreen';
import RaiseTicketGuestSuccessScreen from './screens/RaiseTicketGuestSuccessScreen';
import RaiseTicketScreen from './screens/RaiseTicketScreen';
import RaiseTicketSuccessScreen from './screens/RaiseTicketSuccessScreen';
import ReceiptGuestScreen from './screens/ReceiptGuestScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import RechargeConfirmationGuestScreen from './screens/RechargeConfirmationGuestScreen';
import RechargeConfirmationScreen from './screens/RechargeConfirmationScreen';
import RechargeGuestScreen from './screens/RechargeGuestScreen';
import RechargeScreen from './screens/RechargeScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterSuccessScreen from './screens/RegisterSuccessScreen';
import RemarksGuestSuccessScreen from './screens/RemarksGuestSuccessScreen';
import RemarksSuccessScreen from './screens/RemarksSuccessScreen';
import ServiceConnectionDetailsScreen from './screens/ServiceConnectionDetailsScreen';
import UpdateEmailScreen from './screens/UpdateEmailScreen';
import UpdateNewPasswordScreen from './screens/UpdateNewPasswordScreen';
import UpdatePhoneandEmailScreen from './screens/UpdatePhoneandEmailScreen';
import UpdatePhonenumberScreen from './screens/UpdatePhonenumberScreen';
import UsageScreen from './screens/UsageScreen';
import ViewBillGuestScreen from './screens/ViewBillGuestScreen';
import ViewBillScreen from './screens/ViewBillScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="WelcomeScreen"
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors['Custom #5f5a53'],
          },
          cardShadowEnabled: false,
          cardOverlayEnabled: false,
          keyboardHandlingEnabled: true,
          headerTitleStyle: theme.typography.custom14,
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="ConfirmOTPForgotpasswordScreen"
          component={ConfirmOTPForgotpasswordScreen}
          options={{
            title: 'Confirm OTP  Forgot password',
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register',
          }}
        />
        <Stack.Screen
          name="QuickPayScreen"
          component={QuickPayScreen}
          options={{
            title: 'Quick Pay',
          }}
        />
        <Stack.Screen
          name="ForgotpasswordScreen"
          component={ForgotpasswordScreen}
          options={{
            title: 'Forgot password',
          }}
        />
        <Stack.Screen
          name="UpdateNewPasswordScreen"
          component={UpdateNewPasswordScreen}
          options={{
            title: 'Update New Password',
          }}
        />
        <Stack.Screen
          name="PaymentConfirmationScreen"
          component={PaymentConfirmationScreen}
          options={{
            title: 'Payment Confirmation',
          }}
        />
        <Stack.Screen
          name="ReceiptScreen"
          component={ReceiptScreen}
          options={{
            title: 'Receipt',
          }}
        />
        <Stack.Screen
          name="ContactUsScreen"
          component={ContactUsScreen}
          options={{
            title: 'Contact Us',
          }}
        />
        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{
            title: 'Feedback',
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
          }}
        />
        <Stack.Screen
          name="RaiseTicketScreen"
          component={RaiseTicketScreen}
          options={{
            title: 'Raise Ticket',
          }}
        />
        <Stack.Screen
          name="CheckTicketStatusScreen"
          component={CheckTicketStatusScreen}
          options={{
            title: 'Check Ticket Status',
          }}
        />
        <Stack.Screen
          name="OutageScheduleScreen"
          component={OutageScheduleScreen}
          options={{
            title: 'Outage Schedule',
          }}
        />
        <Stack.Screen
          name="DownloadsScreen"
          component={DownloadsScreen}
          options={{
            title: 'Downloads',
          }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
          }}
        />
        <Stack.Screen
          name="ViewBillScreen"
          component={ViewBillScreen}
          options={{
            title: 'View Bill ',
          }}
        />
        <Stack.Screen
          name="PaymentsScreen"
          component={PaymentsScreen}
          options={{
            headerTitleAllowFontScaling: false,
            title: 'Payments',
          }}
        />
        <Stack.Screen
          name="UsageScreen"
          component={UsageScreen}
          options={{
            title: 'Usage',
          }}
        />
        <Stack.Screen
          name="BillingScreen"
          component={BillingScreen}
          options={{
            title: 'Billing',
          }}
        />
        <Stack.Screen
          name="ProfileOptionsScreen"
          component={ProfileOptionsScreen}
          options={{
            title: 'Profile Options',
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
          }}
        />
        <Stack.Screen
          name="LoadQualityScreen"
          component={LoadQualityScreen}
          options={{
            title: 'Load & Quality',
          }}
        />
        <Stack.Screen
          name="RechargeConfirmationScreen"
          component={RechargeConfirmationScreen}
          options={{
            title: 'Recharge Confirmation ',
          }}
        />
        <Stack.Screen
          name="ManageAccountScreen"
          component={ManageAccountScreen}
          options={{
            title: 'Manage Account',
          }}
        />
        <Stack.Screen
          name="ServiceConnectionDetailsScreen"
          component={ServiceConnectionDetailsScreen}
          options={{
            title: 'Service Connection Details',
          }}
        />
        <Stack.Screen
          name="ConfirmOTPAddNewServiceConnectionScreen"
          component={ConfirmOTPAddNewServiceConnectionScreen}
          options={{
            title: 'Confirm OTP  Add New Service Connection',
          }}
        />
        <Stack.Screen
          name="CheckTicketStatusforGuestScreen"
          component={CheckTicketStatusforGuestScreen}
          options={{
            title: 'Check Ticket Status for Guest',
          }}
        />
        <Stack.Screen
          name="AddTicketProcessGuestScreen"
          component={AddTicketProcessGuestScreen}
          options={{
            title: 'Add Ticket Process Guest',
          }}
        />
        <Stack.Screen
          name="ConfirmOTPAddTicketprocessScreen"
          component={ConfirmOTPAddTicketprocessScreen}
          options={{
            title: 'Confirm OTP  Add Ticket process',
          }}
        />
        <Stack.Screen
          name="RaiseTicketGuestScreen"
          component={RaiseTicketGuestScreen}
          options={{
            title: 'Raise Ticket Guest',
          }}
        />
        <Stack.Screen
          name="FeedbackGuestScreen"
          component={FeedbackGuestScreen}
          options={{
            title: 'Feedback Guest',
          }}
        />
        <Stack.Screen
          name="ContactUsGuestScreen"
          component={ContactUsGuestScreen}
          options={{
            title: 'Contact Us Guest',
          }}
        />
        <Stack.Screen
          name="DownloadGuestScreen"
          component={DownloadGuestScreen}
          options={{
            title: 'Download Guest',
          }}
        />
        <Stack.Screen
          name="AdvancePayemntScreen"
          component={AdvancePayemntScreen}
          options={{
            title: 'Advance Payemnt',
          }}
        />
        <Stack.Screen
          name="AdvancePayemntConfirmationScreen"
          component={AdvancePayemntConfirmationScreen}
          options={{
            title: 'Advance Payemnt Confirmation',
          }}
        />
        <Stack.Screen
          name="ViewBillGuestScreen"
          component={ViewBillGuestScreen}
          options={{
            title: 'View Bill Guest',
          }}
        />
        <Stack.Screen
          name="MakePaymentGuestScreen"
          component={MakePaymentGuestScreen}
          options={{
            title: 'Make Payment Guest',
          }}
        />
        <Stack.Screen
          name="PaymentConfirmationGuestScreen"
          component={PaymentConfirmationGuestScreen}
          options={{
            title: 'Payment Confirmation Guest',
          }}
        />
        <Stack.Screen
          name="ReceiptGuestScreen"
          component={ReceiptGuestScreen}
          options={{
            title: 'Receipt Guest',
          }}
        />
        <Stack.Screen
          name="UpdatePhoneandEmailScreen"
          component={UpdatePhoneandEmailScreen}
          options={{
            title: 'Update Phone and Email',
          }}
        />
        <Stack.Screen
          name="UpdatePhonenumberScreen"
          component={UpdatePhonenumberScreen}
          options={{
            title: 'Update Phone number',
          }}
        />
        <Stack.Screen
          name="UpdateEmailScreen"
          component={UpdateEmailScreen}
          options={{
            title: 'Update Email',
          }}
        />
        <Stack.Screen
          name="ConfirmOTPPhonenumberupdateScreen"
          component={ConfirmOTPPhonenumberupdateScreen}
          options={{
            title: 'Confirm OTP Phone number update',
          }}
        />
        <Stack.Screen
          name="ConfirmOTPEmailUpdateScreen"
          component={ConfirmOTPEmailUpdateScreen}
          options={{
            title: 'Confirm OTP Email Update',
          }}
        />
        <Stack.Screen
          name="MakePaymentScreen"
          component={MakePaymentScreen}
          options={{
            title: 'Make Payment',
          }}
        />
        <Stack.Screen
          name="LoginOTPScreen"
          component={LoginOTPScreen}
          options={{
            title: 'Login OTP',
          }}
        />
        <Stack.Screen
          name="ConfirmOTPLoginScreen"
          component={ConfirmOTPLoginScreen}
          options={{
            title: 'Confirm OTP Login',
          }}
        />
        <Stack.Screen
          name="DeleteServiceConnectionScreen"
          component={DeleteServiceConnectionScreen}
          options={{
            title: 'Delete Service Connection',
          }}
        />
        <Stack.Screen
          name="RechargeScreen"
          component={RechargeScreen}
          options={{
            title: 'Recharge',
          }}
        />
        <Stack.Screen
          name="FeedbackGuestSuccessScreen"
          component={FeedbackGuestSuccessScreen}
          options={{
            title: 'Feedback Guest Success',
          }}
        />
        <Stack.Screen
          name="FeedbackSuccessScreen"
          component={FeedbackSuccessScreen}
          options={{
            title: 'Feedback Success',
          }}
        />
        <Stack.Screen
          name="RaiseTicketSuccessScreen"
          component={RaiseTicketSuccessScreen}
          options={{
            title: 'Raise Ticket Success',
          }}
        />
        <Stack.Screen
          name="RaiseTicketGuestSuccessScreen"
          component={RaiseTicketGuestSuccessScreen}
          options={{
            title: 'Raise Ticket Guest Success',
          }}
        />
        <Stack.Screen
          name="RegisterSuccessScreen"
          component={RegisterSuccessScreen}
          options={{
            title: 'Register Success',
          }}
        />
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{
            title: 'Help',
          }}
        />
        <Stack.Screen
          name="RemarksGuestSuccessScreen"
          component={RemarksGuestSuccessScreen}
          options={{
            title: 'Remarks Guest Success',
          }}
        />
        <Stack.Screen
          name="HelpGuestScreen"
          component={HelpGuestScreen}
          options={{
            title: 'Help Guest',
          }}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{
            title: 'Change Password',
          }}
        />
        <Stack.Screen
          name="ChangePasswordSuccessScreen"
          component={ChangePasswordSuccessScreen}
          options={{
            title: 'Change Password Success',
          }}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
          options={{
            title: 'Privacy Policy',
          }}
        />
        <Stack.Screen
          name="EnergyTipsScreen"
          component={EnergyTipsScreen}
          options={{
            title: 'Energy Tips',
          }}
        />
        <Stack.Screen
          name="PrivacyPolicyGuestScreen"
          component={PrivacyPolicyGuestScreen}
          options={{
            title: 'Privacy  Policy Guest',
          }}
        />
        <Stack.Screen
          name="EnergyTipsGuestScreen"
          component={EnergyTipsGuestScreen}
          options={{
            title: 'Energy Tips Guest',
          }}
        />
        <Stack.Screen
          name="RemarksSuccessScreen"
          component={RemarksSuccessScreen}
          options={{
            title: 'Remarks Success',
          }}
        />
        <Stack.Screen
          name="RechargeGuestScreen"
          component={RechargeGuestScreen}
          options={{
            title: 'Recharge Guest',
          }}
        />
        <Stack.Screen
          name="RechargeConfirmationGuestScreen"
          component={RechargeConfirmationGuestScreen}
          options={{
            title: 'Recharge Confirmation  Guest',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
