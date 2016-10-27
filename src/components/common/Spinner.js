import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = () => {
  const { container } = styles
  return (
    <View style={container}>
      <ActivityIndicator />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  }
}

export { Spinner }
