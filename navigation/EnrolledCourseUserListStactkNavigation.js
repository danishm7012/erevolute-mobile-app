import Color from '../colors/Color'
import EnrolledCourseUserList from '../screen/home/EnrolledCourseUserList'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const EnrollCourseUsersStackNavigation = createStackNavigator({
  Enroll_Course_User_List: {
    screen: EnrolledCourseUserList,
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
const EnrollCourseUserListStackNavigation = createAppContainer(
  EnrollCourseUsersStackNavigation
)
export default EnrollCourseUserListStackNavigation
