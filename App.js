import * as Font from 'expo-font'

import React, { useState } from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'

import AppLoading from 'expo-app-loading'
import NavigationContainer from './navigation/NavigationContainer'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { StatusBar } from 'expo-status-bar'
import contactReducer from './screen/reducer/contactReducer'
import { enableScreens } from 'react-native-screens'
import getCourseFormData from './screen/reducer/getCourseFormData'
import userReducer from './screen/reducer/userReducer'

const rootReducer = combineReducers({
  // products: productsReducer,
  // cart: cartReducer,
  // orders: ordersReducer
  contactUsers: contactReducer,
  enrollUser: getCourseFormData,
  auth: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

enableScreens()
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  let x = 1
  const [fontloaded, setfontloaded] = useState(false)

  if (!fontloaded) {
    return (
      <>
        <StatusBar
          backgroundColor='#61dafb'
          barStyle='dark-content'
          hidden={true}
        />
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setfontloaded(true)}
          onError={console.err}
        />
      </>
    )
  }
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  )
}
