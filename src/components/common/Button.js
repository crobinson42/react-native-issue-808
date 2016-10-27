import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  text: {
    fontWeight: '600',
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#233bbb'
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 3,
    borderColor: '#4c20fc',
    borderWidth: 1,
    margin: 5
  }
}

export { Button }
