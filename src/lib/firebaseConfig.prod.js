import Firebase from 'firebase/app'
import {seedDatabase} from '../seed'
import config from '../config'

import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'



const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export {firebase}