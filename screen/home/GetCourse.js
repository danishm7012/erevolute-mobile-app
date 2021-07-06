//import 'firebase/storage'

import * as ImagePicker from 'expo-image-picker'
import * as firebase from 'firebase'

import {
  ActivityIndicator,
  Alert,
  AsyncStorage,
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
import React, { useCallback, useEffect, useState } from 'react'

import { Button } from 'react-native-elements'
import Input from '../../component/inputField/InputField'
import TextCard from '../../component/card/TextCard'
import { createEnrollCourseForm } from '../action/getCourseFormData'
import { firebaseConfig } from '../../firebase/config'
import { useDispatch } from 'react-redux'

const screenWidth = Dimensions.get('screen').width
function GetCourse() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [address, setAddress] = useState('')
  const [imageURI, setImageURI] = useState('')
  const [selectedValue, setSelectedValue] = useState('java')
  const [disimage, setdisImage] = useState(null)
  const [uploading, setUploading] = useState(false)
  const dispatch = useDispatch()
  var metadata = {
    contentType: 'image/jpg',
  }

  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      }
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'))
      }
      xhr.responseType = 'blob'
      xhr.open('GET', disimage, true)
      xhr.send(null)
    })

    const ref = firebase.storage().ref().child(new Date().toISOString())
    const snapshot = ref.put(blob)
    snapshot.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true)
      },
      (error) => {
        setUploading(false)
        console.log(error)
        blob.close()
        return
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          setUploading(false)
          console.log(url)
          setImageURI(url)
          blob.close()
          return url
        })
      }
    )
  }

  const submitHandler = useCallback(() => {
    if (
      name === '' ||
      phoneNum === '' ||
      email === '' ||
      address === '' ||
      selectedValue === '' ||
      imageURI === ''
    ) {
      Alert.alert('Please enter all input fields')
    } else {
      dispatch(
        createEnrollCourseForm(
          name,
          phoneNum,
          email,
          address,
          imageURI,
          selectedValue
        )
      )
      Alert.alert('Message submitted successfully!!')
      setName('')
      setEmail('')
      setSelectedValue('')
      setPhoneNum('')
      setAddress('')
      setdisImage(null)
      setImageURI('')
    }
  }, [dispatch, name, phoneNum, email, address, imageURI, selectedValue])
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
      aspect: [9, 8],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      const response = await fetch(result.uri)
      setdisImage(result.uri)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <TextCard
            text1='Account Name:'
            text2='Erevolute Education Network PVT Ltd.'
            text3='Account Number:'
            text4='1308019431015792'
            text5='Bank Name:'
            text6='Premier Branch MCB'
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
                Name
              </Text>
              <View style={styles.action}>
                <Input
                  id='name'
                  keyboardType='default'
                  required
                  name
                  value={name}
                  onChangeText={(text) => setName(text)}
                  autoCapitalize='none'
                  style={styles.textInput}
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
                Phone No
              </Text>
              <View style={styles.action}>
                <Input
                  id='phone'
                  required
                  value={phoneNum}
                  onChangeText={(text) => setPhoneNum(text)}
                  keyboardType='number-pad'
                  autoCapitalize='none'
                  initialValue=''
                  style={styles.textInput}
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
                E-mail
              </Text>
              <View style={styles.action}>
                <Input
                  id='email'
                  keyboardType='email-address'
                  required
                  email
                  autoCapitalize='none'
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.textInput}
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
                Address
              </Text>
              <View style={styles.action}>
                <Input
                  id='address'
                  keyboardType='default'
                  required
                  value={address}
                  onChangeText={(text) => setAddress(text)}
                  autoCapitalize='none'
                  style={styles.textInput}
                />
              </View>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, flex: 1 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
                itemStyle={{
                  color: '#121212',
                  fontFamily: 'open-sans-bold',
                  fontSize: 22,
                  borderWidth: 1,
                  borderColor: '#121212',
                }}
              >
                <Picker.Item label='Select Course' value='selectcourse' />
                <Picker.Item
                  label='Amazon Drop Shipping-45000-/'
                  value='amazondropshipping'
                />
                <Picker.Item
                  label='Amazon Private Label-60000-/'
                  value='amazonprivatelabel'
                />
                <Picker.Item
                  label='Amazon Whole Sale FBA-45000'
                  value='amazonewholesalefba'
                />
                <Picker.Item
                  label='Digital Marketing-45000'
                  value='digitakmarketing'
                />
                <Picker.Item
                  label='Content Writing-45000'
                  value='contentwriting'
                />

                <Picker.Item
                  label='Amazon Whole Sale FBA-45000'
                  value='amazonewholesalefba'
                />
              </Picker>
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
                  <Button
                    title='Upload Image of Bank Receipt'
                    onPress={pickImage}
                  />
                  <View
                    style={{
                      height: 200,
                      width: screenWidth / 1.2,
                      borderWidth: 1,
                      borderColor: '#f2f2f2',
                    }}
                  >
                    {disimage && (
                      <Image
                        source={{ uri: disimage }}
                        style={{ width: 200, height: 200 }}
                      />
                    )}
                  </View>
                </View>
              </View>
              <View>
                {!uploading ? (
                  <Button
                    title='upload'
                    containerStyle={{
                      width: screenWidth / 3,
                      marginBottom: 30,
                    }}
                    onPress={uploadImage}
                  />
                ) : (
                  <ActivityIndicator size='large' color='#000' />
                )}
                <Button title='Submit' type='solid' onPress={submitHandler} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
GetCourse.navigationOptions = (navData) => {
  return {
    headerTitle: 'Register yourself',
  }
}

export default GetCourse
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
})
