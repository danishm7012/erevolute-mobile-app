import Color from '../colors/Color'
import { Platform } from 'react-native'
import UserScreen from '../screen/contactFormUser/ContactUserList'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const UserScreenNavigation = createStackNavigator({
  Contact_User_Screen: {
    screen: UserScreen,
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
const UserScreenStackNavigation = createAppContainer(UserScreenNavigation)
export default UserScreenStackNavigation
