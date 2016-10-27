import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import thunk from 'redux-thunk'

import LoginForm from './components/LoginForm'

function logger({ getState }) {
  return (next) => (action) => {
    console.info(`-> Will dispatch ${action.type}`, action.payload)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.info('+ <--> + State after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

class App extends React.Component {
  componentWillMount () {
    // Initialize Firebase
    
  }

  store = createStore(reducers, {}, applyMiddleware(thunk))

  render () {
    return (
      <Provider store={this.store}>
        <LoginForm />
      </Provider>
    )
  }

}

export default App
