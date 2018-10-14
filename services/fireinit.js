import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyDxGjBjHiL51D5_vZRHK6PIv2JxKc540w4',
  authDomain: 'just-for-fan-casino.firebaseapp.com',
  databaseURL: 'https://just-for-fan-casino.firebaseio.com',
  projectId: 'just-for-fan-casino',
  storageBucket: 'just-for-fan-casino.appspot.com',
  messagingSenderId: '686716427241'
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
// export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
