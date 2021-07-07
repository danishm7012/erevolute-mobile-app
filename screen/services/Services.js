import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Text, View } from 'react-native'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../../component/headerLogo/HeaderLogo'
import React from 'react'
import { ScrollView } from 'react-native'
import ServicesCard from '../../component/card/ServicesCard'

function Services(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ServicesCard
          backColor='#fec20e'
          iconColor='#121212'
          heading='Amazon Account Management'
          detail='Whether you’re fair getting begun or are an experienced dealer, the Amazon Commercial center could be a challenging environment. eRevolute clients for the most part drop …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '1',
                heading: 'Amazon Account Management',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Amazon-Account-Management.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#4772b7'
          iconColor='#fff'
          heading='eRevolute Investment Consortium'
          detail='As we have been getting as well much intrigued so at last, we are authoritatively declaring eRevolute Venture Club Program which is able to permit Financial …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '2',
                heading: 'eRevolute Investment Consortium',
                serImg: require('../../assets/eREVOLUTEServicesBanner/eRevolute-Investment-Consortium.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#fec20e'
          iconColor='#121212'
          heading='eRevolute Opportunity Club'
          detail='We are presently beginning eRevolute Opportunity Club (EOC). This Club will be primarily for financial specialists who will at that point be able to contribute into …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '3',
                heading: 'eRevolute Opportunity Club',
                serImg: require('../../assets/eREVOLUTEServicesBanner/eRevolute-Opportunity-Club.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#4772b7'
          iconColor='#fff'
          heading='Digital Marketing'
          detail='In an age ruled by furious competition, in a world represented by the never-ending require for overwhelming advancement in arrange to guarantee unchallenged victory at any …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '4',
                heading: 'Digital Marketing',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Digital-Marketing.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#fec20e'
          iconColor='#121212'
          heading='Ecommerce Store Development'
          detail='eRevolute give user-friendly eCommerce store arrangements concurring to prerequisites and look consolation of your target clients, making online shopping an exceptional and …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '5',
                heading: 'Ecommerce Store Development',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Ecommerce-Store-Development.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#4772b7'
          iconColor='#fff'
          heading='Amazon Account Rescue'
          detail='We’ll not let Amazon account suspension be the conclusion of your offering career. Getting the offering rights reestablished is no question a challenging assignment, but …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '6',
                heading: 'Amazon Account Rescue',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Amazon-Account-Rescue.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#fec20e'
          iconColor='#121212'
          heading='eRevolute Mentor Support'
          detail='eRevolute Coach Bolster benefit is for those individuals who don’t have many speculations right presently and have a moo budget but do have the ability …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '7',
                heading: 'eRevolute Mentor Support',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Mentor-Support.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#4772b7'
          iconColor='#fff'
          heading='Product Hunting'
          detail='eRevolute is giving you the office to chase you the precisely beneficial items you wish to dispatch on Amazon with certainty and construct commerce that gives you …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '8',
                heading: 'Product Hunting',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Product-Hunting.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#fec20e'
          iconColor='#121212'
          heading='Product Launching'
          detail='We offer pay-per-tap administrations as well. We know the heart of coordinate promoting is creating connections with the proper group of onlookers at the correct time …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '9',
                heading: 'Product Launching',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Product-Launching.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#4772b7'
          iconColor='#fff'
          heading='Product Photography & Designing'
          detail='eRevolute give top-notch item photography and planning administrations. Our experienced picture takers take the proficient item photos within the idealized points for …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '10',
                heading: 'Product Photography & Designing',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Product-Photography-Designing.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#fec20e'
          iconColor='#121212'
          heading='Listing Optimization'
          detail='Composing an extraordinary duplicate engaging for the client is fair half the assignment. The other half is engaging to the Amazons’ A9 calculation. eRevolute go …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '11',
                heading: 'Listing Optimization',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Listing-Optimization.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#4772b7'
          iconColor='#fff'
          heading='PPC Campaigns'
          detail='We offer pay-per-tap administrations as well. We know the heart of coordinate promoting is creating connections with the proper group of onlookers at the correct time …'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '12',
                heading: 'PPC Campaigns',
                serImg: require('../../assets/eREVOLUTEServicesBanner/PPC-Campaigns.jpg'),
              },
            })
          }}
        />
        <ServicesCard
          backColor='#fec20e'
          iconColor='#121212'
          heading='Content Writing'
          detail='Whether you’re a Little Trade or a Huge Endeavor, eRevolute has got you secured anything your substance needs are. Being one of the leading substance composing benefits…'
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Services_Detail',
              params: {
                serId: '13',
                heading: 'Content Writing',
                serImg: require('../../assets/eREVOLUTEServicesBanner/Content-Writing.jpg'),
              },
            })
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Services

Services.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
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
