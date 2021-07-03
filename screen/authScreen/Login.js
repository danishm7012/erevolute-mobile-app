import * as Animatable from 'react-native-animatable'
import * as authActions from '../action/userAction'

import {
  ActivityIndicator,
  Alert,
  Animated,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from './Input.js'
import { Ionicons } from '@expo/vector-icons'
import { TypingAnimation } from 'react-native-typing-animation'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'
const screenWidth = Dimensions.get('screen').width

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    }
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let updatedFormIsValid = true
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    }
  }
  return state
}

const Login = (props) => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [typing_email, setTyping_email] = useState(false)
  const [typing_password, setTyping_password] = useState(false)
  const [localId, setLocalId] = useState(null)
  const [enable, setEnable] = useState(true)
  const userId = useSelector((state) => state.auth.userId)
  //setLocalId(userId)
  // useEffect(() => {
  //   setLocalId(userId)
  // })
  console.log('userId after useSelector', localId)
  const animation_login = new Animated.Value(screenWidth - 40)
  const _foucus = (value) => {
    if (value == 'email') {
      setTyping_email(true)
      setTyping_password(false)
    } else {
      setTyping_email(false)
      setTyping_password(true)
    }
  }

  const _typing = () => {
    return <TypingAnimation dotColor='#93278f' style={{ marginRight: 25 }} />
  }

  const _animation = () => {
    Animated.timing(animation_login, {
      toValue: 40,
      duration: 250,
      useNativeDriver: false,
    }).start()

    setTimeout(() => {
      setEnable(false)
      setTyping_email(false)
      setTyping_password(false)
    }, 150)
  }
  const widthanim = animation_login

  // SignUp functions

  const dispatch = useDispatch()

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  })
  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }])
    }
  }, [error])

  const loginHandler = async () => {
    setError(null)
    setIsLoading(true)
    try {
      await dispatch(
        authActions.login(
          formState.inputValues.email,
          formState.inputValues.password
        )
      )

      console.log('user Id of login form after dispatch : !!!', userId)
      if (localId === 'VPxsMc7DqKfUOfRpKLq7QrsxIbv2') {
        props.navigate.navigate('Auth')
      } else {
        props.navigation.navigate('appScreen')
      }
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      })
    },
    [dispatchFormState]
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <StatusBar barStyle="light-content" /> */}
          <View style={styles.header}>
            {/* <ImageBackground
              source={require('../../assets/erevolute.png')}
              style={styles.imageBackground}
            > */}
            <Text
              style={{
                color: '#121212',
                fontWeight: 'bold',
                fontSize: 30,
              }}
            >
              Welcome Back
            </Text>
            <Text
              style={{
                color: '#34ed56',
              }}
            >
              Sign in to continue
            </Text>
            {/* </ImageBackground> */}
          </View>
          <View style={styles.footer}>
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
                errorText='Please enter a valid email address.'
                onInputChange={inputChangeHandler}
                initialValue=''
                style={styles.textInput}
                onFocus={() => _foucus('email')}
              />
              {typing_email ? _typing() : null}
            </View>

            <Text
              style={[
                styles.title,
                {
                  marginTop: 20,
                },
              ]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <Input
                id='password'
                keyboardType='default'
                secureTextEntry
                required
                minLength={5}
                autoCapitalize='none'
                errorText='Please enter a valid password.'
                onInputChange={inputChangeHandler}
                initialValue=''
                style={styles.textInput}
                onFocus={() => _foucus('password')}
              />
              {typing_password ? _typing() : null}
            </View>
            {isLoading ? (
              <ActivityIndicator size={'large'} color='#f57842' />
            ) : (
              <Text> </Text>
            )}
            <TouchableOpacity onPress={loginHandler}>
              <View style={styles.button_container}>
                <View style={styles.animation}>
                  <Text style={styles.textLogin}>SignIn</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.signUp}>
              <Text style={{ color: 'black' }}>New User?</Text>
              <Text
                onPress={() => {
                  props.navigation.navigate('Sign_Up')
                }}
                style={{ color: 'blue' }}
              >
                {' '}
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Login

const height = Dimensions.get('screen').height
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: height / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    //flex: 1,
    // paddingTop: 150,
    height: height / 1.3,
    padding: 20,
  },
  imageBackground: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    width: '80%',
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
  },
  button_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    backgroundColor: '#93278f',
    width: screenWidth / 1.2,
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

Login.navigationOptions = () => {
  return {
    headerTitle: ' ',
  }
}
