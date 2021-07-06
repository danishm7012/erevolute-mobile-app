import { Dimensions, Image, ImageBackground, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import Color from '../../colors/Color'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ProjectDescription({
  description,
  heading,
  heading1,
  description1,
  heading2,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  description9,
  description10,
  description11,
  description12,
  description13,
  description14,
  description15,
  description16,
  description17,
  description18,
  heading3,
  heading4,
  heading5,
  heading6,
  heading7,
  heading8,
  heading9,
  heading10,
  heading11,
  heading12,
  heading13,
  heading14,
  heading15,
  heading16,
  heading17,
  heading18,
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
      {heading1 && (
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
                {heading1}{' '}
              </Text>
              {description1.map((item, index) => (
                <Text
                  key={index}
                  style={[
                    { marginRight: 8, padding: 12 },
                    AllStyle.Aboutdetail,
                  ]}
                >
                  <Ionicons
                    name='videocam'
                    size={25}
                    color={Color.accentColour}
                  />
                  {item}
                </Text>
              ))}
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
      {heading7 && (
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
                {heading7}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description7}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading8 && (
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
                {heading8}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description8}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading9 && (
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
                {heading9}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description9}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading10 && (
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
                {heading10}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description10}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading11 && (
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
                {heading11}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description11}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading12 && (
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
                {heading12}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description12}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading13 && (
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
                {heading13}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description13}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading14 && (
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
                {heading14}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description14}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading15 && (
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
                {heading15}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description15}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading16 && (
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
                {heading16}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description16}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading17 && (
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
                {heading17}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description17}
              </Text>
            </View>
          </View>
        </View>
      )}

      {heading18 && (
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
                {heading18}{' '}
              </Text>
              <Text
                style={[{ marginRight: 8, padding: 12 }, AllStyle.Aboutdetail]}
              >
                {description18}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

export default ProjectDescription
