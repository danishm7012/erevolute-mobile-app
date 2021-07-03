import { Avatar, Button, Card, Icon } from 'react-native-elements'
import {
  Dimensions,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'

import Color from '../../colors/Color'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ServicesCard = ({ heading, detail, iconColor, backColor, onSelect }) => {
  let TouchableCom = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCom = TouchableNativeFeedback
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: screenWidth,
          height: screenHeight / 2.3,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}
      >
        <View
          style={{
            // flexGrow: 1,
            width: screenWidth / 1.04,
            height: screenHeight / 2.2,
            backgroundColor: backColor,
            elevation: 40,
            marginTop: 15,
          }}
        >
          <View
            style={{
              //  fontSize: 20,
              paddingHorizontal: 20,
              // fontFamily: 'open-sans-bold',
              paddingVertical: 20,
              //  textAlign: 'center',
            }}
          >
            <Ionicons name='caret-forward' size={45} color={iconColor} />
            <Text
              style={{
                fontSize: 20,
                //paddingHorizontal: 20,
                fontFamily: 'open-sans-bold',
                //  paddingVertical: 20,
                // textAlign: 'center',
                color: iconColor,
              }}
            >
              {heading}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              paddingHorizontal: 20,
              lineHeight: 23.3,
              letterSpacing: 0.3,
              color: iconColor,
            }}
          >
            {detail}
          </Text>
          <Button
            title='Read More'
            type='outline'
            containerStyle={{
              width: screenWidth / 3,
              marginTop: 15,
              marginLeft: 20,
            }}
            titleStyle={{ color: iconColor }}
            buttonStyle={{
              borderColor: iconColor,
              borderWidth: 2,
            }}
            onPress={onSelect}
          />
        </View>
      </View>
    </View>
  )
}
export default ServicesCard
