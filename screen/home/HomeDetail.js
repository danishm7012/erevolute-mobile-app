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
          <ProjectDetail
            headerimage={courseImage}
            address='Awais'
            title={courseTitle}
          />
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
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              elevation: 40,
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: screenWidth / 1.04,
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: 'open-sans-bold',
                  color: '#444',
                }}
              >
                What you Learnt in this Course
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }} />

          <CoursePreview
            featuresArray={courseDetails.list1}
            productHunting={courseDetails.list2}
            categoryAprovel={courseDetails.list3}
            productSourcing={courseDetails.list4}
            supplierVerification={courseDetails.list5}
            samplingOrdering={courseDetails.list6}
            costProfit={courseDetails.list7}
            KeywordHunting={courseDetails.list8}
            competitorAnalysis={courseDetails.list9}
            upcPurchasing={courseDetails.list10}
            listingCreation={courseDetails.list11}
            shipmentCreation={courseDetails.list12}
            productlaunching={courseDetails.list13}
            socialmedia={courseDetails.list14}
            handleAccount={courseDetails.list15}
            registerBrand={courseDetails.list16}
          />
          <View style={{ marginTop: 10 }} />

          <ProjectDescription
            heading={courseDetails.heading1}
            description={courseDetails.description1}
            heading2={courseDetails.heading2}
            description2={courseDetails.description2}
            heading3={courseDetails.heading3}
            description3={courseDetails.description3}
            heading4={courseDetails.heading4}
            description4={courseDetails.description4}
            heading5={courseDetails.heading5}
            description5={courseDetails.description5}
            heading6={courseDetails.heading6}
            description6={courseDetails.description6}
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
