import { Platform } from 'react-native'
import Services from '../screen/services/Services'
import ServicesDetail from '../screen/services/ServicesDetail'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const ServicesNavigation = createStackNavigator(
  {
    Servic_es: {
      screen: Services,
    },
    Services_Detail: {
      screen: ServicesDetail,
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#2e4d90' : '#2e4d90',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: 'white',
    },
  }
)
const ServicesStackNavigation = createAppContainer(ServicesNavigation)
export default ServicesStackNavigation
