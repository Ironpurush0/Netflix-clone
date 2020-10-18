import Firebase from 'firebase/app'
import {seedDatabase} from '../seed'
import {CONFIG} from '../config'

import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'



const firebase = Firebase.initializeApp(CONFIG);

// seedDatabase(firebase)

export {firebase}