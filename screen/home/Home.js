import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Text, View } from 'react-native'

import Cards from '../../component/card/Card'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'
import { ScrollView } from 'react-native'

function Home(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Cards
          title='Virtual Asistant Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Virtual-Assistant-Course.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '1',
                courseImage: require('../../assets/images/Virtual-Assistant-Course.jpg'),
                courseTitle: 'Virtual Asistant Course',
              },
            })
          }}
        />
        <Cards
          title='Amazon Wholesale FBA Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Amazon-Wholesale-FBA-Course.jpg')}
        />
        <Cards
          title='Amazon Dropsipping Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Drop-Shipping-Course.jpg')}
        />
        <Cards
          title='Amazon Private Label Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Amazon-Private-Label.jpg')}
        />
        <Cards
          title='Digital Marketing Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Digital-Marketing-Course.jpg')}
        />
        <Cards
          title='Graphic Design Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Graphic-Design.jpg')}
        />
        <Cards
          title='Content Writing Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/content-writing-1.jpg')}
        />
        <Cards
          title='EBAY Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/eBay-Course.jpg')}
        />
      </View>
    </ScrollView>
  )
}

export default Home

Home.navigationOptions = (navData) => {
  return {
    headerTitle: 'Home',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}
