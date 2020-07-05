import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA10fJPbCslu7cE5WpQ5sHT25kc9_5u_eI",
  authDomain: "suppbuddy-f06ea.firebaseapp.com",
  databaseURL: "https://suppbuddy-f06ea.firebaseio.com",
  projectId: "suppbuddy-f06ea",
  storageBucket: "suppbuddy-f06ea.appspot.com",
  messagingSenderId: "804402954486",
  appId: "1:804402954486:web:3780da3d1616c5a3c8ecd7",
  measurementId: "G-R6MR0Q2P71",
};
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
