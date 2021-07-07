import { Dimensions, Image, View } from 'react-native'

import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function HeaderLogo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{
          resizeMode: 'contain',
          width: screenWidth / 2.5,
          justifyContent: 'center',
          marginTop: 13,
        }}
        source={require('../../assets/erevoluteHeaderLogo.png')}
      />
    </View>
  )
}

export default HeaderLogo
