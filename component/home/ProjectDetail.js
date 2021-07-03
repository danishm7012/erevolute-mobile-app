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
          flexGrow: 1,

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: screenWidth / 1.04,
            height: screenHeight / 9,
            elevation: 20,
            backgroundColor: '#fff',
            paddingRight: 15,
          }}
        >
          <View
            style={{
              flexGrow: 1,
              // justifyContent: 'space-between',
              justifyContent: 'space-around',
              alignItems: 'center',

              flexDirection: 'row',
            }}
          >
            <Text
              style={[
                {
                  fontSize: 20,
                  flexBasis: 330,
                  textAlign: 'center',
                  color: '#000000',
                },
                AllStyle.Aboutheading,
              ]}
            >
              <Ionicons
                name='albums-outline'
                size={35}
                color='#00aeff'
                style={{ marginTop: 8 }}
              />
              {title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProjectDetailHeader
