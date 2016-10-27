import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends React.Component {
  handleLogin = () => {
    const { email, password } = this.props
    loginUser({email, password})
  }

  render () {
    const { email, emailChanged, password, passwordChanged, loginUser } = this.props

    return (
      <View>
        <CardSection>
          <Input
            label='Email'
            placeholder='you@gmail.com'
            onChangeText={emailChanged}
            value={email}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='******'
            onChangeText={passwordChanged}
            value={password}
            />
        </CardSection>

        <CardSection>
          <Button
            onPress={e => loginUser({email, password})}
            >
            Login
          </Button>
        </CardSection>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  const {email, password} = state.auth
  return {
    email,
    password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
