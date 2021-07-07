import { Dimensions, Image, LogBox, StatusBar, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../colors/Color'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../../component/headerLogo/HeaderLogo'
import React from 'react'
import { ScrollView } from 'react-native'
import Unorderedlist from 'react-native-unordered-list'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function TermandCondition() {
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
            source={require('../../assets/eRevoluteMobileBanners/TermsConditions.jpg')}
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
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            At eRevolute, accessible from https://erevolute.org/, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by eRevolute and how we use it. If you have additional
            questions or require more information about our Privacy Policy, do
            not hesitate to contact us. This Privacy Policy applies only to our
            online activities and is valid for visitors to our website with
            regards to the information that they shared and/or collect in
            eRevolute. This policy is not applicable to any information
            collected offline or via channels other than this website. Our
            Privacy Policy was created with the help of the Privacy Policy
            Generator.
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
            Consent
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
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms. Information we collect The personal information
            that you are asked to provide, and the reasons why you are asked to
            provide it, will be made clear to you at the point we ask you to
            provide your personal information. If you contact us directly, we
            may receive additional information about you such as your name,
            email address, phone number, the contents of the message and/or
            attachments you may send us, and any other information you may
            choose to provide. When you register for an Account, we may ask for
            your contact information, including items such as name, company
            name, address, email address, and telephone number.
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
            How we use your information
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
            We use the information we collect in various ways, including to:
          </Text>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2765}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Provide, operate, and maintain our website
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2765}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Improve, personalize, and expand our website
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2765}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Understand and analyze how you use our website:
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2765}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Develop new products, services, features, and functionality:
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2765}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2765}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Send you emails
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2765}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Find and prevent fraud
            </Text>
          </Unorderedlist>
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
            Log Files
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
            eRevolute follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services’ analytics. The information
            collected by log files includes internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users’ movement on the website, and gathering
            demographic information.
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
            Cookies and Web Beacons
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
            Like any other website, eRevolute uses ‘cookies. These cookies are
            used to store information including visitors’ preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users’ experience by customizing
            our web page content based on visitors’ browser type and/or other
            information. For more general information on cookies, please read
            “What Are Cookies” from Cookie Consent.
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
            Advertising Partners Privacy Policies
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
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of eRevolute. Third-party ad servers or ad
            networks uses technologies like cookies, JavaScript, or Web Beacons
            that are used in their respective advertisements and links that
            appear on eRevolute, which are sent directly to users’ browser. They
            automatically receive your IP address when this occurs. These
            technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content
            that you see on websites that you visit. Note that eRevolute has no
            access to or control over these cookies that are used by third-party
            advertisers.
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
            Third-Party Privacy Policies
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
            eRevolute’s Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt out of certain options. You can choose to disable cookies
            through your individual browser options. To know more detailed
            information about cookie management with specific web browsers, it
            can be found at the browsers’ respective websites.
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
            CCPA Privacy Rights (Do Not Sell My Personal Information)
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
            Under the CCPA, among other rights, California consumers have the
            right to: Request that a business that collects a consumer’s
            personal data disclose the categories and specific pieces of
            personal data that a business has collected about consumers. Request
            that a business deletes any personal data about the consumer that a
            business has collected. Request that a business that sells a
            consumer’s personal data, not sell the consumer’s personal data. If
            you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
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
            GDPR Data Protection Rights
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
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following: The
            right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service. The
            right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete. The right to erasure – You have the right to request
            that we erase your personal data, under certain conditions. The
            right to restrict processing – You have the right to request that we
            restrict the processing of your personal data, under certain
            conditions. The right to object to processing – You have the right
            to object to our processing of your personal data, under certain
            conditions. The right to data portability – You have the right to
            request that we transfer the data that we have collected to another
            organization, or directly to you, under certain conditions. If you
            make a request, we have one month to respond to you. If you would
            like to exercise any of these rights, please contact us.
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
            Children’s Information
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
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
            eRevolute does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

TermandCondition.navigationOptions = (navData) => {
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
export default TermandCondition
