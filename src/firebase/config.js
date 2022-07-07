import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPPFKfDqHmBPTnPuXKhzQuVkrfVrseEzc",
  authDomain: "revolt-championship.firebaseapp.com",
  projectId: "revolt-championship",
  storageBucket: "revolt-championship.appspot.com",
  messagingSenderId: "555416337816",
  appId: "1:555416337816:web:0b19eeb8de739333917fed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);

// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
const timestamp = serverTimestamp()

export { projectStorage, projectFirestore, timestamp };