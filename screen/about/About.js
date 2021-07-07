import { Dimensions, Image, LogBox, StatusBar, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../colors/Color'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../../component/headerLogo/HeaderLogo'
import React from 'react'
import { ScrollView } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import SocialMediaIcon from '../../component/socialMediaIcon/SocialMediaIcon'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function AboutUs() {
  LogBox.ignoreLogs(['Setting a timer for a'])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Image
            style={{
              resizeMode: 'stretch',
              width: screenWidth,
              height: screenHeight / 3,
            }}
            source={require('../../assets/eRevoluteMobileBanners/About-US.jpg')}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 15,
            marginTop: 9,
            backgroundColor: '#fff',
            elevation: 40,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
          >
            The Best Course Design for you crafted by professionals
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            The Internet has essentially turned the world into a global village,
            where everything and everyone is connected. If utilized right, it is
            teeming with opportunities for blooming businesses and startups.
            Overall it is an entire industry we can benefit from on a mass
            level. We recognize this opportunity and bring you all the tools and
            necessary information you need to make the most out of it.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 15,
            marginTop: 9,
            backgroundColor: '#fff',
            elevation: 40,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              paddingHorizontal: 15,
            }}
          >
            Interactive Learning
          </Text>
          <View
            style={{
              borderColor: Color.accentColour,
              borderBottomWidth: 3,
              width: screenWidth / 3,
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            The mistaken idea of denouncing pleasure and praising pain was born
            and I will give.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 15,
            marginTop: 9,
            backgroundColor: '#fff',
            elevation: 40,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
          >
            Exclusive Support
          </Text>
          <View
            style={{
              borderColor: Color.accentColour,
              borderBottomWidth: 3,
              width: screenWidth / 3,
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            Explain to you how all this mistaken idea of denouncing pleasure and
            praising pain was born.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            paddingVertical: 15,
            marginTop: 9,
            backgroundColor: '#fff',
            elevation: 40,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
          >
            Promoting Good Education since the very beginning
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingVertical: 15,
              marginTop: 9,
              backgroundColor: '#fff',
              justifyContent: 'space-around',
            }}
          >
            <Image
              style={{
                resizeMode: 'stretch',
                width: screenWidth / 3,
                height: screenHeight / 9,
              }}
              source={require('../../assets/images/partner1.png')}
            />
            <Image
              style={{
                resizeMode: 'stretch',
                width: screenWidth / 3,
                height: screenHeight / 9,
              }}
              source={require('../../assets/images/partner2.png')}
            />
            <Image
              style={{
                resizeMode: 'stretch',
                width: screenWidth / 3,
                height: screenHeight / 9,
              }}
              source={require('../../assets/images/partner3.png')}
            />
          </View>
        </View>
        <SegmentedControlTab
          values={['Our Vission', 'Our Motto', 'Our Goal']}
          selectedIndex={selectedIndex}
          tabStyle={{
            borderColor: Color.primaryColour,
            borderWidth: 3,
            backgroundColor: '#fff',
          }}
          activeTabStyle={{ backgroundColor: Color.accentColour }}
          activeTabTextStyle={{ fontSize: 14, fontWeight: '700' }}
          tabTextStyle={{
            fontSize: 14,
            fontWeight: '700',
            color: Color.primaryColour,
          }}
          onTabPress={handleSingleIndexSelect}
          tabsContainerStyle={{
            height: 40,
            marginTop: 10,
            marginHorizontal: 10,
            // marginBottom: 10,
          }}
        />

        {selectedIndex === 0 && (
          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              // marginTop: 9,
              backgroundColor: '#fff',
              elevation: 40,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
            >
              Our Vission
            </Text>
            <View
              style={{
                borderColor: Color.accentColour,
                borderBottomWidth: 3,
                width: screenWidth / 4.6,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              We see eCommerce as a booming industry that will see a magnanimous
              growth spurt in the years to come. Considering that, we envision
              ourselves as one of the most entrusted providers of eCommerce
              services in all aspects. We see this country full of new startups
              and growing businesses like never before. These business
              opportunities, in turn, will create jobs giving a thrust and
              immense boost to the employment rates on the whole. We aspire to
              make the business online business as easy as possible for you. We
              are excited and ready to pave the road to success for everyone who
              has a spark or a passion for eCommerce.
            </Text>
          </View>
        )}

        {selectedIndex === 1 && (
          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              backgroundColor: '#fff',
              elevation: 40,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
            >
              Our Motto
            </Text>
            <View
              style={{
                borderColor: Color.accentColour,
                borderBottomWidth: 3,
                width: screenWidth / 6,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Our change-driven approach with a motto to transform the entire
              landscape of e-commerce terrain is entirely what we aspire to
              achieve. Efforts don’t go unrewarded, and our motto is to generate
              growth opportunities for everyone, in a manner that is both
              accessible and self-sustaining. As pioneering of cracking and
              hackings the code of running a successful business, we know that
              winning together is the best way forward. Thus, we bring you
              several shots at learning the company individually, and that, in
              turn, will help us in reaching our goal.
            </Text>
          </View>
        )}
        {selectedIndex === 2 && (
          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              backgroundColor: '#fff',
              elevation: 40,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 15 }}
            >
              Our Goal
            </Text>
            <View
              style={{
                borderColor: Color.accentColour,
                borderBottomWidth: 3,
                width: screenWidth / 8,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Your success is our goal! We want to see you all successful! We
              would love to be surrounded by a whole revolutionized terrain of
              successful e-commerce stores, up and running, blooming, and
              flourishing. Our goal is to equip people with all the tools and
              tactics of doing a business to make businesses self-sufficient and
              self-sustaining.
            </Text>
          </View>
        )}
        <View
          style={{
            paddingTop: StatusBar.currentHeight * 2.2,
            justifyContent: 'center',
            backgroundColor: '#fff',
            elevation: 40,
            alignItems: 'center',
          }}
        >
          <SocialMediaIcon
            facebookSocial='https://www.facebook.com/erevolute/'
            twitterSocial='https://twitter.com/Erevolute1'
            linkedInSocial='https://www.linkedin.com/company/e-revolute/'
            instagramSocial='https://www.instagram.com/erevolute/'
            websiteSocial='https://erevolute.org/'
          />
        </View>
      </View>
    </ScrollView>
  )
}

AboutUs.navigationOptions = (navData) => {
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
export default AboutUs
