import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAkoMqHwb9suvefQbdxk7PaDVq_bovnaDA",
  authDomain: "feedback-app-ui.firebaseapp.com",
  projectId: "feedback-app-ui",
  storageBucket: "feedback-app-ui.appspot.com",
  messagingSenderId: "93488521964",
  appId: "1:93488521964:web:374e44eca32b318a2f7bc9",
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export {projectFirestore}