import Color from '../colors/Color'
import { Platform } from 'react-native'
import ScheduleWebinar from '../screen/scheduleWebinar/ScheduleWebinar'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const ScheduleWebinarsStackNavigation = createStackNavigator({
  Schedule_Webinar: {
    screen: ScheduleWebinar,
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
const ScheduleWebinarStackNavigation = createAppContainer(
  ScheduleWebinarsStackNavigation
)
export default ScheduleWebinarStackNavigation
