import * as ImagePicker from 'expo-image-picker'

import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Image,
  Picker,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useCallback, useEffect, useReducer, useState } from 'react'

import { Button } from 'react-native-elements'
import Color from '../../colors/Color'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import Input from '../../component/inputField/InputField'
import { Ionicons } from '@expo/vector-icons'
import TextCard from '../../component/card/TextCard'

const screenWidth = Dimensions.get('screen').width
function CareerHiringForm() {
  //     const [isLoading, setIsLoading] = useState(false)
  // const [typing_email, setTyping_email] = useState(false)
  //   const [typing_password, setTyping_password] = useState(false)
  //   const [enable, setEnable] = useState(true)
  const [selectedValue, setSelectedValue] = useState('java')
  const [image, setImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <TextCard
            text1='Be a Part of *'
            text2='Erevolute Education Network PVT Ltd.'
            text3='Call Us  *'
            text4='(+92) 42-3713-3152'
            text5='EXPLORE THE WIDE RANGE OF OPTIONS'
            text6='Help Business Start Ups'
          />
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.footer, {}]}>
              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 0,
                  },
                ]}
              >
                Name *
              </Text>
              <View style={styles.action}>
                <Input
                  id='name'
                  keyboardType='default'
                  required
                  name
                  autoCapitalize='none'
                  //  errorText='Please enter a valid email address.'
                  //    onInputChange={inputChangeHandler}
                  initialValue=''
                  style={styles.textInput}
                  //   onFocus={}
                />
              </View>

              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 20,
                  },
                ]}
              >
                Phone No *
              </Text>
              <View style={styles.action}>
                <Input
                  id='phone'
                  keyboardType='default'
                  required
                  // email
                  autoCapitalize='none'
                  //  errorText='Please enter a valid email address.'
                  //    onInputChange={inputChangeHandler}
                  initialValue=''
                  style={styles.textInput}
                  //   onFocus={}
                />
              </View>

              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 20,
                  },
                ]}
              >
                E-mail *
              </Text>
              <View style={styles.action}>
                <Input
                  id='email'
                  keyboardType='email-address'
                  required
                  email
                  autoCapitalize='none'
                  //  errorText='Please enter a valid email address.'
                  //    onInputChange={inputChangeHandler}
                  initialValue=''
                  style={styles.textInput}
                  //   onFocus={}
                />
              </View>

              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 20,
                  },
                ]}
              >
                Address *
              </Text>
              <View style={styles.action}>
                <Input
                  id='address'
                  keyboardType='default'
                  // secureTextEntry
                  required
                  // minLength={5}
                  autoCapitalize='none'
                  //errorText='Please enter a valid password.'
                  //          onInputChange={inputChangeHandler}
                  initialValue=''
                  style={styles.textInput}
                  // onFocus={}
                />
              </View>

              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 20,
                  },
                ]}
              >
                Applying For Position *
              </Text>
              <View style={styles.action}>
                <Input
                  id='applying'
                  keyboardType='default'
                  // secureTextEntry
                  required
                  // minLength={5}
                  autoCapitalize='none'
                  //errorText='Please enter a valid password.'
                  //          onInputChange={inputChangeHandler}
                  initialValue=''
                  style={styles.textInput}
                  // onFocus={}
                />
              </View>

              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 20,
                  },
                ]}
              >
                Cover Letter *
              </Text>
              <View style={styles.action}>
                <Input
                  id='cover'
                  keyboardType='default'
                  // secureTextEntry
                  required
                  minLength={7}
                  numberOfLines={8}
                  autoCapitalize='none'
                  //errorText='Please enter a valid password.'
                  //          onInputChange={inputChangeHandler}
                  initialValue=''
                  style={styles.textInput}
                  // onFocus={}
                />
              </View>

              <TouchableOpacity>
                <View style={styles.button_container}></View>
              </TouchableOpacity>

              <View style={{ marginBottom: 10, flex: 1 }}>
                <View
                  style={{
                    marginTop: 20,
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Button title='Upload Resume *' onPress={pickImage} />
                  <View
                    style={{
                      height: 200,
                      width: screenWidth / 1.2,
                      borderWidth: 1,
                      borderColor: '#f2f2f2',
                    }}
                  >
                    {image && (
                      <Image
                        source={{ uri: image }}
                        style={{ width: 200, height: 200 }}
                      />
                    )}
                  </View>
                </View>
              </View>
              <View>
                <Button title='Submit' type='solid' />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
CareerHiringForm.navigationOptions = (navData) => {
  return {
    headerTitle: 'Career Hiring Form',
    // headerLeft: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title='Menu'
    //       iconName='ios-menu'
    //       onPress={() => {
    //         navData.navigation.toggleDrawer()
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
  }
}

export default CareerHiringForm
const height = Dimensions.get('screen').height
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  footer: {
    //flex: 1,
    // paddingTop: 150,
    marginTop: 20,
    width: screenWidth / 1.04,
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: 20,
  },
  imageBackground: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // resizeMode: 'stretch',
    width: '100%',
    height: height / 3,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    flex: 1,
    color: 'gray',
    backgroundColor: '#fff',
  },
  button_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    backgroundColor: '#93278f',
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
})
