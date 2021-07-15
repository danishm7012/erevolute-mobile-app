import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Cards from '../../component/card/Card'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../../component/headerLogo/HeaderLogo'
import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'

function Home(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Cards
          title='Virtual Asistant Course'
          price='25000-/'
          imageAmazon={require('../../assets/WebBAnnereRevolute/Virtual-Assistant_B.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '4',
                courseImage: require('../../assets/WebBAnnereRevolute/Virtual-Assistant_B.jpg'),
                courseTitle: 'Virtual Asistant Course',
                price: '25000-/',
              },
            })
          }}
        />
        <Cards
          title='Amazon Wholesale FBA Course'
          price='45000-/'
          imageAmazon={require('../../assets/WebBAnnereRevolute/AMAZONE-WHOLESALE-FBA_B.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '3',
                courseImage: require('../../assets/WebBAnnereRevolute/AMAZONE-WHOLESALE-FBA_B.jpg'),
                courseTitle: 'Amazon Wholesale FBA Course',
                price: '45000-/',
              },
            })
          }}
        />
        <Cards
          title='Amazon Dropsipping Course'
          price='45000-/'
          imageAmazon={require('../../assets/WebBAnnereRevolute/DROPSHIPPING_B.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '1',
                courseImage: require('../../assets/WebBAnnereRevolute/DROPSHIPPING_B.jpg'),
                courseTitle: 'Amazon Dropsipping Course',
                price: '45000-/',
              },
            })
          }}
        />
        <Cards
          title='Amazon Private Label Course'
          price='60000-/'
          imageAmazon={require('../../assets/WebBAnnereRevolute/AMAZON-PRIVATE-LABEL_B.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '2',
                courseImage: require('../../assets/WebBAnnereRevolute/AMAZON-PRIVATE-LABEL_B.jpg'),
                courseTitle: 'Amazon Private Label Course',
                price: '60000-/',
              },
            })
          }}
        />
        <Cards
          title='Digital Marketing Course'
          price='45000-/'
          imageAmazon={require('../../assets/WebBAnnereRevolute/DIGITAL-MARKETING_B.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '9',
                courseImage: require('../../assets/WebBAnnereRevolute/DIGITAL-MARKETING_B.jpg'),
                courseTitle: 'Digital Marketing Course',
                price: '45000-/',
              },
            })
          }}
        />
        <Cards
          title='Graphic Design Course'
          price='25000-/'
          imageAmazon={require('../../assets/WebBAnnereRevolute/Graphic-Designing_B.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '6',
                courseImage: require('../../assets/WebBAnnereRevolute/Graphic-Designing_B.jpg'),
                courseTitle: 'Graphic Design Course',
                price: '25000-/',
              },
            })
          }}
        />
        <Cards
          title='Content Writing Course'
          price='45000-/'
          imageAmazon={require('../../assets/WebBAnnereRevolute/BLOG-WRITING_B.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '7',
                courseImage: require('../../assets/WebBAnnereRevolute/BLOG-WRITING_B.jpg'),
                courseTitle: 'Content Writing Course',
                price: '45000-/',
              },
            })
          }}
        />
        <Cards
          title='EBAY Course'
          price='25000-/'
          imageAmazon={require('../../assets/WebBAnnereRevolute/EBAY_B.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '8',
                courseImage: require('../../assets/WebBAnnereRevolute/EBAY_B.jpg'),
                courseTitle: 'EBAY Course',
                price: '25000-/',
              },
            })
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Home

Home.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Back Button'
          iconName='arrow-back'
          onPress={() => {
            navData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
  }
}
