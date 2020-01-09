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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
