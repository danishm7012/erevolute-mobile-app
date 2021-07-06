import { Dimensions, Image, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'
import { ScrollView } from 'react-native'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function ScheduleBatches() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',

          alignItems: 'center',
        }}
      >
        <Image
          style={{
            resizeMode: 'stretch',
            width: screenWidth,
            marginVertical: 10,
            height: screenHeight / 2,
          }}
          source={require('../../assets/career/Scheduled-Batches-1024x576.jpg')}
        />
        <Image
          style={{
            resizeMode: 'stretch',
            width: screenWidth,
            marginVertical: 10,
            height: screenHeight / 3,
          }}
          source={require('../../assets/career/Admission-for-Batch-12-1024x1024.jpg')}
        />
        <Image
          style={{
            resizeMode: 'stretch',
            width: screenWidth,
            marginVertical: 10,
            height: screenHeight / 3,
          }}
          source={require('../../assets/career/Admission-for-Batch-13.jpg')}
        />
        <Image
          style={{
            resizeMode: 'stretch',
            width: screenWidth,
            marginVertical: 10,
            height: screenHeight / 3,
          }}
          source={require('../../assets/career/Admission-for-Batch-14.jpg')}
        />
        <Image
          style={{
            resizeMode: 'stretch',
            width: screenWidth,
            marginVertical: 10,
            height: screenHeight / 3,
          }}
          source={require('../../assets/career/Admission-for-Batch-15.jpg')}
        />
        <Image
          style={{
            resizeMode: 'stretch',
            width: screenWidth,
            marginVertical: 10,
            height: screenHeight / 3,
          }}
          source={require('../../assets/career/Admission-for-Batch-16.jpg')}
        />
      </View>
    </ScrollView>
  )
}

export default ScheduleBatches

ScheduleBatches.navigationOptions = (navData) => {
  return {
    headerTitle: 'Schedule Batches',
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
