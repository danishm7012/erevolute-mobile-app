import { Avatar, Button, Card, Icon } from 'react-native-elements'
import {
  Dimensions,
  Image,
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

const ServicesDetail = (props) => {
  let TouchableCom = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCom = TouchableNativeFeedback
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={require('../../assets/images/banner/banner2.jpg')}
          style={{
            resizeMode: 'stretch',
            height: screenHeight / 2,
            width: screenWidth,
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button title='View Courses' />
      </View>
    </View>
  )
}
export default ServicesDetail
