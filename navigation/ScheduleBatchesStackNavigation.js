import Color from '../colors/Color'
import { Platform } from 'react-native'
import ScheduleBatches from '../screen/scheduleBatches/ScheduleBatches'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const ScheduleBatchesStackNavigation = createStackNavigator({
  Schedule_Batche: {
    screen: ScheduleBatches,
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
const ScheduleBatcheStackNavigation = createAppContainer(
  ScheduleBatchesStackNavigation
)
export default ScheduleBatcheStackNavigation
