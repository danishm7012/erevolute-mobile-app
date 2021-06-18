import { Dimensions, Image, Text, View } from 'react-native'

import AllStyle from '../../AllStyle.js'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ProjectDetailHeader({ headerimage, address, title }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={AllStyle.aboutSwiper}>
        {/* <SwiperComponent /> */}
        <Image
          style={{
            resizeMode: 'stretch',
            height: screenHeight / 2.5,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={headerimage}
        />
      </View>
      <View
        style={{
          width: screenWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: screenWidth / 1.04,
            height: screenHeight / 11,
            elevation: 20,
            backgroundColor: '#fff',
          }}
        >
          <View
            style={{
              width: screenWidth / 1.1,
              justifyContent: 'center',

              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Ionicons
              name='albums-outline'
              size={29}
              color='#00aeff'
              style={{ marginTop: 8 }}
            />

            <Text
              style={[
                { fontSize: 24, textAlign: 'center', color: '#000000' },
                AllStyle.Aboutheading,
              ]}
            >
              {title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProjectDetailHeader
