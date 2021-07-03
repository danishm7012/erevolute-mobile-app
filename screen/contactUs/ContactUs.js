import * as ImagePicker from 'expo-image-picker'

import {
  Alert,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'react-native-elements'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import SocialMediaIcon from '../../component/socialMediaIcon/SocialMediaIcon'
import { createContactForm } from '../action/contactAction'
import firebase from '../../firebase/config'

const screenWidth = Dimensions.get('screen').width

function ContactUs() {
  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  // const dbRef = firebase.firestore().collection('serviceusers')
  // console.log('Name is : !!', name)
  // console.log('phoneNum is : !!', phoneNum)
  // console.log('email is : !!', email)
  // console.log('message is : !!', message)

  const submitHandler = useCallback(() => {
    if (name === '' || phoneNum === '' || email === '' || message === '') {
      Alert.alert('Please enter all input fields')
    } else {
      dispatch(createContactForm(name, phoneNum, email, message))
      Alert.alert('Message submitted successfully!!')
      setName('')
      setEmail('')
      setMessage('')
      setPhoneNum('')
    }
  }, [dispatch, name, phoneNum, email, message])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <Image
            style={{
              height: height / 3.5,
              width: screenWidth,
              resizeMode: 'stretch',
            }}
            source={require('../../assets/eRevoluteMobileBanners/Contact-US.jpg')}
          />
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={[styles.footer, {}]}>
              <View style={styles.formControl}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  // value={name}
                  onChangeText={(name) => setName(name)}
                  keyboardType='default'
                  autoCapitalize='sentences'
                  autoCorrect
                  returnKeyType='next'
                  // onEndEditing={() => console.log('onEndEditing')}
                  // onSubmitEditing={() => console.log('onSubmitEditing')}
                />
              </View>

              <View style={styles.formControl}>
                <Text style={styles.label}>PhoneNum</Text>
                <TextInput
                  style={styles.input}
                  // value={phoneNum}
                  onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
                  keyboardType='number-pad'
                  autoCapitalize='sentences'
                  autoCorrect
                  returnKeyType='next'
                  // onEndEditing={() => console.log('onEndEditing')}
                  // onSubmitEditing={() => console.log('onSubmitEditing')}
                />
              </View>

              <View style={styles.formControl}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  // value={email}
                  onChangeText={(email) => setEmail(email)}
                  keyboardType='email-address'
                  autoCapitalize='sentences'
                  autoCorrect
                  returnKeyType='next'
                  // onEndEditing={() => console.log('onEndEditing')}
                  // onSubmitEditing={() => console.log('onSubmitEditing')}
                />
              </View>

              <View style={styles.formControl}>
                <Text style={styles.label}>Message</Text>
                <TextInput
                  style={styles.input}
                  // value={message}
                  onChangeText={(message) => setMessage(message)}
                  keyboardType='default'
                  autoCapitalize='sentences'
                  autoCorrect
                  returnKeyType='next'
                  multiline
                  numberOfLines={4}
                  // onEndEditing={() => console.log('onEndEditing')}
                  // onSubmitEditing={() => console.log('onSubmitEditing')}
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
                ></View>
              </View>
              <View>
                <Button title='Submit' type='solid' onPress={submitHandler} />
              </View>
              <View
                style={{
                  paddingTop: StatusBar.currentHeight * 2.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SocialMediaIcon
                  facebookSocial='https://www.facebook.com/erevolute/'
                  twitterSocial='https://twitter.com/Erevolute1'
                  linkedInSocial='https://www.linkedin.com/company/e-revolute/'
                  instagramSocial='https://www.instagram.com/erevolute/'
                  websiteSocial='https://erevolute.org/'
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
ContactUs.navigationOptions = (navData) => {
  return {
    headerTitle: 'Register yourself',
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

export default ContactUs
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
    marginTop: 20,
    width: screenWidth / 1.04,
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: 20,
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
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
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
})
