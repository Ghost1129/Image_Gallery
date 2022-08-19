// Import the functions you need from the SDKs you need
import {initializeApp}from 'firebase/app';
import { getStorage,ref } from "firebase/storage";
import { getFirestore, collection, getDocs, serverTimestamp } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDAf4bgdObIWAMqarhA0yedV0FeWsCKjl8",
    authDomain: "photo-gallery-ae20f.firebaseapp.com",
    projectId: "photo-gallery-ae20f",
    storageBucket: "photo-gallery-ae20f.appspot.com",
    messagingSenderId: "438884468109",
    appId: "1:438884468109:web:f562b697a8d5c66edb69c4",
    measurementId: "G-QW3SLKLBDK"

};

// Initialize Firebase
const app =initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore(app);


// const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore, serverTimestamp };

