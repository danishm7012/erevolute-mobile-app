import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Text, View } from 'react-native'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'

function FAQ() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Awais</Text>
    </View>
  )
}

FAQ.navigationOptions = (navData) => {
  return {
    headerTitle: 'FAQ',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}
export default FAQ
