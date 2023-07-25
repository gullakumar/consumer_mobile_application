import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const RechargeConfirmationScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Primary'], justifyContent: 'center' },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={false}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Background'],
            borderRadius: 12,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 60,
          },
          dimensions.width
        )}
      >
        <Image
          style={StyleSheet.applyWidth(
            { height: 100, position: 'absolute', top: -50, width: 100 },
            dimensions.width
          )}
          resizeMode={'cover'}
          source={Images.PaymentSuccess}
        />
        {/* Messages */}
        <View>
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_500Medium',
                fontSize: 16,
                lineHeight: 25,
                opacity: 0.95,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Recharge successful.'}
          </Text>
        </View>
        {/* Consumer details  */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginBottom: 50, marginTop: 50 },
            dimensions.width
          )}
        >
          <Image
            style={StyleSheet.applyWidth(
              {
                borderColor: 'rgb(217, 211, 211)',
                borderRadius: 12,
                borderWidth: 1,
                height: 76,
                marginBottom: 12,
                width: 76,
              },
              dimensions.width
            )}
            resizeMode={'center'}
            source={Images.Uitilitycislogo}
          />
          {/* Name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_500Medium',
                fontSize: 14,
                lineHeight: 25,
                opacity: 0.95,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {props.route?.params?.Name ?? ''}
          </Text>
          {/* Service number */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_400Regular',
                lineHeight: 18,
                marginTop: 2,
                opacity: 0.6,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {props.route?.params?.serviceConnectionNo ?? ''}
          </Text>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* View receipt */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('DashboardScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.primary,
                borderRadius: 14,
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            activeOpacity={0.8}
            disabledOpacity={0.8}
            title={'Ok'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RechargeConfirmationScreen);
