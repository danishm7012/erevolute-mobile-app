import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../colors/Color'
import CoursePreview from '../../component/home/CoursePreview'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import { PricingCard } from 'react-native-elements'
import ProjectDescription from '../../component/home/ProjectDescription'
import ProjectDetail from '../../component/home/ProjectDetail'
import React from 'react'
import courseDetail from '../../data/courseDetail'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const HomeDetail = (props) => {
  const courseid = props.navigation.getParam('courseId')
  const courseImage = props.navigation.getParam('courseImage')
  const courseTitle = props.navigation.getParam('courseTitle')
  const coursePrice = props.navigation.getParam('price')
  const courseDetails = courseDetail.find((course) => course.id === courseid)

  const navigationHandler = () => {
    props.navigation.navigate({
      routeName: 'Get_Course',
    })
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <ProjectDetail headerimage={courseImage} title={courseTitle} />
          <View style={{ marginBottom: 15 }} />
          <PricingCard
            color={Color.accentColour}
            title='Fee'
            price={coursePrice}
            info={['1 Person', 'Advance Level', 'All Core Features']}
            button={{
              title: 'GET COURSE',
              icon: 'flight-takeoff',
            }}
            onButtonPress={navigationHandler}
          />
          <ProjectDescription
            heading='Description'
            description={courseDetails.detail}
          />

          <View style={{ marginTop: 15 }} />

          <CoursePreview
            featuresArray={courseDetails.list1}
            productHunting={courseDetails.list2}
            heading1={courseDetails.heading1}
            heading2={courseDetails.heading2}
          />
          <View style={{ marginTop: 10 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

HomeDetail.navigationOptions = (navigationData) => {
  const courseTitle = navigationData.navigation.getParam('courseTitle')
  return {
    headerTitle: courseTitle,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Back Button'
          iconName='arrow-back'
          onPress={() => {
            navigationData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
  }
}
export default HomeDetail
