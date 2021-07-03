import { ActivityIndicator, AsyncStorage, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import Color from '../../colors/Color'
import { authenticate } from '../action/userAction'
import { useDispatch } from 'react-redux'

function StartupScreen(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData')
      if (!userData) {
        props.navigation.navigate('Auth')
        return
      }
      const transformedData = JSON.parse(userData)
      const { token, userId, expiryDate } = transformedData
      const expirationDate = new Date(expiryDate)
      if (expirationDate <= new Date() || !token || !userId) {
        props.navigation.navigate('Auth')
        return
      }
      const expirationTime = expirationDate.getTime() - new Date().getTime()
      props.navigation.navigate('appScreen')
      dispatch(authenticate(userId, token, expirationTime))
    }
    tryLogin()
  }, [dispatch])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color={Color.primaryColour} />
    </View>
  )
}

export default StartupScreen
