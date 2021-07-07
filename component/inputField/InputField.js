import { StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const Input = (props) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput {...props} style={styles.input} />
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{props.errorText}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
  },
  input: {
    paddingHorizontal: 2,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 2,
  },
  errorText: {
    fontFamily: 'open-sans',
    color: 'red',
    fontSize: 13,
  },
})

export default Input
