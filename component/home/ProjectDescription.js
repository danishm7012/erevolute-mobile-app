import { Dimensions, Image, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ProjectDescription({ description, heading }) {
  return (
    <View style={{ flex: 1 }}>
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

            elevation: 20,
            backgroundColor: '#fff',
          }}
        >
          <View>
            <Text
              style={[{ marginRight: 8, fontSize: 16 }, AllStyle.Aboutheading]}
            >
              {' '}
              {heading}{' '}
            </Text>
            <Text
              style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
            >
              {description}
            </Text>
          </View>
          <View>
            <Image
              style={{
                resizeMode: 'contain',
                height: screenHeight / 5,
                width: screenWidth / 1.04,
              }}
              source={require('../../assets/images/banner/banner2.jpg')}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProjectDescription
