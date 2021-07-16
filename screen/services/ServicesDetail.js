import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import List from '../../component/home/List'
import ProjectDescription from '../../component/home/ProjectDescription'
import ProjectDetail from '../../component/home/ProjectDetail'
import React from 'react'
import ServiceDetail from '../../data/ServiceDetail'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ServicesDetail = (props) => {
  const serviceid = props.navigation.getParam('serId')
  const serviceImage = props.navigation.getParam('serImg')
  const serviceTitle = props.navigation.getParam('heading')
  const serviceDetails = ServiceDetail.find(
    (service) => service.id === serviceid
  )
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
            headerimage={serviceImage}
            address='Awais'
            title={serviceTitle}
          />
          <View style={{ marginBottom: 15 }} />

          <ProjectDescription
            heading='Description'
            description={serviceDetails.detail}
          />

          <View style={{ marginTop: 15 }} />

          <View style={{ marginTop: 10 }} />

          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {serviceDetails.heading1 && (
              <List
                heading={serviceDetails.heading1}
                detail={serviceDetails.description1}
              />
            )}
            {serviceDetails.heading2 && (
              <List
                heading={serviceDetails.heading2}
                detail={serviceDetails.description2}
              />
            )}
            {serviceDetails.heading3 && (
              <List
                heading={serviceDetails.heading3}
                detail={serviceDetails.description3}
              />
            )}
            {serviceDetails.heading4 && (
              <List
                heading={serviceDetails.heading4}
                detail={serviceDetails.description4}
              />
            )}
          </View>

          <View style={{ marginTop: 10 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

ServicesDetail.navigationOptions = (navigationData) => {
  const courseTitle = navigationData.navigation.getParam('heading')
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
export default ServicesDetail
