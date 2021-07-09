import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useState } from 'react'

import { Asset } from 'expo-asset'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../../component/headerLogo/HeaderLogo'
import ImageView from 'react-native-image-viewing'
import { ScrollView } from 'react-native'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const images = [
  {
    uri: Asset.fromModule(require('../../assets/career/hiringone.jpg')).uri,
  },
  {
    uri: Asset.fromModule(require('../../assets/career/hiring4.jpg')).uri,
  },
  {
    uri: Asset.fromModule(require('../../assets/career/hiring6.jpg')).uri,
  },
  {
    uri: Asset.fromModule(require('../../assets/career/hiring8.jpg')).uri,
  },
  {
    uri: Asset.fromModule(require('../../assets/career/hiring9.jpg')).uri,
  },
  {
    uri: Asset.fromModule(require('../../assets/career/hiring12.jpg')).uri,
  },
]

function Career(props) {
  const [visible, setIsVisible] = useState(false)
  const [index, setIndex] = useState(0)

  const handleModle = () => {
    setIsVisible(true)
    setIndex(0)
  }
  const handleModleTwo = () => {
    setIsVisible(true)
    setIndex(1)
  }
  const handleModleThree = () => {
    setIsVisible(true)
    setIndex(2)
  }
  const handleModleFour = () => {
    setIsVisible(true)
    setIndex(3)
  }
  const handleModleFive = () => {
    setIsVisible(true)
    setIndex(4)
  }
  const handleModleSix = () => {
    setIsVisible(true)
    setIndex(5)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: screenWidth,
            height: screenHeight / 4,
            justifyContent: 'center',

            alignItems: 'center',
          }}
        >
          <View style={{ width: screenWidth, height: screenHeight / 4 }}>
            <ImageBackground
              source={require('../../assets/career/career.jpg')}
              style={{
                width: screenWidth,
                height: screenHeight / 4,
                resizeMode: 'stretch',
              }}
            ></ImageBackground>
          </View>
        </View>
        <ImageView
          images={images}
          imageIndex={index}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
        <View
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <View style={{ width: screenWidth / 1.1, height: screenHeight / 3 }}>
            <Pressable onPress={handleModle}>
              <Image
                source={require('../../assets/career/hiringone.jpg')}
                style={{
                  width: screenWidth / 1.1,
                  height: screenHeight / 3,
                  resizeMode: 'stretch',
                }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <View style={{ width: screenWidth / 1.1, height: screenHeight / 3 }}>
            <Pressable onPress={handleModleTwo}>
              <Image
                source={require('../../assets/career/hiring4.jpg')}
                style={{
                  width: screenWidth / 1.1,
                  height: screenHeight / 3,
                  resizeMode: 'stretch',
                }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <View style={{ width: screenWidth / 1.1, height: screenHeight / 3 }}>
            <Pressable onPress={handleModleThree}>
              <Image
                source={require('../../assets/career/hiring6.jpg')}
                style={{
                  width: screenWidth / 1.1,
                  height: screenHeight / 3,
                  resizeMode: 'stretch',
                }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <View style={{ width: screenWidth / 1.1, height: screenHeight / 3 }}>
            <Pressable onPress={handleModleFour}>
              <Image
                source={require('../../assets/career/hiring8.jpg')}
                style={{
                  width: screenWidth / 1.1,
                  height: screenHeight / 3,
                  resizeMode: 'stretch',
                }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <View style={{ width: screenWidth / 1.1, height: screenHeight / 3 }}>
            <Pressable onPress={handleModleFive}>
              <Image
                source={require('../../assets/career/hiring9.jpg')}
                style={{
                  width: screenWidth / 1.1,
                  height: screenHeight / 3,
                  resizeMode: 'stretch',
                }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <View style={{ width: screenWidth / 1.1, height: screenHeight / 3 }}>
            <Pressable onPress={handleModleSix}>
              <Image
                source={require('../../assets/career/hiring12.jpg')}
                style={{
                  width: screenWidth / 1.1,
                  height: screenHeight / 3,
                  resizeMode: 'stretch',
                }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Career

Career.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
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
