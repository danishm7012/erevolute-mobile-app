import { Dimensions, ImageBackground, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import Color from '../../colors/Color'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function List({ heading, detail }) {
  return (
    <View
      style={{
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {detail && (
        <View
          style={{
            width: screenWidth / 1.04,
            elevation: 20,
            backgroundColor: '#fff',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={[
                {
                  fontSize: 24,
                  // marginRight: 20,
                  textAlign: 'left',
                  color: '#000000',
                },
                AllStyle.Aboutheading,
              ]}
            >
              {heading}
            </Text>

            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',

                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              {detail.map((fea, index) => (
                <Text
                  style={[
                    {
                      marginRight: 8,
                      flexBasis: 360,
                      fontSize: 20,
                      marginBottom: 9,
                    },
                    AllStyle.Aboutdetail,
                  ]}
                  key={index}
                >
                  <Ionicons
                    name='chevron-forward'
                    size={25}
                    color={Color.primaryColour}
                  />
                  {fea}
                </Text>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

export default List
