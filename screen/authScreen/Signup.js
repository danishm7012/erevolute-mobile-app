import * as authActions from '../action/userAction'

import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'

import Color from '../../colors/Color'
import Input from './Input.js'
import { useDispatch } from 'react-redux'

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

const SignUp = (props) => {
  const [error, setError] = useState()
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
  const signupHandler = async () => {
    setError(null)
    try {
      await dispatch(
        authActions.signup(
          formState.inputValues.email,
          formState.inputValues.password
        )
      )
      props.navigation.navigate('Login_Screen')
    } catch (err) {
      setError(err.message)
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
          <View style={styles.header}>
            <Text
              style={{
                color: '#121212',
                fontWeight: 'bold',
                fontSize: 30,
              }}
            >
              Register Yourself
            </Text>
            <Text
              style={{
                color: Color.accentColour,
              }}
            >
              Sign up to continute
            </Text>
          </View>
          <View style={styles.footer}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 50,
                },
              ]}
            >
              UserName
            </Text>
            <View style={styles.action}>
              <Input
                id='username'
                keyboardType='default'
                required
                autoCapitalize='none'
                errorText='Please enter a valid username.'
                onInputChange={inputChangeHandler}
                initialValue=''
                style={styles.textInput}
                id='username'
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
                errorText='Please enter a valid email address.'
                onInputChange={inputChangeHandler}
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
              Confirm Password
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
              />
            </View>

            <TouchableOpacity onPress={signupHandler}>
              <View style={styles.button_container}>
                <View style={styles.animation}>
                  <Text style={styles.textLogin}>SignUp</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.signUp}>
              <Text style={{ color: 'black' }}>Already have an account</Text>
              <Text
                onPress={() => {
                  props.navigation.goBack()
                }}
                style={{ color: 'blue' }}
              >
                {' '}
                Sign In
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignUp

const height = Dimensions.get('screen').height
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: height / 4.5,
    justifyContent: 'flex-end',
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

SignUp.navigationOptions = () => {
  return {
    headerTitle: ' ',
  }
}
