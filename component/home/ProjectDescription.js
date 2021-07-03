import { Dimensions, Image, ImageBackground, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ProjectDescription({
  description,
  heading,
  heading2,
  description2,
  description3,
  description4,
  description5,
  description6,
  heading3,
  heading4,
  heading5,
  heading6,
}) {
  return (
    <View style={{ flex: 1 }}>
      {heading && (
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
                style={[
                  { marginRight: 8, fontSize: 16 },
                  AllStyle.Aboutheading,
                ]}
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
      )}
      {heading2 && (
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
                style={[
                  { marginRight: 8, fontSize: 16 },
                  AllStyle.Aboutheading,
                ]}
              >
                {' '}
                {heading2}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description2}
              </Text>
            </View>
            <View>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: screenHeight / 5,
                  width: screenWidth / 1.04,
                }}
                source={require('../../assets/images/banner/banner.jpg')}
              />
            </View>
          </View>
        </View>
      )}
      {heading3 && (
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
                style={[
                  { marginRight: 8, fontSize: 16 },
                  AllStyle.Aboutheading,
                ]}
              >
                {' '}
                {heading3}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description3}
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
      )}
      {heading4 && (
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
                style={[
                  { marginRight: 8, fontSize: 16 },
                  AllStyle.Aboutheading,
                ]}
              >
                {' '}
                {heading4}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description4}
              </Text>
            </View>
            <View>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: screenHeight / 5,
                  width: screenWidth / 1.04,
                }}
                source={require('../../assets/images/banner/banner3.jpg')}
              />
            </View>
          </View>
        </View>
      )}
      {heading5 && (
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
                style={[
                  { marginRight: 8, fontSize: 16 },
                  AllStyle.Aboutheading,
                ]}
              >
                {' '}
                {heading5}{' '}
              </Text>

              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description5}
              </Text>
            </View>
            <View>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: screenHeight / 5,
                  width: screenWidth / 1.04,
                }}
                source={require('../../assets/images/banner/banner4.jpg')}
              />
            </View>
          </View>
        </View>
      )}
      {heading6 && (
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
                style={[
                  { marginRight: 8, fontSize: 16 },
                  AllStyle.Aboutheading,
                ]}
              >
                {' '}
                {heading6}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description6}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

export default ProjectDescription
