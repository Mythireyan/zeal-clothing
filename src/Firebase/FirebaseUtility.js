import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
	apiKey: "AIzaSyBMypVtLrQBbgV_FbKAfd4yU-WTNVMjrHU",
    authDomain: "zeal-clothing.firebaseapp.com",
    databaseURL: "https://zeal-clothing.firebaseio.com",
    projectId: "zeal-clothing",
    storageBucket: "zeal-clothing.appspot.com",
    messagingSenderId: "1068801998163",
    appId: "1:1068801998163:web:d5f852098af4e98a2ef5a6",
    measurementId: "G-LLJ1PR1TNT"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase; 