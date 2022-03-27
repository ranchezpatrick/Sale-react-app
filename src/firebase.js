import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAK581iiqfB4LXY3Q57BZwDmWah-owcsIQ",
    authDomain: "react-sale.firebaseapp.com",
    projectId: "react-sale",
    storageBucket: "react-sale.appspot.com",
    messagingSenderId: "822120769282",
    appId: "1:822120769282:web:5f2cc956a0a9b24c65841b"
  };


const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();