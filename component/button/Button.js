import { Button } from 'react-native-elements'
import React from 'react'
import { View } from 'react-native'

function Buttons() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Clear button'
        type='solid'
        buttonStyle={{ backgroundColor: '#eb2345' }}
        containerStyle={{ width: '80%' }}
        //   onPress={}
      />
    </View>
  )
}

export default Buttons
