import { Dimensions, Image, Pressable, Text, View } from 'react-native'

import AllStyle from '../../AllStyle.js'
import { Asset } from 'expo-asset'
import Color from '../../colors/Color.js'
import ImageView from 'react-native-image-viewing'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ProjectDetailHeader({ headerimage, title }) {
  const images = [
    {
      uri: Asset.fromModule(headerimage).uri,
    },
  ]
  const [visible, setIsVisible] = React.useState(false)
  return (
    <View style={{ flex: 1 }}>
      <View style={AllStyle.aboutSwiper}>
        {/* <SwiperComponent /> */}
        <ImageView
          images={images}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
        <Pressable onPress={() => setIsVisible(true)}>
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
        </Pressable>
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
                color={Color.primaryColour}
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
