import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../../component/headerLogo/HeaderLogo'
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
              What is Product selling on Amazon? 
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              Product Selling on Amazon is a method that allows both amazon
              expert and online businesses to sell their goods plus history on
              Amazon. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Why do we need to sell a product on Amazon by this course? 
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutdetail}>
              Here are only some of the causes: opportunity to establish your
              local product in front of millions of potential buyers, plus the
              capability to start stock selling quick before you even
              established up a company website or physical street store.  
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can I register my goods in Amazon all categories after Amazon
              Course? 
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              Approval must be required to list specific products in specific
              categories. Mark out the amazon Sell page for more knowledge.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              What kind of goods cannot be listed on Amazon?
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Some goods may not be listed on Amazon due to compliance with fair
              or administrative restrictions (Like medicine, drugs, etc.) or
              Amazon management (crime scene photos).   
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              What is the Amazon Guarantee Selling Course? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Amazon Guarantee Selling program has produced countless satisfied
              buyers by being responsive to their interests and acting fast to
              solve queries. eRevolute extend this important client trust to
              retailers through the Guarantee product selling program. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can I use my existing account in Amazon Course to sell in the US,
              UK, and other Countries? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, use your existing Amazon account to sell products in all
              mention countries except that Amazon is not allowed. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can I depreciate my Expert selling account? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes. Suppose you don't need to be charged a regular subscription
              fee. In that case, you can depreciate your account from the expert
              plan to the Personal method from the My Services page in Amazon
              Seller Central.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can I close my Amazon seller account anytime?
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              You can eliminate your amazon subscription at any time. However,
              there is never a long-term promise wanted to continue. To forever
              close your Amazon seller account, must request the account closing
              in Seller Central. Keep in thought that you can practice our
              Listings feature to discontinue your amazon product listings, or
              you can eliminate them but hold on to your record for later use.
              Before you terminate your amazon account permanently, remember to
              close and delete your product listings and solve all purchases.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              How much cost Amazon Charge to sell a product on Amazon?
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              Amazon allows two business selling methods. The Professional
              selling method is possible for $50 per month plus a charge on each
              sold product. If you plan to sell less than 50 articles a month,
              the Private program may be most suitable for you. There is no
              regular subscription charge.  What are the differences between
              Amazon Professional and Amazon Personal accounts? 3rd-party Amazon
              sellers can trade in Amazon's registered stores by the
              Professional Amazon program and individuals. In an Individual
              Amazon policy, amazon sellers spend a fee for each product they
              sell. Amazon sellers pay one flat fee per month with the
              Professional Amazon plan, no matter how many units they sell.
              Sellers with the Professional program can also access advanced
              selling tools such as APIs and Amazon Marketplace Web Service
              (AWS) reports  
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              How do I get paid from Amazon? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              When your seller's Amazon account is verified, and you have a
              payable balance, Amazon will send the funds to your provided bank
              account using a Computerized Clearance funds transfer. It will
              take up to 5 working days for the funds to arrive in your bank
              account after Amazon admits an amount.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              How do I manage my Amazon selling account for payment
              transactions? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              By Amazon Seller Account Central How will I recognize when I own
              an Amazon sale? Amazon informs by email or text message on your
              mobile when you experience an order. You can select the
              notification method in your amazon account settings.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              How much cost to ship the product I sell on Amazon? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Order Shipping charges depend on whether you intend to complete
              buying or use FBA to manage your client service.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              How does FBA work?  
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              FBA, you stock your goods in Amazon's fulfillment centers, and we
              give client service for certain goods.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can you provide me a list of Amazon Stores? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>United States</Text>
            <Text style={AllStyle.Aboutdetail}>Canada and Mexico</Text>
            <Text style={AllStyle.Aboutdetail}>European stores </Text>
            <Text style={AllStyle.Aboutdetail}>United Kingdom</Text>
            <Text style={AllStyle.Aboutdetail}>Germany</Text>
            <Text style={AllStyle.Aboutdetail}>France</Text>
            <Text style={AllStyle.Aboutdetail}>Italy</Text>
            <Text style={AllStyle.Aboutdetail}>Netherlands,</Text>
            <Text style={AllStyle.Aboutdetail}>Poland</Text>
            <Text style={AllStyle.Aboutdetail}>Spain</Text>
            <Text style={AllStyle.Aboutdetail}>Sweden</Text>
            <Text style={AllStyle.Aboutdetail}>Japan</Text>
            <Text style={AllStyle.Aboutdetail}>Australia</Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can I Get a Job after Amazon Course Certification? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              At eRevolute 100% Job availability for our first 1000 students who
              pass the amazon practice sessions.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can I open a new Amazon seller account during the course
              practice? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Tour the Pricing page to register for the Expert plan or the
              Personal plan. You can use your Amazon consumer or seller account
              or create a new amazon seller account with your company email
              address. For a Customer selling account, you must need the
              following information available: • Your company or business name,
              business address, and business contact information • A globally
              liable credit card with a correct billing address • A cell phone
              number where you must get message for the verification during the
              registration method • Your business tax ID info Further
              identification documents may be compulsory in some cases
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              How long does Digital Marketing Course take? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>12 Weeks</Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can I start a social media campaign for my business after digital
              marketing course? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, you will learn all about social media campaigns to run
              professionally.
            </Text>
          </View>
          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Can I drive online traffic to my website with the digital
              marketing Course? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, during the course lectures, you will practice driving traffic
              for any website.
            </Text>
          </View>
          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Why do I need different digital marketing strategies? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Because this is a basic rule of digital marketing to make
              different strategies to identify leads.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

FAQ.navigationOptions = (navData) => {
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

export default FAQ
