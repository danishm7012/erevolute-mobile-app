import Career from '../screen/career/Career'
import Color from '../colors/Color'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const CareerScreenStackNavigation = createStackNavigator({
  Caree_r: {
    screen: Career,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Color.primaryColour : Color.accentColour,
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: 'white',
    },
  },
})
const CareerStackNavigation = createAppContainer(CareerScreenStackNavigation)
export default CareerStackNavigation
