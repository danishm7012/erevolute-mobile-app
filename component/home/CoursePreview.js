import { Dimensions, ImageBackground, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import Color from '../../colors/Color'
import { Ionicons } from '@expo/vector-icons'
import List from './List'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function CoursePreview({
  featuresArray,
  productHunting,
  categoryAprovel,
  productSourcing,
  supplierVerification,
  samplingOrdering,
  costProfit,
  KeywordHunting,
  competitorAnalysis,
  upcPurchasing,
  listingCreation,
  shipmentCreation,
  productlaunching,
  socialmedia,
  handleAccount,
  registerBrand,
}) {
  //console.log(categoryAprovel)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <List heading={'Introduction'} detail={featuresArray} />
      <List heading={'Product Hunting'} detail={productHunting} />
      <List
        heading={'Category Approval, Patent checking, Trademark issues'}
        detail={categoryAprovel}
      />

      <List heading={'Product Sourcing'} detail={productSourcing} />
      <List heading={'Supplier Verification'} detail={supplierVerification} />
      <List
        heading={'Sampling Ordering and Inventory Management'}
        detail={samplingOrdering}
      />
      <List heading={'Cost (Profit Calculation)'} detail={costProfit} />
      <List heading={'Keyword Hunting and analysis'} detail={KeywordHunting} />
      <List heading={'Competitor Analysis'} detail={competitorAnalysis} />
      <List heading={'UPC Purchasing'} detail={upcPurchasing} />
      <List
        heading={'Listing Creation and optimization'}
        detail={listingCreation}
      />
      <List heading={'Shipment Creation'} detail={shipmentCreation} />
      <List heading={'Product launching on Amazon'} detail={productlaunching} />
      <List heading={'Social media, Website'} detail={socialmedia} />
      <List heading={'How to handle Account'} detail={handleAccount} />
      <List heading={'How to Register Brand'} detail={registerBrand} />
    </View>
  )
}

export default CoursePreview
