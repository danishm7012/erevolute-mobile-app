import { Dimensions, Image, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function ScheduleWebinar() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <Image
        style={{
          resizeMode: 'stretch',
          width: screenWidth,
          height: screenHeight / 2,
        }}
        source={require('../../assets/career/ScheduledWebinars-1024x576.jpg')}
      />
    </View>
  )
}

export default ScheduleWebinar

ScheduleWebinar.navigationOptions = (navData) => {
  return {
    headerTitle: 'Schedule Webinar',
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
