import {
  Dimensions,
  Image,
  LogBox,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../colors/Color'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from './../../component/headerLogo/HeaderLogo'
import { Icon } from 'react-native-elements'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const LandingHomeScreen = (props) => {
  LogBox.ignoreLogs(['Setting a timer for a'])
  let TouchableCom = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCom = TouchableNativeFeedback
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={require('../../assets/Landing-PAge.jpg')}
          style={{
            resizeMode: 'stretch',
            height: screenHeight / 2,
            width: screenWidth,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#2e4d90',
          justifyContent: 'center',
          alignItems: 'flex-end',
          alignSelf: 'stretch',
          borderBottomLeftRadius: 420,
        }}
      >
        <View
          style={{
            flex: 1,
            // justifyContent: 'flex-end',
            width: screenWidth / 1.5,
            // paddingLeft: 20,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              // textAlign: 'right',
              color: '#fff',
              fontWeight: '700',
              paddingTop: 30,
            }}
          >
            Erevolute Explore business world with Us !
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              // marginRight: 15,
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home_screen')}
              activeOpacity={0.3}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: '700',
                  marginTop: 39,
                }}
              >
                View Courses
              </Text>
              <View style={{ marginTop: -15 }}>
                <Icon
                  containerStyle={{ marginBottom: 40, marginRight: 20 }}
                  name='long-arrow-right'
                  type='font-awesome'
                  color={Color.accentColour}
                  size={49}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
export default LandingHomeScreen
LandingHomeScreen.navigationOptions = (navData) => {
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
