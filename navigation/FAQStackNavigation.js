import Color from '../colors/Color'
import FAQ from './../screen/faq/FAQ'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const FAQScreenStackNavigation = createStackNavigator({
  FAQ: {
    screen: FAQ,
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
const FAQStackNavigation = createAppContainer(FAQScreenStackNavigation)
export default FAQStackNavigation
