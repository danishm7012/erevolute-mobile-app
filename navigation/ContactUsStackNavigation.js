import Color from '../colors/Color'
import ContactUs from './../screen/contactUs/ContactUs'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const ContactStackNavigation = createStackNavigator({
  Contact_Us: {
    screen: ContactUs,
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
const ContactUsStackNavigation = createAppContainer(ContactStackNavigation)
export default ContactUsStackNavigation
