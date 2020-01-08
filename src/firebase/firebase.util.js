import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDi-0cC4E8DCqe1QUsAme8N77f3cI45bLc",
  authDomain: "shop-9b81c.firebaseapp.com",
  databaseURL: "https://shop-9b81c.firebaseio.com",
  projectId: "shop-9b81c",
  storageBucket: "shop-9b81c.appspot.com",
  messagingSenderId: "912169804743",
  appId: "1:912169804743:web:16caa7a215b181f6896fe2",
  measurementId: "G-H4KXEYVPX8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
