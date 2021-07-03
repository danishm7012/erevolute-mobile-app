import { Alert, Button, ScrollView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useCallback, useRef, useState } from 'react'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import YoutubePlayer from 'react-native-youtube-iframe'

function CourseVideos() {
  const [playing, setPlaying] = useState(false)
  const [playingsecond, setPlayingsecond] = useState(false)
  const [playingthird, setPlayingthird] = useState(false)
  const [playingfour, setPlayingfour] = useState(false)
  const [playingfive, setPlayingfive] = useState(false)
  const [playingsix, setPlayingsix] = useState(false)
  const [playingseventh, setPlayingthirdseventh] = useState(false)

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const onStateChangesecond = useCallback((state) => {
    if (state === 'ended') {
      setPlayingsecond(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const onStateChangethird = useCallback((state) => {
    if (state === 'ended') {
      setPlayingthird(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const onStateChangefour = useCallback((state) => {
    if (state === 'ended') {
      setPlayingfour(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const onStateChangefive = useCallback((state) => {
    if (state === 'ended') {
      setPlayingfive(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const onStateChangesix = useCallback((state) => {
    if (state === 'ended') {
      setPlayingsix(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const onStateChangeseventh = useCallback((state) => {
    if (state === 'ended') {
      setPlayingthirdseventh(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <YoutubePlayer
            height={215}
            play={playing}
            videoId={'aUz1NO7L8E4'}
            onChangeState={onStateChange}
          />
          <View
            style={{
              flex: 1,
              paddingBottom: 50,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 10,
                fontFamily: 'open-sans-bold',
              }}
            >
              eRavolute | Largest learning hub
            </Text>
          </View>

          <YoutubePlayer
            height={215}
            play={playingsecond}
            videoId={'c8Es8vozZ1E'}
            onChangeState={onStateChangesecond}
          />
          <View
            style={{
              flex: 1,
              paddingBottom: 50,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 10,
                fontFamily: 'open-sans-bold',
              }}
            >
              Introduction | eRevolute - Where Revolution Emerge
            </Text>
          </View>
          <YoutubePlayer
            height={215}
            play={playingthird}
            videoId={'6ax-Mka50Jo'}
            onChangeState={onStateChangethird}
          />
          <View
            style={{
              flex: 1,
              paddingBottom: 50,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 10,
                fontFamily: 'open-sans-bold',
              }}
            >
              Digital Marketing Complete Course | Digital Marketing Experts |
              eRevolute
            </Text>
          </View>
          <YoutubePlayer
            height={215}
            play={playingfour}
            videoId={'b7dIQGwsadg'}
            onChangeState={onStateChangefour}
          />
          <View
            style={{
              flex: 1,
              paddingBottom: 50,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 10,
                fontFamily: 'open-sans-bold',
              }}
            >
              Amazon Dropshipping | Learn the best Dropshipping on Amazon Course
              from eRevolute
            </Text>
          </View>
          <YoutubePlayer
            height={215}
            play={playingfive}
            videoId={'bgcfAcWiWxE'}
            onChangeState={onStateChangefive}
          />
          <View
            style={{
              flex: 1,
              paddingBottom: 50,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'open-sans-bold',
                paddingHorizontal: 10,
              }}
            >
              Search Engine Optimization (SEO) Course | eRevolute
            </Text>
          </View>
          <YoutubePlayer
            height={215}
            play={playingsix}
            videoId={'PYO0HBxcMVw'}
            onChangeState={onStateChangesix}
          />
          <View
            style={{
              flex: 1,
              paddingBottom: 50,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 10,
                fontFamily: 'open-sans-bold',
              }}
            >
              Content Writing Complete Course | Content Writing Course in
              Pakistan | eRevolute
            </Text>
          </View>
          <YoutubePlayer
            height={215}
            play={playingseventh}
            videoId={'jFeTTAYsgu4'}
            onChangeState={onStateChangeseventh}
          />
          <View
            style={{
              flex: 1,
              paddingBottom: 50,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'open-sans-bold',
                paddingHorizontal: 10,
              }}
            >
              eBay Complete Course | eBay Course 2021 | eRevolute
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
export default CourseVideos
CourseVideos.navigationOptions = (navData) => {
  return {
    headerTitle: 'Overview',
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
