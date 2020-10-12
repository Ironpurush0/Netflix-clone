import Firebase from 'firebase/app'
import {seedDatabase} from './seed'

import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

const config = {
  apiKey: "AIzaSyCTVngfHh5bnT6k37LB3JXadVadcNpaZ2U",
  authDomain: "netflix-clone-d4fd8.firebaseapp.com",
  databaseURL: "https://netflix-clone-d4fd8.firebaseio.com",
  projectId: "netflix-clone-d4fd8",
  storageBucket: "netflix-clone-d4fd8.appspot.com",
  messagingSenderId: "936527375738",
  appId: "1:936527375738:web:c24eca661f225f32f33ac3",
  measurementId: "G-7MNH3BWDTY"
}

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export {firebase}