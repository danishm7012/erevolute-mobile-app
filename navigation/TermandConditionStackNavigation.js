import Color from '../colors/Color'
import { Platform } from 'react-native'
import TermandCondition from './../screen/termandCondition/TermandCondition'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const TermandConditionNavigation = createStackNavigator({
  Contact_Us: {
    screen: TermandCondition,
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
const TermandConditionStackNavigation = createAppContainer(
  TermandConditionNavigation
)
export default TermandConditionStackNavigation
