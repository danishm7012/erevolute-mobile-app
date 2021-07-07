import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect, useState } from 'react'

import { Asset } from 'expo-asset'
import Color from '../../colors/Color'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import ImageView from 'react-native-image-viewing'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

const images = [
  {
    uri: Asset.fromModule(
      require('../../assets/career/Scheduled-Batches-1024x576.jpg')
    ).uri,
  },
  {
    uri: Asset.fromModule(
      require('../../assets/career/Admission-for-Batch-12.jpg')
    ).uri,
  },
  {
    uri: Asset.fromModule(
      require('../../assets/career/Admission-for-Batch-13.jpg')
    ).uri,
  },
  {
    uri: Asset.fromModule(
      require('../../assets/career/Admission-for-Batch-14.jpg')
    ).uri,
  },
  {
    uri: Asset.fromModule(
      require('../../assets/career/Admission-for-Batch-15.jpg')
    ).uri,
  },
  {
    uri: Asset.fromModule(
      require('../../assets/career/Admission-for-Batch-16.jpg')
    ).uri,
  },
]
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function ScheduleBatches() {
  const [visible, setIsVisible] = useState(false)
  const [index, setIndex] = useState(0)

  const handleModal = () => {
    setIsVisible(true)
    setIndex(0)
  }
  const handleModalTwo = () => {
    setIsVisible(true)
    setIndex(1)
  }
  const handleModalThree = () => {
    setIsVisible(true)
    setIndex(2)
  }
  const handleModalFour = () => {
    setIsVisible(true)
    setIndex(3)
  }
  const handleModalFive = () => {
    setIsVisible(true)
    setIndex(4)
  }
  const handleModalSix = () => {
    setIsVisible(true)
    setIndex(5)
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',

          alignItems: 'center',
        }}
      >
        <ImageView
          images={images}
          imageIndex={index}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />

        <Pressable onPress={handleModal}>
          <Image
            style={{
              resizeMode: 'contain',
              width: screenWidth,

              height: screenHeight / 3.5,
            }}
            source={require('../../assets/career/Scheduled-Batches-1024x576.jpg')}
          />
        </Pressable>
        <Pressable onPress={handleModalTwo}>
          <Image
            style={{
              resizeMode: 'stretch',
              width: screenWidth,
              marginVertical: 10,
              height: screenHeight / 3,
            }}
            source={require('../../assets/career/Admission-for-Batch-12-1024x1024.jpg')}
          />
        </Pressable>
        <Pressable onPress={handleModalThree}>
          <Image
            style={{
              resizeMode: 'stretch',
              width: screenWidth,
              marginVertical: 10,
              height: screenHeight / 3,
            }}
            source={require('../../assets/career/Admission-for-Batch-13.jpg')}
          />
        </Pressable>
        <Pressable onPress={handleModalFour}>
          <Image
            style={{
              resizeMode: 'stretch',
              width: screenWidth,
              marginVertical: 10,
              height: screenHeight / 3,
            }}
            source={require('../../assets/career/Admission-for-Batch-14.jpg')}
          />
        </Pressable>
        <Pressable onPress={handleModalFive}>
          <Image
            style={{
              resizeMode: 'stretch',
              width: screenWidth,
              marginVertical: 10,
              height: screenHeight / 3,
            }}
            source={require('../../assets/career/Admission-for-Batch-15.jpg')}
          />
        </Pressable>
        <Pressable onPress={handleModalSix}>
          <Image
            style={{
              resizeMode: 'stretch',
              width: screenWidth,
              marginVertical: 10,
              height: screenHeight / 3,
            }}
            source={require('../../assets/career/Admission-for-Batch-16.jpg')}
          />
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default ScheduleBatches

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

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
