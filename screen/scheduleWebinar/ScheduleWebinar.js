import { Dimensions, Image, Pressable, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { Asset } from 'expo-asset'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import ImageView from 'react-native-image-viewing'
import React from 'react'

const images = [
  {
    uri: Asset.fromModule(
      require('../../assets/career/ScheduledWebinars-1024x576.jpg')
    ).uri,
  },
]
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function ScheduleWebinar() {
  const [visible, setIsVisible] = React.useState(false)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <Pressable onPress={() => setIsVisible(true)}>
        <Image
          style={{
            resizeMode: 'contain',
            width: screenWidth,
            height: screenHeight / 3.5,
          }}
          source={require('../../assets/career/ScheduledWebinars-1024x576.jpg')}
        />
      </Pressable>
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
