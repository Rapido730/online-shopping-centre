import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5C-wweSB9-wT5L8xsM64WiKmP-U80DQg",
  authDomain: "online-shopping-centre-7afe4.firebaseapp.com",
  projectId: "online-shopping-centre-7afe4",
  storageBucket: "online-shopping-centre-7afe4.appspot.com",
  messagingSenderId: "798274427309",
  appId: "1:798274427309:web:8dd43af9e64b807c60e924",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }
  return userDocRef;
};
