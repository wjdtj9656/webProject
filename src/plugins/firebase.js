import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'

import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/database'
import 'firebase/firestore'

// firebaseConfig is in firebaseConfig.js
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

Vue.prototype.$firebase = firebase
