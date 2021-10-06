import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyD5rq6doAqlkb3GetDWbAAHbsa2FvWd7u0",
    authDomain: "projeto-b2dc7.firebaseapp.com",
    projectId: "projeto-b2dc7",
    storageBucket: "projeto-b2dc7.appspot.com",
    messagingSenderId: "71557768085",
    appId: "1:71557768085:web:3848f8cc0df53aaa618c9c",
    measurementId: "G-4M4KZPVMPF"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;