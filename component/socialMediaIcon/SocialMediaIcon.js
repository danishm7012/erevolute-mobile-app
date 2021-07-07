import { Linking, View } from 'react-native'

import { Icon } from 'react-native-elements'
import React from 'react'
import { SocialIcon } from 'react-native-elements'

const SocialMediaIcon = ({
  facebookSocial,
  twitterSocial,
  linkedInSocial,
  instagramSocial,
  websiteSocial,
  pintrestSocial,
  youtubeSocial,
  reditSocial,
}) => {
  // facebook={facebook}
  // twitter={twitter}
  // linkedIn={linkedIn}
  // instagram={instagram}
  // website={website}

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          //  position: 'absolute',
          // justifyContent:'flex-start',
          // alignItems: 'flex-start',
          bottom: 0,
        }}
      >
        <SocialIcon
          type='twitter'
          raised={false}
          iconSize={18}
          onPress={() => Linking.openURL(twitterSocial)}
        />

        <SocialIcon
          raised={false}
          type='instagram'
          iconSize={18}
          onPress={() => Linking.openURL(instagramSocial)}
        />

        <SocialIcon
          raised={false}
          type='facebook'
          iconSize={18}
          onPress={() => Linking.openURL(facebookSocial)}
        />
        <SocialIcon
          raised={false}
          type='linkedin'
          iconSize={18}
          onPress={() => Linking.openURL(linkedInSocial)}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          // position: 'absolute',
          bottom: 0,
        }}
      >
        <SocialIcon
          raised={false}
          iconSize={18}
          type='reddit'
          style={{ backgroundColor: '#c4302b' }}
          onPress={() => Linking.openURL(reditSocial)}
        />
        <SocialIcon
          raised={false}
          iconSize={18}
          type='pinterest'
          style={{ backgroundColor: '#c4302b' }}
          onPress={() => Linking.openURL(pintrestSocial)}
        />
        <SocialIcon
          raised={false}
          style={{ backgroundColor: '#c4302b' }}
          type='youtube'
          iconSize={18}
          onPress={() => Linking.openURL(youtubeSocial)}
        />
        <SocialIcon
          raised={false}
          style={{ backgroundColor: '#9FA5AA' }}
          type='globe'
          iconSize={18}
          onPress={() => Linking.openURL(websiteSocial)}
        />
      </View>
    </>
  )
}
export default SocialMediaIcon
