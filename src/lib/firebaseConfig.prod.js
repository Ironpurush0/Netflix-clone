import Firebase from 'firebase/app'
import {seedDatabase} from '../seed'
import {CONFIG} from '../config'

import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

const firebaseConfig = CONFIG



const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase)

export {firebase}