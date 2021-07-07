import Cards from '../../component/card/Card'
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
          imageAmazon={require('../../assets/images/Virtual-Assistant-Course.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '4',
                courseImage: require('../../assets/images/Virtual-Assistant-Course.jpg'),
                courseTitle: 'Virtual Asistant Course',
                price: '25000-/',
              },
            })
          }}
        />
        <Cards
          title='Amazon Wholesale FBA Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Amazon-Wholesale-FBA-Course.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '3',
                courseImage: require('../../assets/images/Amazon-Wholesale-FBA-Course.jpg'),
                courseTitle: 'Amazon Wholesale FBA Course',
                price: '45000-/',
              },
            })
          }}
        />
        <Cards
          title='Amazon Dropsipping Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Drop-Shipping-Course.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '1',
                courseImage: require('../../assets/images/Drop-Shipping-Course.jpg'),
                courseTitle: 'Amazon Dropsipping Course',
                price: '45000-/',
              },
            })
          }}
        />
        <Cards
          title='Amazon Private Label Course'
          price='60000-/'
          imageAmazon={require('../../assets/images/Amazon-Private-Label.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '2',
                courseImage: require('../../assets/images/Amazon-Private-Label.jpg'),
                courseTitle: 'Amazon Private Label Course',
                price: '60000-/',
              },
            })
          }}
        />
        <Cards
          title='Digital Marketing Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/Digital-Marketing-Course.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '9',
                courseImage: require('../../assets/images/Digital-Marketing-Course.jpg'),
                courseTitle: 'Digital Marketing Course',
                price: '45000-/',
              },
            })
          }}
        />
        <Cards
          title='Graphic Design Course'
          price='25000-/'
          imageAmazon={require('../../assets/images/Graphic-Design.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '6',
                courseImage: require('../../assets/images/Graphic-Design.jpg'),
                courseTitle: 'Graphic Design Course',
                price: '25000-/',
              },
            })
          }}
        />
        <Cards
          title='Content Writing Course'
          price='45000-/'
          imageAmazon={require('../../assets/images/content-writing-1.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '7',
                courseImage: require('../../assets/images/content-writing-1.jpg'),
                courseTitle: 'Content Writing Course',
                price: '45000-/',
              },
            })
          }}
        />
        <Cards
          title='EBAY Course'
          price='25000-/'
          imageAmazon={require('../../assets/images/eBay-Course.jpg')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Home_Detail',
              params: {
                courseId: '8',
                courseImage: require('../../assets/images/eBay-Course.jpg'),
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
  }
}
