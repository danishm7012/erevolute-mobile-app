import { Dimensions, Text, View } from 'react-native'

import Color from '../../colors/Color'
import React from 'react'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

function TextCard({ text1, text2, text3, text4, text5, text6 }) {
  return (
    <View
      style={{
        width: screenWidth,
        screenHeight: screenHeight / 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: screenWidth / 1.04,
          screenHeight: screenHeight / 3,
          padding: 20,
          backgroundColor: '#fff',
        }}
      >
        <Text
          style={{
            textAlign: 'left',
            color: Color.accentColour,
            fontSize: 22,
            fontWeight: '700',
          }}
        >
          {text1}
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 18, fontWeight: '700' }}>
          {text2}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            color: Color.accentColour,
            fontSize: 22,
            fontWeight: '700',
          }}
        >
          {text3}
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 18, fontWeight: '700' }}>
          {text4}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            color: Color.accentColour,
            fontSize: 22,
            fontWeight: '700',
          }}
        >
          {text5}
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 18, fontWeight: '700' }}>
          {text6}
        </Text>
      </View>
    </View>
  )
}

export default TextCard
