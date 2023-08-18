import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const RaiseTicketSuccessScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Primary'], justifyContent: 'center' },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
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
          {/* Message */}
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
            {props.route?.params?.raiseTicketMsg ?? ''}
          </Text>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* OK */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('CheckTicketStatusScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['White'],
                borderColor: 'rgb(215, 213, 213)',
                borderRadius: 14,
                borderWidth: 1,
                color: 'rgb(0,0,0)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            activeOpacity={0.8}
            disabledOpacity={0.8}
            title={'OK'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RaiseTicketSuccessScreen);
