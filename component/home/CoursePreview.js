import List from './List'
import React from 'react'
import { View } from 'react-native'

function CoursePreview({ featuresArray, productHunting, heading1, heading2 }) {
  //console.log(categoryAprovel)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <List heading={heading1} detail={featuresArray} />
      <List heading={heading2} detail={productHunting} />
    </View>
  )
}

export default CoursePreview
