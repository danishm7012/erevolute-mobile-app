import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Image, Text, View } from 'react-native'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import SegmentedControlTab from 'react-native-segmented-control-tab'

function AboutUs() {
  //   LogBox.ignoreLogs(['Your project is accessing'])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SegmentedControlTab
        values={['Rent', 'Buy']}
        selectedIndex={selectedIndex}
        tabStyle={{ borderColor: '#D52C43' }}
        activeTabStyle={{ backgroundColor: '#D52C43' }}
        onTabPress={handleSingleIndexSelect}
        tabsContainerStyle={{
          height: 40,
          marginTop: 0,
          marginBottom: 10,
        }}
      />

      {selectedIndex === 0 && (
        <View>
          <Text> First Tab</Text>
        </View>
      )}

      {selectedIndex === 1 && (
        <View>
          <Text> Second Tab</Text>
        </View>
      )}
      <Text>Awais</Text>
    </View>
  )
}

AboutUs.navigationOptions = (navData) => {
  return {
    headerTitle: 'AboutUs',
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
