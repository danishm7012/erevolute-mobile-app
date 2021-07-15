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
            This Privacy Policy fixes out the foundation on which we will
            develop any personal data, including but not limited to
            registration, payment, and other data we collect from you or from
            other sources or those you provide to us. For example, access and
            use the erevolute website or the Forsa mobile application, the
            services and applications. eRevolute know the value of this data. We
            are faithful to protecting and upholding your privacy. Hence, please
            read the following thoroughly to follow our data practices. By
            accepting our services, you agree to the approach of data by this
            Privacy Policy.
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
            What information may we get from you?
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
            Data you give by filling in web forms, including data provided when
            signup to use the Site and other experienced registrations like
            social media logins, contributing to our services, publishing stuff,
            or buying other services.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 15,
            marginTop: 9,
            backgroundColor: '#fff',
            elevation: 40,
            alignSelf: 'stretch',
          }}
        >
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Data you give when you visit a training course on erevolute,
              complete a course survey and vote, or contribute in reviews, web
              testimonials, or your query feedback.
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Data you grant to us, or that we may receive from you tell us
              about any problem you face when using our course Section.
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Aspects of the transactions you proceeded by our website and the
              features of our terms of the co-operations you inquired.
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Details about your laptop and computer
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Your email address has been given to us by third parties who have
              proved that they have been allowed to share your email addresses.
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Any additional data we estimate necessary to improve your practice
              using the eRevolute.
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              We give you location-based services, like web advertising, SEO
              search results, and other marketing services.
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              We inform you of additions to our Site.
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Payment backgrounds (including debit card data).
            </Text>
          </Unorderedlist>
          <Unorderedlist style={{ marginLeft: 10 }} bulletUnicode={0x2022}>
            <Text
              style={{
                fontSize: 14,
                // marginTop: 10,
                paddingHorizontal: 15,
                letterSpacing: 0.3,
                lineHeight: 22.3,
              }}
            >
              Your Email notification settings.
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
            What if eRevolute changes privacy policy?
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
            You should review the eRevolute Privacy Policy regularly. Your data
            changes constitute your agreement of this Privacy Policy as changed.
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
            How can you contact eRevolute?
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
            If you have any questions concerning your provided data on the Site,
            please reach us at info@erevolute.ae and tell us the correct
            information of your requests, and we will respond and approach it.
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
            Terms and Conditions
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
            eRevolute is not bound for the visitor breakdown to attend the web
            session booked if the delay was not asked in advance at least 848
            hours before - and he is not allowed to challenge a refund of the
            amount refunded in case of prior notice. eRevolute is not
            responsible for any suspension by the user from the course scheduled
            session time and date, and this stop will be determined from the
            time of the course session - where the user must remain by the
            period scheduled time defined on the website. The web user must
            determine the course time variation in the arrangements according to
            the terms and times of his country, as all the day-by-dates of the
            course sessions are validated according to GMT. The erevolute user
            must ensure that he is correlated to the Internet before the course
            session is recorded, as eRevolute is not responsible for the lousy
            Internet services. The class session is not re-run or delayed. The
            eRevolute students are prohibited from interacting personally with
            the course session advisor, as eRevolute is the only purpose of
            contact between the students and the advisor and following the
            penalty of judicial responsibility. eRevolute does not share any of
            the presentations of the course sessions or the video of the
            recorded course of the organization sessions (works), as eRevolute
            retains the claim rights to these records and reports. Note that the
            gatherings are recorded for best quality control objectives only,
            and eRevolute does not distribute it with any person or publish it
            on its social networks. Opportunity is not effective for giving the
            student incorrect information, such as email, telephone number, or
            signature, and guarantee the private information you have given us.
            The student of eRevolute must continually check our email,
            especially the Spam box, to get the last reports of the sessions of
            the course  The student must give his original copy that he fills
            out within a week only to be examined by the eRevolue specialist and
            send the final copy, and no record will be collected after that
            services: cover letter, Personal Statement, Letter of Intent,
            Application Form and certification. The student cannot change the
            service he has booked for a different service. The student can allow
            his seat in the group class to another person qualified to attend
            given that he informs eRevolute at least 48 hours before the class
            date via email. It is suggested that the user initiate the camera
            feature during the class sessions in status to be more interactive,
            understanding that the student cannot begin the camera during the
            class sessions. The student has the right to hold or abstain from
            giving any course information to the session trainer. The student
            has the right to inquire about a course refund of the amount they
            paid in certain transaction cases and circumstances. The course
            sessions are designated for quality control plans only, and
            eRevolute will not share any of these course sessions with any third
            party. If the student is not carryon with the institute service or
            course session or wants to communicate any problem, he can reach us
            immediately via email.
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
            eRevolute Fee Return Policy
          </Text>
          <View
            style={{
              borderColor: Color.accentColour,
              borderBottomWidth: 3,
              width: screenWidth / 3,
              marginLeft: 15,
            }}
          />
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
              Terms and Condition of the return policy:
            </Text>
            <View
              style={{
                borderColor: Color.accentColour,
                borderBottomWidth: 3,
                width: screenWidth / 3,
                marginLeft: 15,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            Commitment Between tje administration and student Institue held
            between a eRevolute authority and a representation of online
            students. The time the student verifies and executes the fee
            payment. Refund Policy: The terms and conditions supporting which
            the fee or balance refund of the amount that the student has paid
            for the eRevolute course consulting assistance is admitted or denied
            - eRevolute commands these terms and conditions to ensure the right
            of the student, the website, and the course session expert. The
            student has the right to ask for a refund of the amount paid for
            online course sessions within 24 hours only from the time of payment
            and not the time of the session. The student has no right to ask for
            a fee refund of the amount paid after starting the course. A student
            who has enrolled in any course and participated 1 session is not
            allowed to claim a fee refund. The student is not allowed to claim a
            fee refund if he does not participate in the course session without
            prior notice. The fee refund process needs 3-15 working days from
            the time of acceptance and approval of the fee return request by the
            eRevolute team.
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
            Note: eRevolute have the rites to modify its term and Condition any
            time without any notice.
          </Text>
          <View
            style={{
              borderColor: Color.accentColour,
              borderBottomWidth: 3,
              width: screenWidth / 3,
              marginLeft: 15,
            }}
          />
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
