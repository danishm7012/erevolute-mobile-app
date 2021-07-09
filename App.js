import * as Font from 'expo-font'

import React, { useState } from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'

import AppLoading from 'expo-app-loading'
import NavigationContainer from './navigation/NavigationContainer'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import contactReducer from './screen/reducer/contactReducer'
import { enableScreens } from 'react-native-screens'
import getCourseFormData from './screen/reducer/getCourseFormData'
import userReducer from './screen/reducer/userReducer'

const rootReducer = combineReducers({
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
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setfontloaded(true)}
        onError={console.err}
      />
    )
  }
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  )
}
