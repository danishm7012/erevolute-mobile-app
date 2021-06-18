import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import ProjectDescription from '../../component/home/ProjectDescription'
import ProjectDetail from '../../component/home/ProjectDetail'
import React from 'react'
import courseDetail from '../../data/courseDetail'

const HomeDetail = (props) => {
  const courseid = props.navigation.getParam('courseId')
  const courseImage = props.navigation.getParam('courseImage')
  const courseTitle = props.navigation.getParam('courseTitle')
  const courseDetails = courseDetail.find((course) => course.id === courseid)

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

          <ProjectDescription description={courseDetails.detail} />

          <View style={{ marginTop: 15 }} />
          {/*          <ProjectFeatures featuresArray={project.features} />
          <View style={{ marginTop: 10 }} />
          <ProjectAddress
            city={project.city}
            area={project.area}
            country={project.country}
            county={project.county}
            postal={project.postalcode}
          />

          <View style={{ marginTop: 25 }} />
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#235478',
              paddingVertical: 17,
            }}
            onPress={() => {
              props.navigation.navigate({
                routeName: 'Project_Form',
                params: {
                  protitle: project.name,
                },
              })
            }}
          >
            <View
              style={{
                flex: 1,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontFamily: 'open-sans-bold',
                }}
              >
                Book Now
              </Text>
            </View>
          </TouchableOpacity> */}
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
