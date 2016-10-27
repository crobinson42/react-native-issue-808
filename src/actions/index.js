import firebase from 'firebase';

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOG_USER_IN_SUCCESS } from './types'

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
})

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
})

export const loginUser = ({ email, password }) => dispatch => {
  // firebase.auth().signInWithEmailAndPassword(email, password)
  //   .catch(err => {
  //     console.error(err);
  //   })
  //   .then(user => console.log('user', user))
}
