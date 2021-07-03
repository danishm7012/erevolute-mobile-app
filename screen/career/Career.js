import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Cards from '../../component/card/Card'
import CareerHiringForm from './CareerHiringForm'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'
import { ScrollView } from 'react-native'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

function Career(props) {
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
            >
              <View
                style={{
                  width: screenWidth,
                  height: screenHeight / 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'open-sans-bold',
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: '700',
                  }}
                >
                  Career
                </Text>
              </View>
            </ImageBackground>
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
            <Image
              source={require('../../assets/career/hiringone.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring2.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring3.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring4.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring5.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring6.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring7.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring8.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring9.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
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
            <Image
              source={require('../../assets/career/hiring12.jpg')}
              style={{
                width: screenWidth / 1.1,
                height: screenHeight / 3,
                resizeMode: 'stretch',
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexGrow: 1,
            width: screenWidth,
            paddingTop: StatusBar.currentHeight * 2.5,
            paddingBottom: StatusBar.currentHeight * 2.5,
          }}
        >
          <CareerHiringForm />
        </View>
      </View>
    </ScrollView>
  )
}

export default Career

Career.navigationOptions = (navData) => {
  return {
    headerTitle: '',
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
