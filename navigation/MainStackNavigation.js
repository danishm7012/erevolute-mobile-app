import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
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
          <Ionicons name='home' size={25} color={Color.accentColour} />
        ),

        drawerLabel: 'Home',
      },
    },

    ContactUs: {
      screen: ContactUsStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='call-sharp' size={25} color={Color.accentColour} />
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
            color={Color.accentColour}
          />
        ),
        drawerLabel: 'AboutUs',
      },
    },

    Term_Condition: {
      screen: TermandConditionStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='reader-sharp' size={29} color={Color.accentColour} />
        ),
        drawerLabel: 'Term&Condition',
      },
    },
    Course_Video: {
      screen: CourseVideosStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='videocam' size={29} color={Color.accentColour} />
        ),
        drawerLabel: 'Course Intro',
      },
    },

    User_ScreenContactFormData: {
      screen: UserScreenStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='people' size={29} color={Color.accentColour} />
        ),
        drawerLabel: 'User List',
      },
    },

    Enroll_User_List: {
      screen: EnrollCourseUserListStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='people' size={29} color={Color.accentColour} />
        ),
        drawerLabel: 'Enroll Students',
      },
    },

    FAQ: {
      screen: FAQStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='hand-left-sharp'
            size={29}
            color={Color.accentColour}
          />
        ),
        drawerLabel: 'FAQ',
      },
    },
    Services: {
      screen: ServicesStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='ribbon-sharp' size={29} color={Color.accentColour} />
        ),
        drawerLabel: 'Services',
      },
    },
    // AUTH: {
    //   screen: AuthScreenStackNavigation,
    //   navigationOptions: {
    //     drawerIcon: () => (
    //       <Ionicons
    //         name='hand-left-sharp'
    //         size={29}
    //         color={Color.accentColour}
    //       />
    //     ),
    //     drawerLabel: 'SignUp',
    //   },
    // },
    Career: {
      screen: CareerStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='shield-sharp' size={29} color={Color.accentColour} />
        ),
        drawerLabel: 'Career',
      },
    },
  },
  {
    contentComponent: (props) => {
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
                  style={{ flex: 1, width: '80%', resizeMode: 'contain' }}
                  source={require('../assets/erevolute.png')}
                />
              </View>
            </View>
            <DrawerItems {...props} />
            <Button
              title='LogOut'
              containerStyle={{ paddingVertical: 15 }}
              buttonStyle={{ backgroundColor: Color.accentColour }}
              onPress={() => {
                dispatch(logOut())
                // props.navigation.navigate('Auth')
              }}
              icon={<Ionicons name='log-out' size={29} color='#fff' />}
            />
          </SafeAreaView>
        </ScrollView>
      )
    },
    drawerBackgroundColor: Color.drawerColor,
    contentOptions: {
      activeTintColor: Color.accentColour,
      activeBackgroundColor: Color.primaryColour,
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
})
