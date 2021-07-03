import GetCourse from '../screen/home/GetCourse'
import Home from '../screen/home/Home'
import HomeDetail from './../screen/home/HomeDetail'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const HomeUsStackNavigation = createStackNavigator(
  {
    Home_screen: {
      screen: Home,
    },
    Home_Detail: {
      screen: HomeDetail,
    },
    Get_Course: {
      screen: GetCourse,
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
const HomeStackNavigation = createAppContainer(HomeUsStackNavigation)
export default HomeStackNavigation
