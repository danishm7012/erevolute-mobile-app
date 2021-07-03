import Color from '../colors/Color'
import CourseVideos from '../screen/videos/CourseVideos'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const CourseVideoStackNavigation = createStackNavigator({
  Course_Videos: {
    screen: CourseVideos,
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
const CourseVideosStackNavigation = createAppContainer(
  CourseVideoStackNavigation
)
export default CourseVideosStackNavigation
