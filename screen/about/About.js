import { Dimensions, Image, LogBox, StatusBar, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../colors/Color'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../../component/headerLogo/HeaderLogo'
import React from 'react'
import { ScrollView } from 'react-native'
import SocialMediaIcon from '../../component/socialMediaIcon/SocialMediaIcon'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function AboutUs() {
  LogBox.ignoreLogs(['Setting a timer for a'])

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
            About eRevolute
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
            eRevolute - A team of Amazon specialists and digital marketing
            experts offer online courses and marketing solutions with
            outstanding Amazon and digital marketing results to worldwide
            companies. We connect online business thinking with professional
            business website design and web development techniques, improving
            search engines and pay-per-click, content creation, online
            communications, and social media campaigns. In addition, we are
            developing Amazon marketing campaigns for our students that cover
            various technologies to achieve these marketing goals, whether it's
            amazon dropshipping, amazon fba wholesale, eBay dropshipping,
            virtual assistant, driving web traffic, generating potential Amazon
            customers, e-commerce marketing strategies, Your company brand
            awareness, sharing, etc. For eRevolute, it's all about returning on
            investment and innovation to add value to your business through
            online marketing and advertising.
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
            eRevolute Student Portal
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
            At eRevolute, we have a passion for considering the success of our
            students. The range of professional Amazon Courses related to amazon
            marketing and digital website advertising in search engines has
            proven to deliver exceptional prosperity to our students and
            customers. By partnering with Amazon's business accounts and top
            rating experts, you will have professional Amazon tutors and site
            advertising experts. eRevolute team members will be discouraged from
            assisting you in achieving your Amazon business goals. We will
            expand your online appearance through a digital marketing strategy,
            confirmed by a range of the newest and best Amazon and digital
            marketing services and tools used in Amazon and online marketing. As
            one of the best online institutes, eRevolute relies not on easy
            business solutions and shortcuts. The eRevolute will sit with you,
            develop a proper Amazon product selling strategy, and teach you to
            find the most reliable way to take your company/skills to the next
            level. We hope our digital marketing and Amazon students will work
            with us after the completion of the courses. eRevolute institute
            also encourage our online students to enroll in any Amazon and
            Digital Marketing course to get a job with us. eRevolute also offers
            job to its first 1000 students if they pass their course with
            remarkable outputs and marks. 
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SocialMediaIcon
            facebookSocial='https://www.facebook.com/erevolute/'
            twitterSocial='https://twitter.com/Erevolute1'
            linkedInSocial='https://www.linkedin.com/company/e-revolute/'
            instagramSocial='https://www.instagram.com/erevolute/'
            websiteSocial='https://erevolute.org/'
            pintrestSocial='https://www.pinterest.com/erevolute/_saved/'
            youtubeSocial='https://www.youtube.com/channel/UCZ1VR55aDhXP5QLhc2txziw'
            reditSocial='https://www.reddit.com/r/eRevolute/'
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
