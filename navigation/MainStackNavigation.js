import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Linking, TouchableOpacity } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AboutStackNavigation from './AboutStackNavigation'
import AuthScreenStackNavigation from './AuthStackNavigation'
import { Button } from 'react-native-elements'
import CareerStackNavigation from './CareerStackNavigation'
import Color from '../colors/Color'
import ContactUsStackNavigation from './ContactUsStackNavigation'
import CourseVideosStackNavigation from './CourseVideosStackNavigation'
import EnrollCourseUserListStackNavigation from './EnrolledCourseUserListStactkNavigation'
import EnrolledCourseUserList from '../screen/home/EnrolledCourseUserList'
import FAQStackNavigation from './FAQStackNavigation'
import HomeStackNavigation from './HomeStackNavigation'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import ScheduleBatcheStackNavigation from './ScheduleBatchesStackNavigation'
import ScheduleWebinarStackNavigation from './ScheduleWebinarStackNavigation'
import { ScrollView } from 'react-native-gesture-handler'
import ServicesStackNavigation from './ServicesStackNavigation'
import StartupScreen from '../screen/startupScreen/StartupScreen'
import TermandConditionStackNavigation from './TermandConditionStackNavigation'
import UserScreenStackNavigation from './UserScreenStackNavigation'
import { logOut } from '../screen/action/userAction'
import { useDispatch } from 'react-redux'

const MainDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='home' size={25} color={Color.primaryColour} />
        ),

        drawerLabel: 'Home',
      },
    },
    Course_Video: {
      screen: CourseVideosStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='videocam' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Course Intro',
      },
    },
    Services: {
      screen: ServicesStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='ribbon-sharp' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Services',
      },
    },
    Schedule_Batches: {
      screen: ScheduleBatcheStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='school' size={25} color={Color.primaryColour} />
        ),
        drawerLabel: 'Schedule Batches',
      },
    },

    Schedule_Webinar: {
      screen: ScheduleWebinarStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='megaphone' size={25} color={Color.primaryColour} />
        ),
        drawerLabel: 'Schedule Webinar',
      },
    },
    ContactUs: {
      screen: ContactUsStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='call-sharp' size={25} color={Color.primaryColour} />
        ),
        drawerLabel: 'ContactUs',
      },
    },

    About: {
      screen: AboutStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='information-circle-sharp'
            size={29}
            color={Color.primaryColour}
          />
        ),
        drawerLabel: 'AboutUs',
      },
    },
    FAQ: {
      screen: FAQStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='hand-left-sharp'
            size={29}
            color={Color.primaryColour}
          />
        ),
        drawerLabel: 'FAQs',
      },
    },
    Term_Condition: {
      screen: TermandConditionStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='reader-sharp' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Term&Condition',
      },
    },

    Career: {
      screen: CareerStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='paper-plane' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Career',
      },
    },
  },
  {
    contentComponent: (props) => {
      const handlePrivacyPolicy = () => {
        Linking.openURL('https://erevolute.org/privacy-policy/')
      }

      const dispatch = useDispatch()

      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: '', horizontal: 'never' }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: Color.drawerColor,
                borderBottomLeftRadius: 70,
              }}
            >
              <View style={styles.drawerLogo}>
                <Image
                  style={{ height: 170, width: '80%', resizeMode: 'stretch' }}
                  source={require('../assets/erevolute.png')}
                />
              </View>
            </View>
            <DrawerItems {...props} />
            <TouchableOpacity
              style={styles.privacyStyle}
              onPress={handlePrivacyPolicy}
            >
              <Ionicons name='shield-sharp' size={29} color='#5571ad' />
              <Text style={styles.privacyText}>Privacy Policy</Text>
            </TouchableOpacity>
            <Button
              title='LogOut'
              titleStyle={{ color: '#121212' }}
              containerStyle={{ paddingVertical: 15 }}
              buttonStyle={{
                backgroundColor: Color.accentColour,
              }}
              onPress={() => {
                dispatch(logOut())
                // props.navigation.navigate('Auth')
              }}
              icon={<Ionicons name='log-out' size={29} color='#121212' />}
            />
          </SafeAreaView>
        </ScrollView>
      )
    },
    drawerBackgroundColor: Color.drawerColor,
    contentOptions: {
      activeTintColor: Color.primaryColour,
      activeBackgroundColor: Color.accentColour,
      inactiveTintColor: '#808080',
      itemsContainerStyle: {
        marginVertical: 30,
      },
      labelStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
      },
      itemStyle: {
        marginVertical: 10,
      },
    },
  }
)

const AdminDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='home' size={25} color={Color.primaryColour} />
        ),

        drawerLabel: 'Home',
      },
    },
    Course_Video: {
      screen: CourseVideosStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='videocam' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Course Intro',
      },
    },
    Services: {
      screen: ServicesStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='ribbon-sharp' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Services',
      },
    },

    Schedule_Batches: {
      screen: ScheduleBatcheStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='school' size={25} color={Color.primaryColour} />
        ),
        drawerLabel: 'Schedule Batches',
      },
    },

    Schedule_Webinar: {
      screen: ScheduleWebinarStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='megaphone' size={25} color={Color.primaryColour} />
        ),
        drawerLabel: 'Schedule Webinar',
      },
    },
    User_ScreenContactFormData: {
      screen: UserScreenStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='people-circle'
            size={29}
            color={Color.primaryColour}
          />
        ),
        drawerLabel: 'User List',
      },
    },

    Enroll_User_List: {
      screen: EnrollCourseUserListStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='people' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Enroll Students',
      },
    },

    ContactUs: {
      screen: ContactUsStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='call-sharp' size={25} color={Color.primaryColour} />
        ),
        drawerLabel: 'ContactUs',
      },
    },

    About: {
      screen: AboutStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='information-circle-sharp'
            size={29}
            color={Color.primaryColour}
          />
        ),
        drawerLabel: 'AboutUs',
      },
    },

    FAQ: {
      screen: FAQStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='hand-left-sharp'
            size={29}
            color={Color.primaryColour}
          />
        ),
        drawerLabel: 'FAQs',
      },
    },

    Term_Condition: {
      screen: TermandConditionStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='reader-sharp' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Term&Condition',
      },
    },

    Career: {
      screen: CareerStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='paper-plane' size={29} color={Color.primaryColour} />
        ),
        drawerLabel: 'Career',
      },
    },
  },
  {
    contentComponent: (props) => {
      const handlePrivacyPolicy = () => {
        Linking.openURL('https://erevolute.org/privacy-policy/')
      }
      const dispatch = useDispatch()
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: '', horizontal: 'never' }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: Color.drawerColor,
                borderBottomLeftRadius: 70,
              }}
            >
              <View style={styles.drawerLogo}>
                <Image
                  style={{ height: 170, width: '80%', resizeMode: 'stretch' }}
                  source={require('../assets/erevolute.png')}
                />
              </View>
            </View>
            <DrawerItems {...props} />
            <TouchableOpacity
              style={styles.privacyStyle}
              onPress={handlePrivacyPolicy}
            >
              <Ionicons name='shield-sharp' size={29} color='#5571ad' />
              <Text style={styles.privacyText}>Privacy Policy</Text>
            </TouchableOpacity>
            <Button
              title='LogOut'
              titleStyle={{ color: '#121212' }}
              containerStyle={{ paddingVertical: 15 }}
              buttonStyle={{ backgroundColor: Color.accentColour }}
              onPress={() => {
                dispatch(logOut())
                // props.navigation.navigate('Auth')
              }}
              icon={<Ionicons name='log-out' size={29} color='#121212' />}
            />
          </SafeAreaView>
        </ScrollView>
      )
    },
    drawerBackgroundColor: Color.drawerColor,
    contentOptions: {
      activeTintColor: Color.primaryColour,
      activeBackgroundColor: Color.accentColour,
      inactiveTintColor: '#808080',
      itemsContainerStyle: {
        marginVertical: 30,
      },
      labelStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
      },
      itemStyle: {
        marginVertical: 10,
      },
    },
  }
)

const MainAppNavigation = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthScreenStackNavigation,
  appScreen: MainDrawerNavigator,
  AdminScreen: AdminDrawerNavigator,
})
export default createAppContainer(MainAppNavigation)

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  drawerLogo: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    marginTop: 120,
    justifyContent: 'center',
    backgroundColor: Color.drawerColor,
    borderBottomWidth: 2,
    borderBottomColor: '#C0C0C0',
    borderBottomEndRadius: 38,
    borderBottomStartRadius: 38,
  },
  privacyStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    alignItems: 'center',
  },
  activePrivacyPolicy: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    backgroundColor: Color.accentColour,
    alignItems: 'center',
  },
  privacyText: {
    color: '#808080',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'open-sans-bold',
  },
  activePrivacyText: {
    color: Color.primaryColour,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'open-sans-bold',
  },
})
