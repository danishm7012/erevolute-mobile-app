// screens/UserScreen.js

import {
  ActivityIndicator,
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useCallback, useEffect, useState } from 'react'
import { deleteProduct, fetchContactFormData } from '../action/contactAction'
import { useDispatch, useSelector } from 'react-redux'

import { ActivityIndicatorBase } from 'react-native'
import Color from '../../colors/Color'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import firebase from '../../firebase/config'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

function UserScreen(props) {
  const [error, setError] = useState()
  const [isLoading, setIsloading] = useState(false)
  const dispatch = useDispatch()
  const usersArray = useSelector((state) => state.contactUsers.availableUsers)

  const loadedUserData = useCallback(async () => {
    setError(null)
    setIsloading(true)
    try {
      await dispatch(fetchContactFormData())
    } catch (err) {
      setError(err.message)
    }
    setIsloading(false)
  }, [dispatch, setError, setIsloading])
  useEffect(() => {
    loadedUserData()
  }, [dispatch, loadedUserData])

  const deleteHandler = (i) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteProduct(i))
        },
      },
    ])
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={Color.primaryColour} />
      </View>
    )
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            color: 'red',
            fontSize: 20,
            fontFamily: 'open-sans-bold',
          }}
        >
          An error occured!!!
        </Text>
        <Button title='Try again' onPress={loadedUserData} />
      </View>
    )
  }
  if (!isLoading && usersArray.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            color: '#121212',
            fontSize: 20,
            fontFamily: 'open-sans-bold',
          }}
        >
          No User Data to Show
        </Text>
      </View>
    )
  }
  return (
    <ScrollView>
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
        }}
      >
        {usersArray.map((item, i) => {
          console.log(item.id)
          return (
            <ListItem.Swipeable
              key={i}
              bottomDivider
              containerStyle={{
                width: screenWidth,
                height: screenHeight / 4,
                backgroundColor: Color.primaryColour,
                marginTop: 8,
              }}
              leftContent={
                <Button
                  title='Info'
                  icon={{ name: 'info', color: 'white' }}
                  buttonStyle={{ minHeight: '100%' }}
                />
              }
              rightContent={
                <Button
                  title='Delete'
                  icon={{ name: 'delete', color: 'white' }}
                  buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                  onPress={deleteHandler.bind(this, item.id)}
                />
              }
            >
              <Avatar
                rounded
                title='MD'
                overlayContainerStyle={{
                  backgroundColor: Color.accentColour,
                }}
                size='large'
              />
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    color: '#fff',
                    fontSize: 22,
                    fontFamily: 'open-sans-bold',
                  }}
                >
                  {item.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: '#fff', fontSize: 16 }}>
                  {item.email}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: '#fff', fontSize: 16 }}>
                  {item.mobile}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: '#fff', fontSize: 16 }}>
                  {item.message}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem.Swipeable>
          )
        })}
      </View>
    </ScrollView>
  )
}

UserScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'User List',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default UserScreen
