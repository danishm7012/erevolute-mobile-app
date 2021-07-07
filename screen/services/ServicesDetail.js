import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../component/headerbutton/HeaderButton'
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

          <View style={{ marginTop: 10 }} />

          <ProjectDescription
            heading1={serviceDetails.heading1}
            description1={serviceDetails.description1}
            heading2={serviceDetails.heading2}
            description2={serviceDetails.description2}
            heading3={serviceDetails.heading3}
            description3={serviceDetails.description3}
            heading4={serviceDetails.heading4}
            description4={serviceDetails.description4}
            heading5={serviceDetails.heading5}
            description5={serviceDetails.description5}
            heading6={serviceDetails.heading6}
            description6={serviceDetails.description6}
            heading7={serviceDetails.heading7}
            description7={serviceDetails.description7}
            heading8={serviceDetails.heading8}
            description8={serviceDetails.description8}
            heading9={serviceDetails.heading9}
            description9={serviceDetails.description9}
            heading10={serviceDetails.heading10}
            description10={serviceDetails.description10}
            heading11={serviceDetails.heading11}
            description11={serviceDetails.description11}
            heading12={serviceDetails.heading12}
            description12={serviceDetails.description12}
            heading13={serviceDetails.heading13}
            description13={serviceDetails.description13}
            heading14={serviceDetails.heading14}
            description14={serviceDetails.description14}
            heading15={serviceDetails.heading15}
            description15={serviceDetails.description15}
            heading16={serviceDetails.heading16}
            description16={serviceDetails.description16}
            heading17={serviceDetails.heading17}
            description17={serviceDetails.description17}
            heading18={serviceDetails.heading18}
            description18={serviceDetails.description18}
          />

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
