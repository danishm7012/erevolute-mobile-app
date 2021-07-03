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

const Cards = ({ imageAmazon, title, onSelect, price }) => {
  let TouchableCom = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCom = TouchableNativeFeedback
  }
  return (
    <View style={{ flex: 1 }}>
      <TouchableCom style={{ flex: 1 }} onPress={onSelect}>
        <Card>
          <Card.Image
            style={{
              height: screenHeight / 3,
              width: screenWidth / 1.1,
              resizeMode: 'stretch',
            }}
            source={imageAmazon}
          ></Card.Image>
          <Card.Divider />
          <Card.Divider />

          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                fontFamily: 'open-sans-bold',
                color: '#808080',
                justifyContent: 'space-between',
                // justifyContent: 'space-around',
                flexDirection: 'row',
              }}
            >
              <Text style={{ textAlign: 'left' }}>{title}</Text>
              <Text style={{ color: Color.accentColour, fontWeight: '700' }}>
                View More{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 15,
            }}
          >
            <View
              style={{
                flex: 1,
                fontFamily: 'open-sans-bold',
                color: '#808080',
                justifyContent: 'space-between',
                // justifyContent: 'space-around',
                flexDirection: 'row',
              }}
            >
              <Text style={{ textAlign: 'left' }}>
                <Ionicons
                  name='alarm-outline'
                  size={25}
                  color={Color.accentColour}
                />{' '}
                8 Weeks
              </Text>

              <Text style={{ color: '#121212' }}>
                <Ionicons
                  name='cash-outline'
                  size={20}
                  color={Color.accentColour}
                />{' '}
                {price}{' '}
              </Text>
            </View>
          </View>
        </Card>
      </TouchableCom>
    </View>
  )
}
export default Cards
