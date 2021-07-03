import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const FAQ = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={AllStyle.aboutMainClass}>
          <View style={{ width: screenWidth, height: screenHeight / 3.5 }}>
            <Image
              style={{
                resizeMode: 'stretch',
                width: screenWidth,
                height: screenHeight / 3.5,
              }}
              source={require('../../assets/eRevoluteMobileBanners/FAQS.jpg')}
            />
          </View>

          <View style={{}}>
            <Text
              style={[
                { fontSize: 18, textAlign: 'center' },
                AllStyle.Aboutheading,
              ]}
            >
              Frequently asked Questions
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is the minimum subscription for eRevolute? 
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              We offer a minimum 2 Months subscription. However, eRevolute
              offers an unlimited time offer to go with us
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Why should I work from eRevolute and not from home? 
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutdetail}>
              Most commonly, it is a fact; businesses should be run through
              offices. Because in Home you don’t find the appropriate
              environment for working. Many things can distract you. Moreover,
              you don’t have the fellows and like-minded people there at Home.
              So, for this reason, you should work from eRevolute to enhance
              your performance and make the best use of your potential.  
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What Facilities are Provided there at eRevolute? 
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              We eRevolute provides a conducive environment for both investors
              and experts to discuss progressive ideas. It takes several weeks
              or months to deliver you quality, result-oriented outcomes. For
              this reason, we offer a comfy ambiance for our clients while
              working with us. We provide the following noticeable amenities in
              our office. High-Speed Broadband Internet Air Conditioned Building
              Fast Printers Kitchen along with Appliances (Fridge, MW Oven)
              Comfortable and Elegant Furniture Distraction-Free Discussion Room
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Can I get a Refund from eRevolute?
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes! You can get a 100% claim refund within seven days following
              your admission to the eRevolute. We do not bind you in a
              restrictive bond. It is your right, and we are ready to offer you
              always.  
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Can I get a Disscount Voucher? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              For Sure, we offer a discount to our valued clients. Our discount
              offers cover a Six-Month and Annual subscription. We give a 20%
              Discount for Six Month Subscription and a 15% Flat discount for
              the yearly subscription. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Can I Book erevolute part time? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes! eRevolute has designed its office decorum keeping in view the
              possible situations of the clients. We offer this facility to
              those who can’t come to us at certain hours. Please contact at +92
              300 0807124 for further details. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Is there any other charged involved? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              No! We believe in plain words policy. There are no hidden or extra
              charges you have to pay anytime and for anything.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Is there any security deposite?
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              No, we do not get any security deposit. You only need to pay just
              the subscription fee.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Is the Amazon Merchandising Legal?
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, obviously, Amazon trading is legal in Pakistan. The majority
              of the people from the business community are doing trading on
              Amazon from Pakistan.  
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What are the trading models for Amazon? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              There are many models for trading through Amazon. But FBA,
              Affiliated Marketing, and Amazon Vendor/Seller Models are widely
              used. These are also best for Pakistani entrepreneurs and people
              in business.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Are Amazon Trading activities Halal? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, undoubtedly, all of the trading activities of Halal products
              are purely Halal. These are just like any other lawful business. A
              good number of Pakistanis are already doing.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Is my working with erevolute safe? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Why not? It is totally safe because we are registered and licensed
              by all the concerned Govt of Pakistan’s authorities. In Pakistan,
              we are registered as a legal consultancy agency in the United
              Kingdom (UK).
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Will my case or working be confidiential?  
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, we believe in the essential confidentiality of every client
              with us. We do not share any of case matters or your purpose. Our
              privacy policy is strongly client-centric.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What are Data Policies? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              We do not share your data with anyone else. All of your
              credentials and data deposits with us are safe and unshared. We do
              not sell our data. However, we keep it with us to help you with
              more result-oriented tips ahead in the future. You can count on us
              for your business data.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What parameters does erevolute take during pandemic? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              eRevolute stringently follows all of the SOPs and precautionary
              measurements in COVID-19 widespread. Hand sanitizer, face mask,
              and social distancing are followed while in the office. Proper
              cleaning, disinfecting, and keeping the office airy are also in
              our parameters to stand secure against the virus..
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Does erevolute offer Mentor Support? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, eRevolute offers mentor support to those entrepreneurs who do
              not have much clear exposure to e-Business. We also standby you in
              the whole procedure of your start-up with the online business
              venture. That is how we stand out to position ourselves in an
              appreciative circle.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What services does erevolute provide for e-commerce 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              eRevolute serves Pakistani and international business people and
              entrepreneurs with a broad scope of eCommerce services. We are a
              dedicated tandem institute for both training courses and services
              for online trading. Especially, our services for Amazon business
              activities are unmatchable in Pakistan. You can read our range of
              services in detail on the concerned web pages.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What are the institute of erevolute in Pakistan? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              eRevolute has a network of institutes in major cities of Pakistan.
              Currently, we have campuses in Islamabad, Lahore, Faisalabad,
              Karachi, and Hyderabad. Our Offices in Hyderabad and Karachi are
              soon to be open.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

FAQ.navigationOptions = (navData) => {
  return {
    headerTitle: () => (
      <Image
        source={require('../../assets/erevolutewhite.png')}
        style={{
          resizeMode: 'contain',
          width: 250,
          // height: 250,
        }}
      />
    ),
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

export default FAQ
