import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const config = {
//   apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
//   authDomain: 'crwn-db.firebaseapp.com',
//   databaseURL: 'https://crwn-db.firebaseio.com',
//   projectId: 'crwn-db',
//   storageBucket: 'crwn-db.appspot.com',
//   messagingSenderId: '850995411664',
//   appId: '1:850995411664:web:7ddc01d597846f65'
// };
const config = {
  apiKey: "AIzaSyDWJvBhJwwZ-fGnfL0whriG_L6zq6_YjWo",
  authDomain: "store-x-db.firebaseapp.com",
  databaseURL: "https://store-x-db.firebaseio.com",
  projectId: "store-x-db",
  storageBucket: "store-x-db.appspot.com",
  messagingSenderId: "289022675193",
  appId: "1:289022675193:web:baf20f348aa8ebe182ba28",
  measurementId: "G-4BXMSXQ7VC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(err => { console.log(err); return;});

export default firebase;
