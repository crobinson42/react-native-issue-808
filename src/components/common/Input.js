import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = {
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textInput: {
    flex: 2,
    color: '#292929',
    fontSize: 18,
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23
  }
}
export { Input }
